const GITHUB_USERNAME = 'PrabhashSwarnajith';
const CERTIFICATES_REPO = 'certificates';
const CERT_TOKEN = import.meta.env.PUBLIC_GITHUB_CERT_TOKEN || '';

const IMAGE_EXT = /\.(png|jpg|jpeg|webp|svg)$/i;

const authHeaders = () =>
  CERT_TOKEN ? { Authorization: `Bearer ${CERT_TOKEN}` } : {};

// Promise cache — each key is only ever fetched once per page load
const _cache = {};
const fetchOnce = (key, fn) => {
  if (!_cache[key]) _cache[key] = fn();
  return _cache[key];
};

// ── Public repos ─────────────────────────────────────────────────────────────

export const getPublicRepos = () =>
  fetchOnce('repos', async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&per_page=100`,
        { headers: authHeaders() }
      );
      if (!res.ok) throw new Error(`GitHub ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data)) throw new Error('Unexpected response');
      return data.filter((r) => !r.fork && !r.private);
    } catch (err) {
      console.error('Failed to fetch repos:', err);
      return [];
    }
  });

// ── Certificates (private repo) ───────────────────────────────────────────────

const getMime = (name) => {
  if (/\.png$/i.test(name)) return 'image/png';
  if (/\.svg$/i.test(name)) return 'image/svg+xml';
  if (/\.webp$/i.test(name)) return 'image/webp';
  return 'image/jpeg';
};

export const getCertificates = () =>
  fetchOnce('certs', async () => {
    try {
      const listRes = await fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${CERTIFICATES_REPO}/contents`,
        { headers: authHeaders() }
      );
      if (!listRes.ok) throw new Error(`GitHub ${listRes.status}`);
      const files = await listRes.json();

      // Deduplicate by sha before fetching content
      const seenShas = new Set();
      const imageFiles = files.filter((f) => {
        if (f.type !== 'file' || !IMAGE_EXT.test(f.name)) return false;
        if (seenShas.has(f.sha)) return false;
        seenShas.add(f.sha);
        return true;
      });

      const certs = await Promise.all(
        imageFiles.map(async (f) => {
          try {
            const fileRes = await fetch(f.url, { headers: authHeaders() });
            if (!fileRes.ok) throw new Error();
            const fileData = await fileRes.json();
            return {
              id: f.sha,
              Title: f.name
                .replace(/\.[^.]+$/, '')
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, (c) => c.toUpperCase()),
              Img: `data:${getMime(f.name)};base64,${fileData.content.replace(/\n/g, '')}`,
            };
          } catch {
            return null;
          }
        })
      );

      return certs.filter(Boolean);
    } catch (err) {
      console.error('Failed to fetch certificates:', err);
      return [];
    }
  });

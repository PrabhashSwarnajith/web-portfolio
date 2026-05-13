import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Github } from "lucide-react";

const ProjectCard = ({ Img, Title, Description, Link: ProjectLink, id, TechStack = [], Github: GithubLink, badge }) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo is not available yet.");
    }
  };

  return (
    <div className="group relative w-full h-full">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-500 hover:border-purple-500/40 hover:shadow-purple-500/20 hover:shadow-2xl h-full flex flex-col">

        {/* Ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        <div className="relative p-5 z-10 flex flex-col h-full">
          {/* Image area */}
          <div className="relative overflow-hidden rounded-xl mb-4 flex-shrink-0">
            {/* Image hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <img
              src={Img}
              alt={Title}
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />

            {/* GitHub icon floating on image */}
            {GithubLink && (
              <a
                href={GithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                title="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {/* Live demo badge on image */}
            {ProjectLink && (
              <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-300">
                  Live
                </span>
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col gap-3">
            {badge && (
              <span className="self-start text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                {badge}
              </span>
            )}
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              {Title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
              {Description}
            </p>

            {/* Tech stack badges */}
            {TechStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {TechStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-indigo-500/40 hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className="pt-3 flex items-center justify-between border-t border-white/5 mt-auto">
              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium group/link"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                </a>
              ) : (
                <span className="text-gray-600 text-xs italic">Demo unavailable</span>
              )}

              {id ? (
                <Link
                  to={`/project/${id}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 text-sm font-medium border border-white/10 hover:border-purple-500/30"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <span className="text-gray-600 text-xs italic">No details</span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom border glow on hover */}
        <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default ProjectCard;

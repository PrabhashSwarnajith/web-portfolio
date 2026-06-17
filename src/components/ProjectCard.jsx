import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ Img, Title, Description, Link: ProjectLink, Github: GithubLink }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="group relative w-full h-full">
      <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 hover:border-primary-400/30">

        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative flex flex-col h-full p-6 z-10">

          <div className="relative overflow-hidden rounded-xl mb-5 bg-slate-800/50">
            <div className="relative w-full pb-[60%]">
              {isImageLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 animate-pulse"></div>
              )}
              <img
                src={Img}
                alt={Title}
                loading="lazy"
                onLoad={() => setIsImageLoading(false)}
                className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out ${
                  isImageLoading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl"></div>
          </div>

          <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight line-clamp-2 bg-gradient-to-r from-primary-300 via-secondary-300 to-pink-300 bg-clip-text text-transparent group-hover:from-primary-200 group-hover:via-secondary-200 group-hover:to-pink-200 transition-all duration-300">
            {Title}
          </h3>

          <p className="text-sm md:text-base text-slate-400 leading-relaxed line-clamp-3 mb-auto">
            {Description}
          </p>

          <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-2.5">
            {GithubLink && (
              <a
                href={GithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200 font-medium text-sm border border-white/10 hover:border-white/20"
                aria-label={`View source code of ${Title} on GitHub`}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}

            {ProjectLink && (
              <a
                href={ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-600/20 hover:bg-primary-600/40 text-primary-300 hover:text-primary-200 transition-all duration-200 font-medium text-sm border border-primary-500/20 hover:border-primary-400/50"
                aria-label={`View live demo of ${Title}`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
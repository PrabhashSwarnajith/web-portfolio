import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ Img, Title, Description, Link: ProjectLink, Github: GithubLink }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="group relative w-full h-full cursor-pointer">
      <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/15 hover:border-indigo-500/25">

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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

          <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight line-clamp-2 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent group-hover:from-indigo-200 group-hover:via-purple-200 group-hover:to-pink-200 transition-all duration-300">
            {Title}
          </h3>

          <p className="text-sm md:text-base text-slate-400 leading-relaxed line-clamp-3 mb-auto">
            {Description}
          </p>

          <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2.5">
            {GithubLink && (
              <a
                href={GithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200 font-medium text-sm border border-white/10 hover:border-white/20 cursor-pointer"
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
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 min-h-[44px] rounded-xl bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 hover:text-indigo-200 transition-all duration-200 font-medium text-sm border border-indigo-500/20 hover:border-indigo-400/50 cursor-pointer"
                aria-label={`View live demo of ${Title}`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
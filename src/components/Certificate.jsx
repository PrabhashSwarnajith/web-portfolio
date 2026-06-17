import React, { useState } from "react"
import { X, Maximize2 } from "lucide-react"

const Certificate = ({ certificateImage, title }) => {
	const [open, setOpen] = useState(false)

	return (
		<div className="w-full h-full">
			{/* Card */}
			<div
				onClick={() => setOpen(true)}
				role="button"
				tabIndex={0}
				aria-label={title ? `View certificate: ${title}` : "View certificate"}
				onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
				className="relative overflow-hidden rounded-xl border border-slate-200/8 bg-slate-900/60 shadow-lg transition-all duration-300 cursor-pointer flex flex-col hover:translate-y-[-6px] hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/35 group"
			>
				{/* Image */}
				<div className="relative w-full overflow-hidden flex-shrink-0" style={{ paddingTop: "66%" }}>
					<img
						className="absolute inset-0 w-full h-full object-cover transition-all duration-400 group-hover:scale-104 group-hover:brightness-105 group-hover:saturate-110"
						src={certificateImage}
						alt={title || "Certificate"}
						loading="lazy"
					/>
					{/* Hover overlay */}
					<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300 bg-[#030014]/55 backdrop-blur-sm group-hover:opacity-100">
						<Maximize2 className="w-9 h-9 text-purple-500" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }} />
						<span className="text-white text-xs font-semibold tracking-wide">View Full Size</span>
					</div>
				</div>

				{/* Title */}
				{title && (
					<div className="px-4 py-3 border-t border-white/6 bg-slate-950/50">
						<p className="m-0 text-slate-400 text-xs font-medium leading-relaxed line-clamp-2">
							{title}
						</p>
					</div>
				)}
			</div>

			{/* Fullscreen Modal */}
			{open && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-lg">
					<div className="relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/35">
						<button
							onClick={() => setOpen(false)}
							aria-label="Close"
							className="absolute top-3 right-3 z-10 p-2 text-white bg-black/65 hover:bg-black/85 rounded-lg transition-all duration-300 hover:rotate-90 hover:scale-110"
						>
							<X className="w-6 h-6" />
						</button>
						<img
							src={certificateImage}
							alt={title || "Certificate Full View"}
							className="block max-w-full max-h-[90vh] object-contain"
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default Certificate

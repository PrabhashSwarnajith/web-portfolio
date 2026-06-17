import React, { useState } from "react"
import { Modal, IconButton, Box, Zoom } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"

const Certificate = ({ certificateImage, title }) => {
	const [open, setOpen] = useState(false)

	return (
		<Box component="div" sx={{ width: "100%", height: "100%" }}>
			{/* Card */}
			<Box
				onClick={() => setOpen(true)}
				role="button"
				tabIndex={0}
				aria-label={title ? `View certificate: ${title}` : "View certificate"}
				onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: "1rem",
					border: "1px solid rgba(226, 232, 240, 0.08)",
					backgroundColor: "rgba(15, 23, 42, 0.6)",
					boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
					transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
					cursor: "pointer",
					display: "flex",
					flexDirection: "column",
					"&:hover": {
						transform: "translateY(-6px)",
						boxShadow: "0 16px 32px rgba(99,102,241,0.2)",
						borderColor: "rgba(99,102,241,0.35)",
						"& .cert-overlay": { opacity: 1 },
						"& .cert-img": {
							transform: "scale(1.04)",
							filter: "brightness(1.05) saturate(1.1)",
						},
					},
					"&:focus-visible": {
						outline: "2px solid rgba(99,102,241,0.8)",
						outlineOffset: "2px",
					},
				}}
			>
				{/* Image */}
				<Box sx={{ position: "relative", width: "100%", paddingTop: "66%", overflow: "hidden", flexShrink: 0 }}>
					<img
						className="cert-img"
						src={certificateImage}
						alt={title || "Certificate"}
						loading="lazy"
						style={{
							position: "absolute",
							inset: 0,
							width: "100%",
							height: "100%",
							objectFit: "cover",
							transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
						}}
					/>
					{/* Hover overlay */}
					<Box
						className="cert-overlay"
						sx={{
							position: "absolute",
							inset: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							gap: 1,
							opacity: 0,
							transition: "opacity 0.3s ease",
							backgroundColor: "rgba(3,0,20,0.55)",
							backdropFilter: "blur(3px)",
						}}
					>
						<FullscreenIcon sx={{ fontSize: 36, color: "#a855f7", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }} />
						<span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.5px" }}>
							View Full Size
						</span>
					</Box>
				</Box>

				{/* Title */}
				{title && (
					<Box
						sx={{
							px: 2,
							py: 1.5,
							borderTop: "1px solid rgba(255,255,255,0.06)",
							backgroundColor: "rgba(10,10,30,0.5)",
						}}
					>
						<p style={{
							margin: 0,
							color: "#cbd5e1",
							fontSize: "0.78rem",
							fontWeight: 500,
							lineHeight: 1.4,
							display: "-webkit-box",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
						}}>
							{title}
						</p>
					</Box>
				)}
			</Box>

			{/* Fullscreen Modal */}
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					p: 2,
					"& .MuiBackdrop-root": {
						backgroundColor: "rgba(0,0,0,0.92)",
						backdropFilter: "blur(10px)",
					},
				}}
			>
				<Zoom in={open}>
					<Box
						sx={{
							position: "relative",
							maxWidth: "90vw",
							maxHeight: "90vh",
							outline: "none",
							borderRadius: "1.25rem",
							overflow: "hidden",
							boxShadow: "0 24px 64px rgba(99,102,241,0.35)",
						}}
					>
						<IconButton
							onClick={() => setOpen(false)}
							aria-label="Close"
							size="large"
							sx={{
								position: "absolute",
								top: 12,
								right: 12,
								zIndex: 10,
								color: "white",
								bgcolor: "rgba(0,0,0,0.65)",
								"&:hover": { bgcolor: "rgba(0,0,0,0.85)", transform: "rotate(90deg) scale(1.1)" },
								transition: "all 0.3s ease",
							}}
						>
							<CloseIcon sx={{ fontSize: 24 }} />
						</IconButton>
						<img
							src={certificateImage}
							alt={title || "Certificate Full View"}
							style={{ display: "block", maxWidth: "100%", maxHeight: "90vh", objectFit: "contain" }}
						/>
					</Box>
				</Zoom>
			</Modal>
		</Box>
	)
}

export default Certificate

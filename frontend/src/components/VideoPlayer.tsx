// import { Play, Volume2, Maximize, SkipForward } from "lucide-react";
// import { useState } from "react";
// import videoThumbnail from "@/assets/video-thumbnail.jpg";

// const VideoPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-secondary group cursor-pointer">
//       <img
//         src={videoThumbnail}
//         alt="Video thumbnail"
//         className="w-full h-full object-cover"
//       />

//       {/* Play overlay */}
//       {!isPlaying && (
//         <div
//           className="absolute inset-0 flex items-center justify-center bg-background/30 transition-opacity group-hover:bg-background/40"
//           onClick={() => setIsPlaying(true)}
//         >
//           <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
//             <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
//           </div>
//         </div>
//       )}

//       {/* Controls bar */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent px-4 py-3">
//         {/* Progress bar */}
//         <div className="w-full h-1 bg-muted rounded-full mb-3 cursor-pointer group/bar">
//           <div className="h-full w-[35%] bg-primary rounded-full relative">
//             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary opacity-0 group-hover/bar:opacity-100 transition-opacity" />
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               <Play className="w-5 h-5" fill={isPlaying ? "currentColor" : "none"} />
//             </button>
//             <SkipForward className="w-5 h-5 text-foreground hover:text-primary transition-colors cursor-pointer" />
//             <Volume2 className="w-5 h-5 text-foreground hover:text-primary transition-colors cursor-pointer" />
//             <span className="text-xs text-muted-foreground font-medium">26:00 / 1:28:23</span>
//           </div>
//           <Maximize className="w-5 h-5 text-foreground hover:text-primary transition-colors cursor-pointer" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

 import { useEffect, useRef } from "react";
 import Hls from "hls.js";

 export default function VideoPlayer() {
   const videoRef = useRef(null);
   useEffect(() => {
     const video = videoRef.current;
     const videoSrc = "https:ik.imagekit.io/elhyr4wfz/Huawei%20-%20Dream%20It%20Possible%20-%20Huawei%20Mobile%20Srbija%20(720p,%20h264).mp4/ik-master.m3u8?tr=sr-360_480_720_1080";

     if (Hls.isSupported()) {
       const hls = new Hls;

       hls.loadSource(videoSrc);
       hls.attachMedia(video);
       hls.on(Hls.Events.MANIFEST_PARSED, () => {
         video.play();
       });
       return () => {
         hls.destroy();
       };
     }
   }, []);
   return (
     <video
       ref={videoRef}
       controls
       width="800"
     />
   );
}

// import { useEffect, useRef } from "react";
// import Hls from "hls.js";

// export default function VideoPlayer() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (!video) return;

//     const videoSrc =
//       "https://ik.imagekit.io/elhyr4wfz/Huawei%20-%20Dream%20It%20Possible%20-%20Huawei%20Mobile%20Srbija%20(720p,%20h264).mp4/ik-master.m3u8?tr=sr-360_480_720_1080";

//     let hls;

//     if (Hls.isSupported()) {
//       hls = new Hls();
//       hls.loadSource(videoSrc);
//       hls.attachMedia(video);

//       hls.on(Hls.Events.MANIFEST_PARSED, () => {
//         video.play().catch(() => {});
//       });
//     } 
//     else if (video.canPlayType("application/vnd.apple.mpegurl")) {
//       video.src = videoSrc;
//       video.addEventListener("loadedmetadata", () => {
//         video.play().catch(() => {});
//       });
//     }

//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };
//   }, []);

//   return <video ref={videoRef} controls width="800" />;
// }

// export default function VideoPlayer() {
//   return (
//     //assim que o servidor estiver bom, vou mudar isso. Vamos usar hsl
//     <video
//     src="/video.mp4"
//     controls
//     width="800"/>
//   )
// };
import { Box, Typography } from "@mui/material";

export default function TopLine() {
  return (
    <Box sx={{ overflow: "hidden", whiteSpace: "nowrap", backgroundColor: " #a4795b", height: '44px',  display: "flex", alignItems: "center" }}>
      <Box component="div" sx={{ display: "inline-block", animation: "scroll 180s linear infinite", willChange: "transform",}}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Typography key={index} component="span" sx={{ marginRight: "32px", fontSize: "16px", fontWeight: 400, fontFamily: "Montserrat, sans-serif", color: '#fff', }}>
            Coffee Lane is open! Use{" "}
            <strong style={{ fontWeight: 500, fontSize: "18px", }}>WELCOME 10</strong> for 10% off
            your first order!
          </Typography>
        ))}
      </Box>

      <style>
        {`
          @keyframes scroll {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
}

// import { Box, Typography } from "@mui/material";

// export default function TopLine() {
//   const message = "Coffee Lane is open! Use WELCOME10 for 10% off your first order!";

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         overflow: "hidden",
//         backgroundColor: "#a4795b",
//         height: "44px",
//         display: "flex",
//         alignItems: "center",
//         fontFamily: "Montserrat, sans-serif",
//          WebkitFontSmoothing: "antialiased",
//         MozOsxFontSmoothing: "grayscale",
//         textRendering: "optimizeLegibility",
//       }}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           display: "flex",
//           whiteSpace: "nowrap",
//           animation: "marquee 60s linear infinite",
//           willChange: "transform",
//         }}
//       >
//         {/* Дублируем текст дважды для бесшовности */}
//         {[...Array(2)].map((_, i) => (
//           <Typography
//             key={i}
//             component="div"
//             sx={{
//               display: "flex",
//               color: "#fff",
//               fontSize: "16px",
//               fontWeight: 400,
//               marginRight: "64px",
//             }}
//           >
//             {Array.from({ length: 5 }).map((_, j) => (
//               <span key={j} style={{ marginRight: "32px" }}>
//                 {message.split("WELCOME10")[0]}
//                 <strong style={{ fontWeight: 600, fontSize: "18px" }}>WELCOME10</strong>
//                 {message.split("WELCOME10")[1]}
//               </span>
//             ))}
//           </Typography>
//         ))}
//       </Box>

//       {/* Анимация */}
//       <style>
//         {`
//           @keyframes marquee {
//             0% {
//               transform: translateX(0%);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }
//         `}
//       </style>
//     </Box>
//   );
// }

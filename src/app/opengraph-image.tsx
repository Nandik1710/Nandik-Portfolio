import { ImageResponse } from "next/og";

export const alt = "Nandik Dawar — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "#fff9f2", color: "#10131a", fontFamily: "Arial" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 26, fontWeight: 700 }}>
        <span style={{ display: "flex", width: 58, height: 58, alignItems: "center", justifyContent: "center", borderRadius: 18, background: "#d94b32", color: "#fff", fontSize: 19 }}>ND</span>
        Nandik Dawar
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
        <div style={{ display: "flex", marginBottom: 20, color: "#4c63ff", fontSize: 18, fontWeight: 700, letterSpacing: "0.12em" }}>FULL STACK DEVELOPER *</div>
        <div style={{ display: "flex", fontSize: 66, lineHeight: 1.03, fontWeight: 800, letterSpacing: "-0.05em" }}>I build digital products that solve real problems.</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 18, color: "#60646c" }}>
        <span>React · Node.js · FastAPI · AWS</span>
        <span style={{ display: "flex", gap: 12 }}><i style={{ width: 24, height: 24, borderRadius: 8, background: "#5ed6c0" }} /><i style={{ width: 24, height: 24, borderRadius: 8, background: "#ffc75a" }} /><i style={{ width: 24, height: 24, borderRadius: 8, background: "#8b72ff" }} /></span>
      </div>
    </div>,
    { ...size },
  );
}

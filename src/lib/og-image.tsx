import { siteConfig } from "@/lib/site-config";

export const ogImageSize = { width: 1200, height: 630 };

export function OgImageMarkup() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050505",
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(30,79,255,0.55) 0%, transparent 55%), radial-gradient(circle at 80% 10%, rgba(56,189,248,0.45) 0%, transparent 55%), radial-gradient(circle at 50% 100%, rgba(11,31,58,0.9) 0%, transparent 60%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 120,
          height: 120,
          borderRadius: 28,
          background: "linear-gradient(135deg, #1e4fff, #38bdf8)",
          marginBottom: 36,
          boxShadow: "0 0 80px 10px rgba(56,189,248,0.5)",
        }}
      >
        <div style={{ display: "flex", fontSize: 52, fontWeight: 800, color: "#fff" }}>DM</div>
      </div>
      <div style={{ display: "flex", fontSize: 72, fontWeight: 800, color: "#fff", letterSpacing: -2 }}>
        DMWin Game
      </div>
      <div style={{ display: "flex", marginTop: 20, fontSize: 32, color: "#7dd8fc" }}>{siteConfig.tagline}</div>
    </div>
  );
}

import { ImageResponse } from "next/og";

export const alt = "AwayLabs website development, apps, SEO, Google Ads, and Meta Ads";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background:
            "radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.32), transparent 32%), radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.35), transparent 34%), linear-gradient(135deg, #020617 0%, #0f172a 55%, #020617 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #22d3ee, #2563eb, #8b5cf6)",
              fontSize: 34,
              fontWeight: 900,
              boxShadow: "0 0 60px rgba(59, 130, 246, 0.55)",
            }}
          >
            AL
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: -2 }}>AwayLabs</div>
            <div style={{ marginTop: 6, fontSize: 22, color: "#67e8f9" }}>Build. Rank. Grow.</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ maxWidth: 900, fontSize: 76, lineHeight: 0.95, fontWeight: 900, letterSpacing: -4 }}>
            Website Development, Apps, SEO & Ads
          </div>
          <div style={{ maxWidth: 850, fontSize: 28, lineHeight: 1.35, color: "#cbd5e1" }}>
            Hyderabad and remote digital agency for websites, app development, SEO, Google Ads, and Meta Ads.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

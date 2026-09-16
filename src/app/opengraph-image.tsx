import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/constants";

export const alt =
  "SHIFT+G — IA, software e transformação digital em União da Vitória e região";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse uses Satori's inline style API; the website UI uses Chakra.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#000000",
          padding: "54px 64px",
          borderBottom: "18px solid #003FCD",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 700, color: "#003FCD" }}>
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 20 }}>ESTRATÉGIA + TECNOLOGIA</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-3px",
            lineHeight: 1.1,
          }}
        >
          <div>Inteligência artificial.</div>
          <div>Software sob medida.</div>
          <div style={{ color: "#003FCD" }}>Ao lado da sua empresa.</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 23,
            borderTop: "1px solid #cccccc",
            paddingTop: 24,
          }}
        >
          <div>
            União da Vitória · Porto União · São Mateus do Sul · Curitiba
          </div>
          <div style={{ fontSize: 18, color: "#003FCD" }}>shiftg.com.br</div>
        </div>
      </div>
    ),
    size,
  );
}

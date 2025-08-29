import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "SHIFT+G - Inteligência Artificial e Dados sob medida";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #667eea 0%, #3182ce 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "white",
            marginBottom: 20,
            letterSpacing: "-2px",
          }}
        >
          SHIFT+G
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 300,
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: 40,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Inteligência Artificial e Dados
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          Transformando dados complexos em decisões estratégicas
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { SITE_NAME, SITE_URL } from "@/constants";
import { projects } from "@/constants/projects";

export const alt = "Projetos do ecossistema SHIFT+G — tecnologia e IA aplicada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

// ImageResponse uses Satori's inline styles instead of website UI components.
export default async function Image({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((project) => project.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "48px 64px 38px",
          background: "#ffffff",
          color: "#111111",
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
          <div style={{ color: "#003FCD", fontSize: 38, fontWeight: 700 }}>
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 19, letterSpacing: "2px" }}>
            ECOSSISTEMA DE PROJETOS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              color: "#003FCD",
            }}
          >
            <div
              style={{ width: 16, height: 16, background: "#b8923a" }}
            />
            {project.category}
          </div>
          <div
            style={{
              fontSize: project.name.length > 12 ? 94 : 108,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-5px",
            }}
          >
            {project.name}
          </div>
          <div
            style={{
              maxWidth: 930,
              fontSize: 42,
              lineHeight: 1.2,
              letterSpacing: "-1px",
            }}
          >
            {project.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #cccccc",
            paddingTop: 22,
            fontSize: 21,
          }}
        >
          <div style={{ color: "#003FCD" }}>
            {`${new URL(SITE_URL).hostname}/projetos/${project.slug}`}
          </div>
          <div>
            {`${String(projectIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const alt = "Descomplica Dev Dan — Desenvolvedor Web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 72, background: "#030706", color: "#edf2ef", fontFamily: "sans-serif" }}>
      <div style={{ color: "#42e862", fontSize: 26, fontFamily: "monospace" }}>&gt;_ sudo be_myself</div>
      <div style={{ marginTop: 56, fontSize: 76, fontWeight: 800, letterSpacing: -4 }}>Descomplica Dev Dan</div>
      <div style={{ marginTop: 20, color: "#a9b5ae", fontSize: 34 }}>Desenvolvedor Web &amp; Analista de Sistemas</div>
      <div style={{ width: 170, height: 6, marginTop: 48, borderRadius: 99, background: "#42e862" }} />
    </div>,
    size,
  );
}

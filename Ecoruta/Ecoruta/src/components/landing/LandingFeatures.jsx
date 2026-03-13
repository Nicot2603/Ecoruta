const FEATURES = [
  {
    num: "01",
    title: "Panel de Administración",
    desc: "Monitoreo de flota en tiempo real, gestión de rutas por zona y generación de reportes operativos.",
    items: ["Monitoreo de 50 repartidores", "Optimización de rutas por zona", "Reportes de rendimiento"],
  },
  {
    num: "02",
    title: "App del Repartidor",
    desc: "Ruta del día organizada, actualización de estados de entrega y captura de firma digital del cliente.",
    items: ["Ruta optimizada del día", "Estados: entregado / novedad", "Firma digital en pantalla"],
  },
  {
    num: "03",
    title: "Portal del Cliente",
    desc: "Rastreo en tiempo real, notificaciones automáticas y confirmación de recepción con firma.",
    items: ["Rastreo GPS en vivo", "Notificaciones push y SMS", "Confirmación con firma"],
  },
];

export default function LandingFeatures() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 48px" }}>
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontSize: "0.65rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>Cómo funciona</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", color: "#2a0a12", fontWeight: 400, margin: 0, lineHeight: 1.15 }}>
          Tres interfaces,<br /><em>un solo sistema.</em>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {FEATURES.map((f, i) => (
          <div key={f.num}
            style={{ background: i === 0 ? "#6b1a2a" : "white", borderRadius: 20, padding: "36px 32px", border: i === 0 ? "none" : "1px solid #f0e8e2", transition: "all 0.25s", cursor: "default" }}
            onMouseEnter={e => { if (i !== 0) { e.currentTarget.style.boxShadow = "0 8px 32px rgba(107,26,42,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.78rem", color: i === 0 ? "rgba(249,240,227,0.4)" : "#b89a8a", letterSpacing: "0.1em", marginBottom: 20 }}>{f.num}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: i === 0 ? "#f9f0e3" : "#2a0a12", fontWeight: 500, marginBottom: 12, margin: "0 0 12px" }}>{f.title}</h3>
            <p style={{ fontSize: "0.78rem", color: i === 0 ? "rgba(249,240,227,0.6)" : "#9a8075", lineHeight: 1.75, fontWeight: 300, marginBottom: 24 }}>{f.desc}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {f.items.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: i === 0 ? "rgba(249,240,227,0.4)" : "#d5b8b0", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.74rem", color: i === 0 ? "rgba(249,240,227,0.7)" : "#7a6255" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
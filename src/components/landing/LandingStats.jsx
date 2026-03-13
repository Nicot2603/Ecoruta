const STATS = [
  { value: "50",    label: "Repartidores",     sub: "En toda Bogotá"       },
  { value: "10K+",  label: "Entregas al mes",  sub: "Promedio mensual"     },
  { value: "28min", label: "Tiempo promedio",  sub: "Por entrega"          },
  { value: "98%",   label: "Satisfacción",     sub: "Clientes conformes"   },
];

export default function LandingStats() {
  return (
    <section style={{ background: "#6b1a2a" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ padding: "48px 0", borderRight: i < 3 ? "1px solid rgba(249,240,227,0.1)" : "none", paddingLeft: i > 0 ? 40 : 0, paddingRight: i < 3 ? 40 : 0 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", color: "#f9f0e3", fontWeight: 600, letterSpacing: "-0.02em" }}>{s.value}</div>
            <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(249,240,227,0.8)", marginTop: 8 }}>{s.label}</div>
            <div style={{ fontSize: "0.68rem", color: "rgba(249,240,227,0.4)", marginTop: 3, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
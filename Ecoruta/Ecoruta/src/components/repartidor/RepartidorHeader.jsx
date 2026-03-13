export default function RepartidorHeader({ total }) {
  return (
    <div style={{ background: "#6b1a2a", borderRadius: 16, padding: "28px 32px", color: "#f9f0e3", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <div style={{ fontSize: "0.65rem", color: "rgba(249,240,227,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Repartidor activo</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 400 }}>Carlos Martínez</div>
        <div style={{ fontSize: "0.72rem", color: "rgba(249,240,227,0.55)", marginTop: 3 }}>Zona Norte · REP-012</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "3rem", fontWeight: 600, lineHeight: 1, color: "#f9f0e3" }}>{total}</div>
        <div style={{ fontSize: "0.65rem", color: "rgba(249,240,227,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 2 }}>Entregas hoy</div>
      </div>
    </div>
  );
}
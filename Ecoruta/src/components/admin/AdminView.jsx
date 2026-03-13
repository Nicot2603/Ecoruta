import StatsGrid from "./StatsGrid";
import EntregasTable from "./EntregasTable";

export default function AdminView() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 40px 80px", display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: "0.65rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>Panel</div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", color: "#2a0a12", fontWeight: 400, margin: 0 }}>Administración</h1>
      </div>
      <StatsGrid />
      <EntregasTable />
    </div>
  );
}
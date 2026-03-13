const BADGE = {
  "En camino": { bg: "#f0e8e2", color: "#6b1a2a"  },
  "Entregado": { bg: "#f0ede8", color: "#5a3e28"  },
  "Novedad":   { bg: "#fdf3ec", color: "#8b4513"  },
  "Pendiente": { bg: "#f5f3f1", color: "#9a8075"  },
};

export default function PaqueteCard({ paquete, selected, onSelect, onActualizar }) {
  const s = BADGE[paquete.estado] ?? BADGE["Pendiente"];
  return (
    <div onClick={onSelect}
      style={{ background: "white", borderRadius: 14, padding: "20px 22px", cursor: "pointer", border: selected ? "1.5px solid #6b1a2a" : "1px solid #f0e8e2", boxShadow: selected ? "0 4px 24px rgba(107,26,42,0.1)" : "none", transition: "all 0.2s" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.9rem", fontWeight: 600, color: "#6b1a2a", marginBottom: 4 }}>{paquete.id}</div>
          <div style={{ fontWeight: 600, color: "#2a0a12", fontSize: "0.88rem" }}>{paquete.cliente}</div>
          <div style={{ fontSize: "0.74rem", color: "#b89a8a", marginTop: 3 }}>{paquete.dir}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ background: s.bg, color: s.color, padding: "4px 12px", borderRadius: 99, fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{paquete.estado}</span>
          <div style={{ fontSize: "0.7rem", color: "#b89a8a", marginTop: 6 }}>{paquete.hora}</div>
        </div>
      </div>
      {selected && (
        <button onClick={e => { e.stopPropagation(); onActualizar(); }}
          style={{ marginTop: 16, width: "100%", padding: "11px", borderRadius: 10, background: "#6b1a2a", color: "#f9f0e3", border: "none", fontWeight: 600, fontSize: "0.8rem", cursor: "pointer", fontFamily: "'Outfit',sans-serif", letterSpacing: "0.02em" }}>
          Actualizar Estado →
        </button>
      )}
    </div>
  );
}
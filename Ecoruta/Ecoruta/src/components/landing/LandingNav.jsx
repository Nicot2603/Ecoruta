export default function LandingNav({ onLogin }) {
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(249,246,241,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid #e8e0d5" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: "#6b1a2a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#f9f0e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#2a0a12", lineHeight: 1.1 }}>EcoRuta</div>
            <div style={{ fontSize: "0.52rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.14em" }}>Logística Siglo XXI</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "0.78rem", color: "#9a8075", fontWeight: 300 }}>¿Ya tienes cuenta?</span>
          <button onClick={onLogin}
            style={{ padding: "9px 24px", borderRadius: 9, background: "#6b1a2a", color: "#f9f0e3", border: "none", fontWeight: 600, fontSize: "0.8rem", cursor: "pointer", fontFamily: "'Outfit',sans-serif", letterSpacing: "0.02em" }}>
            Iniciar sesión
          </button>
        </div>

      </div>
    </nav>
  );
}
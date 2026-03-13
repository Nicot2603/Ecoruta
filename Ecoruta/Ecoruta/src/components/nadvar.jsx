const ROL_LABEL = { admin: "Administrador", repartidor: "Repartidor", cliente: "Cliente" };

export default function Navbar({ tab, setTab, user, onLogout, tabs }) {
  const allowedTabs = tabs ?? [
    { id: "home", label: "Inicio" },
    ...(user?.rol === "admin" ? [{ id: "admin", label: "Administración" }] : []),
    ...(user?.rol === "repartidor" ? [{ id: "repartidor", label: "Repartidor" }] : []),
    ...(user?.rol === "cliente" ? [{ id: "cliente", label: "Cliente" }] : []),
  ];

  return (
    <header style={{ background: "#f9f6f1", borderBottom: "1px solid #e8e0d5", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, background: "#6b1a2a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#f9f0e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#2a0a12", letterSpacing: "0.01em" }}>EcoRuta</div>
            <div style={{ fontSize: "0.55rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: -1 }}>Logística Siglo XXI</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 2 }}>
          {allowedTabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "7px 20px", borderRadius: 8, fontSize: "0.78rem", fontWeight: tab === t.id ? 600 : 400, border: "none", cursor: "pointer", background: tab === t.id ? "#6b1a2a" : "transparent", color: tab === t.id ? "#f9f0e3" : "#7a6255", fontFamily: "'Outfit', sans-serif", transition: "all 0.2s", letterSpacing: "0.01em" }}>
              {t.label}
            </button>
          ))}
        </nav>

        {/* User */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.76rem", fontWeight: 600, color: "#2a0a12" }}>{user?.email}</div>
            <div style={{ fontSize: "0.62rem", color: "#b89a8a" }}>{ROL_LABEL[user?.rol]}</div>
          </div>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#6b1a2a", display: "flex", alignItems: "center", justifyContent: "center", color: "#f9f0e3", fontWeight: 700, fontSize: "0.78rem" }}>
            {user?.email?.[0]?.toUpperCase()}
          </div>
          <button onClick={onLogout}
            style={{ padding: "6px 14px", borderRadius: 8, background: "transparent", border: "1px solid #e8e0d5", cursor: "pointer", fontSize: "0.72rem", fontWeight: 500, color: "#7a6255", fontFamily: "'Outfit', sans-serif" }}>
            Salir
          </button>
        </div>

      </div>
    </header>
  );
}
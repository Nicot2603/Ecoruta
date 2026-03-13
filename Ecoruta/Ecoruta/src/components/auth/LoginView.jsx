import { useState } from "react";

const ROLES = [
  { id: "admin",      label: "Administrador", icon: "◈", desc: "Panel de control y monitoreo" },
  { id: "repartidor", label: "Repartidor",    icon: "◉", desc: "Gestión de entregas del día"  },
  { id: "cliente",    label: "Cliente",       icon: "◎", desc: "Rastreo de tu pedido"         },
];

export default function LoginView({ onLogin, onVolver }) {
  const [rol, setRol]   = useState(null);
  const [step, setStep] = useState("rol");
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div style={{ minHeight: "100vh", background: "#f9f6f1", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{ width: "100%", maxWidth: 440, padding: "0 20px" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "#6b1a2a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#f9f0e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#2a0a12" }}>EcoRuta</div>
          <div style={{ fontSize: "0.6rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 2 }}>Logística Siglo XXI</div>
        </div>

        {/* Card */}
        <div style={{ background: "white", borderRadius: 20, padding: "36px 32px", border: "1px solid #f0e8e2", boxShadow: "0 4px 32px rgba(107,26,42,0.06)" }}>

          {step === "rol" && (
            <>
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#2a0a12", marginBottom: 4 }}>Bienvenido</div>
                <div style={{ fontSize: "0.78rem", color: "#b89a8a", fontWeight: 300 }}>Selecciona tu perfil para continuar</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {ROLES.map(r => (
                  <div key={r.id} onClick={() => { setRol(r.id); setStep("form"); }}
                    style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px", borderRadius: 12, border: "1px solid #e8e0d5", cursor: "pointer", background: "#fdfaf8", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#6b1a2a"; e.currentTarget.style.background = "#fdf5f2"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8e0d5"; e.currentTarget.style.background = "#fdfaf8"; }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "#f5ede8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: "#6b1a2a" }}>{r.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: "#2a0a12", fontSize: "0.88rem" }}>{r.label}</div>
                      <div style={{ fontSize: "0.7rem", color: "#b89a8a", marginTop: 1 }}>{r.desc}</div>
                    </div>
                    <div style={{ color: "#d5c4bc" }}>›</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === "form" && (
            <>
              <button onClick={() => setStep("rol")}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#b89a8a", fontSize: "0.74rem", marginBottom: 24, padding: 0, fontFamily: "'Outfit',sans-serif" }}>
                ← Volver
              </button>
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#2a0a12", marginBottom: 4 }}>
                  {ROLES.find(r => r.id === rol)?.label}
                </div>
                <div style={{ fontSize: "0.76rem", color: "#b89a8a", fontWeight: 300 }}>Ingresa tus credenciales de acceso</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[["email","Correo electrónico","correo@ecoruta.com","email"],["password","Contraseña","••••••••","password"]].map(([key,label,ph,type]) => (
                  <div key={key}>
                    <label style={{ fontSize: "0.68rem", fontWeight: 600, color: "#7a6255", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</label>
                    <input type={type} placeholder={ph}
                      onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                      style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid #e8e0d5", fontSize: "0.84rem", fontFamily: "'Outfit',sans-serif", outline: "none", boxSizing: "border-box", color: "#2a0a12", background: "white" }}
                      onFocus={e => e.target.style.borderColor = "#6b1a2a"}
                      onBlur={e => e.target.style.borderColor = "#e8e0d5"} />
                  </div>
                ))}
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.7rem", color: "#6b1a2a", cursor: "pointer", fontWeight: 500 }}>¿Olvidaste tu contraseña?</span>
                </div>
                <button onClick={() => onLogin({ rol, ...form })}
                  style={{ width: "100%", padding: "12px", borderRadius: 10, background: "#6b1a2a", color: "#f9f0e3", border: "none", fontWeight: 600, fontSize: "0.86rem", cursor: "pointer", fontFamily: "'Outfit',sans-serif", marginTop: 4 }}>
                  Ingresar →
                </button>
              </div>
            </>
          )}
        </div>

        {/* Volver a landing */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button onClick={onVolver}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.72rem", color: "#b89a8a", fontFamily: "'Outfit',sans-serif" }}>
            ← Volver al inicio
          </button>
        </div>

        <div style={{ textAlign: "center", marginTop: 16, fontSize: "0.62rem", color: "#c9b8b0" }}>
          © 2026 EcoRuta · Logística Siglo XXI · Bogotá, Colombia
        </div>
      </div>
    </div>
  );
}
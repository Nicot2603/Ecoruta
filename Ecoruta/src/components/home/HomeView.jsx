import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturesSection from "./FeaturesSection";

export default function HomeView({ user, setTab }) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 80px" }}>
      <HeroSection user={user} setTab={setTab} />
      <StatsSection />
      <FeaturesSection setTab={setTab} />
    </div>
  );
}
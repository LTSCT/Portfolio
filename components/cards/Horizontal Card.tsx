import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { TeamworkHubSection } from "@/components/TeamworkHubSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";


export default function App() {
  return (
    <div className="min-h-screen">
      <TeamworkHubSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}

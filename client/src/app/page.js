import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950">
      <Navbar />

      <HeroSection />
    </main>
  );
}

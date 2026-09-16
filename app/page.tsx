import { Hero } from "@/components/hero/hero.component";
import { StreamingLinks } from "@/components/streaming-links/streaming-links.component";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <StreamingLinks />
    </main>
  );
}

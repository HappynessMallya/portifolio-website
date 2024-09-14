import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

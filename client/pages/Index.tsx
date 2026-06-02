import Header from "@/components/workshop/Header";
import Hero from "@/components/workshop/Hero";
import About from "@/components/workshop/About";
import Program from "@/components/workshop/Program";
import Register from "@/components/workshop/Register";
import Contact from "@/components/workshop/Contact";
import Footer from "@/components/workshop/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Program />
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}

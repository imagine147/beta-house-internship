import Hero from "@/components/hero/home";
import NavBar from "@/layouts/nav";
import Image from "next/image";
import "./globals.css";
import Footer from "@/layouts/footer";
import DiscoverProperties from "@/components/discover/discoverProperties";
import Properties from "@/components/properties/properties";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Frame 9325.svg')" }}>
      <NavBar/>
      <Hero/>
      </div>
      <div id="properties"><Properties/></div>
      <DiscoverProperties/>
      <Footer/>
    </div>
  );
}
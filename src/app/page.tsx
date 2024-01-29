import Image from "next/image";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <LandingPage />
    </main>
  );
}

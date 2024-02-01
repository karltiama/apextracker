import Image from "next/image";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Form />
    </main>
  );
}

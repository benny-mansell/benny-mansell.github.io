import Image from "next/image";
import Header from "./components/header";
import Nav from "./components/nav";
import { Video } from "./components/video";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <main className="flex min-h-screen flex-col justify-between p-24 bg-stone-50">
        <Video />
        <Video />
      </main>
    </>
  );
}

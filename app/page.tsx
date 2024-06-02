import Image from "next/image";
import Header from "./components/header";
import Nav from "./components/nav";
import Video from "./components/video";

export default function Home() {
  return (
    <div className="bg-stone-50">
      <Nav />
      <Header />
      <main className="flex min-h-screen flex-col justify-between p-24">
        <div>
          <Video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            width={500}
            height={400}
          />
          <Video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            width={500}
            height={400}
          />
          <Video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            width={500}
            height={400}
          />
        </div>
      </main>
    </div>
  );
}

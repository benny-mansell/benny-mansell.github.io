import Image from "next/image";
import Nav from "./components/nav";
import Video from "./components/video";

export default function Home() {
  return (
    <div className=" bg-gradient-to-b from-zinc-950 to-[#44534f] flex flex-row">
      <main className="flex flex-col lg:flex-row min-h-screen justify-between ">
        <Nav />
        <div className="flex flex-col">
          <Video
            src="https://drive.google.com/file/d/15zYR30LUT2w0MarZ9aF1EIGhpntJrzec/preview"
            width={600}
            height={400}
          />
          <Video
            src="https://drive.google.com/file/d/1WtviT1y57vQYhOXpBGFH6lEV5ekAp4o3/preview"
            width={600}
            height={400}
          />
          <Video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            width={600}
            height={400}
          />
        </div>
      </main>
    </div>
  );
}

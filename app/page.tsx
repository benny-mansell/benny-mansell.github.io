import Nav from "./components/nav";
import Video from "./components/video";

export default function Home() {
  return (
    <div className="w-screen w-full h-full">
      <main className="bg-gradient-to-b from-zinc-950 to-[#44534f] flex flex-col lg:flex-row h-full min-w-full justify-evenly pb-24">
        <div className="flex flex-col">
          <Nav />
        </div>
        <div className="flex flex-col items-center">
          <Video
            src="https://drive.google.com/file/d/15zYR30LUT2w0MarZ9aF1EIGhpntJrzec/preview"
            content={
              <div className="flex flex-col py-5 px-5 lg:w-64 text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl mb-2 font-bold text-zinc-100">
                  SUSPENSION
                </h2>
                <p className="text-zinc-100 font-semibold">SEPTEMBER 2024</p>
              </div>
            }
          />
          <Video
            src="https://drive.google.com/file/d/1WtviT1y57vQYhOXpBGFH6lEV5ekAp4o3/preview"
            content={
              <div className="flex flex-col py-5 px-5 lg:max-w-64 text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl mb-2 font-bold text-zinc-100">
                  THE BARS AT LAKE MERRITT
                </h2>
                <h2 className="text-2xl lg:text-3xl mb-2 text-zinc-100">
                  A SHORT FILM
                </h2>

                <p className="text-zinc-100 font-semibold">AUGUST 2024</p>
                <p className="text-zinc-100 text-sm ">
                  This summer, I worked on a project interviewing individuals
                  working out at the pink and black exercise bars of Lake
                  Merritt. Shoutout Reymundo, Connor, Will, Ian, Isa, Q, Marcus,
                  George, and Jordan.
                </p>
              </div>
            }
          />
        </div>
      </main>
    </div>
  );
}

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
            src="https://drive.google.com/file/d/1vaw5rVsp3dBeq1XVpjhHVJ693Lm-ipHx/preview"
            content={
              <div className="flex flex-col py-5 px-5 lg:max-w-64 text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl mb-2 font-bold text-zinc-100">
                  BRAN AND PARK
                </h2>

                <p className="text-zinc-100 font-semibold">DECEMBER 2024</p>
                <p className="text-zinc-100 text-sm ">
                  5 classmates and I were given a script and created a short
                  film.
                </p>
              </div>
            }
          />
          <Video
            src="https://drive.google.com/file/d/1NGrdSE7k5KRud_f9tV3HHYeIbpNEbAVl/preview"
            content={
              <div className="flex flex-col py-5 px-5 lg:max-w-64 text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl mb-2 font-bold text-zinc-100">
                  ADIDAS <br /> &quot;YOU GOT THIS&quot;
                </h2>
                <p className="text-zinc-100 font-semibold">OCTOBER 2024</p>
              </div>
            }
          />
          <Video
            src="https://drive.google.com/file/d/1RH2JgtTctHcBqxlkUmiPZsQebZ69W747/preview"
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
            src="https://www.youtube.com/embed/M4_AA_Lg9bs?si=6X8LKNWCaqv7y6Lw"
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

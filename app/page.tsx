import Nav from "./components/Nav";
import Video from "./components/Video";

export default function Home() {
  return (
    <div className="w-screen w-full h-full">
      <main className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 flex flex-col lg:flex-row h-full min-w-full justify-evenly pb-24">
        <div className="flex flex-col">
          <Nav />
        </div>
        <div className="columns-1 lg:columns-2 items-center">
          <Video
            src="https://benny-files-100.s3.us-east-1.amazonaws.com/NEW+BALANCE+SPEC.mov"
            content={
              <div className="py-5 px-2 lg:w-100 lg:h-200 text-center">
                <h2
                  id="videoTitle"
                  className="text-2xl font-bold text-zinc-100"
                >
                  NEW BALANCE SPEC
                </h2>
                <p className="text-zinc-100 py-1 font-semibold">OCTOBER 2025</p>
                <p className="text-zinc-100 text-sm ">
                  Curated a spec ad using fish-eye, camcorder, and Sony a7000.
                  Paid close attention to framing, quick cuts and timing with
                  music to tell the story of the product in a college setting.
                  Ideated, directed and edited.
                </p>
              </div>
            }
          />
          <Video
            src="https://benny-files-100.s3.us-east-1.amazonaws.com/7b764bbd-5818-4d0a-a339-e931b7a948c0.MP4"
            content={
              <div className="py-5 px-2 lg:w-100 lg:h-200 text-center">
                <h2
                  id="videoTitle"
                  className="text-2xl font-bold text-zinc-100"
                >
                  KINIGOL CAMISETAS
                </h2>
                <p className="text-zinc-100 py-1 font-semibold">APRIL 2025</p>
                <p className="text-zinc-100 text-sm ">
                  Crafted a short promotional ad for football jersey store
                  Kinigol Camisetas down the street from me in Madrid. Focused
                  on still images and displaying the diversity of the shop.
                </p>
              </div>
            }
          />
          <Video
            src="https://benny-files-100.s3.us-east-1.amazonaws.com/BENNY+CHICAGO+FINAL.mp4"
            content={
              <div className="py-5 px-2 lg:w-100 lg:h-200 text-center">
                <h2
                  id="videoTitle"
                  className="text-2xl font-bold text-zinc-100"
                >
                  IMPERMANENCE.
                </h2>
                <p className="text-zinc-100 py-1 font-semibold">
                  DECEMBER 2024
                </p>
                <p className="text-zinc-100 text-sm ">
                  Exploring the remaining and deteriorating factors in Chicago,
                  IL in a short expository documentary.
                </p>
              </div>
            }
          />
          <Video
            src="https://benny-files-100.s3.us-east-1.amazonaws.com/FINAL+PUMA+12.15.mp4"
            content={
              <div className="py-5 px-2 lg:w-100 lg:h-200 text-center  ">
                <h2
                  id="videoTitle"
                  className="text-2xl font-bold text-zinc-100"
                >
                  PUMA FOREVER FASTER SPEC AD
                </h2>

                <p className="text-zinc-100 py-1 font-semibold">
                  DECEMBER 2024
                </p>
                <p className="text-zinc-100 text-sm ">
                  Created a 30 second ad for Puma&apos;s FOREVER. FASTER.
                  campaign. Chose lifestyle and running shoes to portray the
                  diversity of the brand as well as quick, action filled cuts to
                  emphasize the cat-like characteristics of Pumas: endurance,
                  suppleness, and speed.
                </p>
              </div>
            }
          />
          <Video
            src="https://benny-files-100.s3.us-east-1.amazonaws.com/Bran+and+Park.mp4"
            content={
              <div className="py-5 px-2 lg:w-100 lg:h-200 text-center  ">
                <h2
                  id="videoTitle"
                  className="text-2xl font-bold text-zinc-100"
                >
                  BRAN AND PARK
                </h2>

                <p className="text-zinc-100 py-1 font-semibold">
                  DECEMBER 2024
                </p>
                <p className="text-zinc-100 text-sm ">
                  5 classmates and I were given a script and created a short
                  film.
                </p>
              </div>
            }
          />
          <Video
            src="https://benny-files-100.s3.us-east-1.amazonaws.com/Adidas+You+Got+This+10-15+FINAL.mp4"
            content={
              <div className="py-5 px-2 lg:w-100 lg:h-200 text-center  ">
                <h2
                  id="videoTitle"
                  className="text-2xl font-bold text-zinc-100"
                >
                  ADIDAS <br /> &quot;YOU GOT THIS&quot;
                </h2>
                <p className="text-zinc-100 py-1 font-semibold">OCTOBER 2024</p>
              </div>
            }
          />
          <Video
            src="https://benny-files-100.s3.us-east-1.amazonaws.com/One+Shot.mp4"
            content={
              <div className="py-5 px-2 lg:w-100 lg:h-200 text-center  ">
                <h2
                  id="videoTitle"
                  className="text-2xl font-bold text-zinc-100"
                >
                  SUSPENSION
                </h2>
                <p className="text-zinc-100 py-1 font-semibold">
                  SEPTEMBER 2024
                </p>
              </div>
            }
          />
          <Video
            src="https://benny-files-100.s3.us-east-1.amazonaws.com/THE+BARS+AT+LAKE+MERRITT+-+A+SHORT+FILM.mp4"
            content={
              <div className="py-5 px-2 lg:w-90 lg:h-200 text-center mb-2 ">
                <h2
                  id="videoTitle"
                  className="text-2xl font-bold text-zinc-100"
                >
                  THE BARS AT LAKE MERRITT
                </h2>
                <h2 className="text-xl text-zinc-100">A SHORT FILM</h2>
                <p className="text-zinc-100 py-1 font-semibold">AUGUST 2024</p>
                <p className="text-zinc-100 text-sm ">
                  This summer, I worked on a project interviewing individuals
                  working out at the pink and black exercise bars of Lake
                  Merritt. Shoutout Reymundo, Connor, Will, Ian, Isa, Q, Marcus,
                  George, and Jordan.
                </p>
              </div>
            }
          />

          <Video
            src="https://benny-files-100.s3.us-east-1.amazonaws.com/NIKE+SPEC.mp4"
            content={
              <div className="py-5 px-2 lg:w-100 lg:h-200 text-center  ">
                <h2
                  id="videoTitle"
                  className="text-2xl font-bold text-zinc-100"
                >
                  NIKE SPEC AD
                </h2>

                <p className="text-zinc-100 py-1 font-semibold">JULY 2025</p>
                <p className="text-zinc-100 text-sm ">
                  Had an idea for a quick 15 second spec ad for some Nikes. Chop
                  cuts, sonic design, and working without a tripod on this one.
                </p>
              </div>
            }
          />
        </div>
      </main>
    </div>
  );
}

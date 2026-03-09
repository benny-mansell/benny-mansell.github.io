import Nav from "./components/Nav";
import Video from "./components/Video";

const videos = [
  {
    title: "ADIDAS TAG",
    date: "2026-01-03",
    src: "https://benny-files-100.s3.us-east-1.amazonaws.com/adidas+tag+1-2-26+.mp4",
    description:
      "Focused on pacing and getting a story across in a quick timeframe. Used the product to connect the actors and highlight the timeless joy of tag. Shot on VIXIA HF R300 camcorder.",
  },
  {
    title: "NEW BALANCE SPEC",
    date: "2025-10-01",
    src: "https://benny-files-100.s3.us-east-1.amazonaws.com/NEW+BALANCE+SPEC.mov",
    description:
      "Curated a spec ad using fish-eye, camcorder, and Sony a7000. Paid close attention to framing, quick cuts and timing with music to tell the story of the product in a college setting. Ideated, directed and edited.",
  },
  {
    title: "KINIGOL CAMISETAS",
    date: "2025-04-01",
    src: "https://benny-files-100.s3.us-east-1.amazonaws.com/7b764bbd-5818-4d0a-a339-e931b7a948c0.MP4",
    description:
      "Crafted a short promotional ad for football jersey store Kinigol Camisetas down the street from me in Madrid. Focused on still images and displaying the diversity of the shop.",
  },
  {
    title: "NIKE SPEC AD",
    date: "2025-07-01",
    src: "https://benny-files-100.s3.us-east-1.amazonaws.com/NIKE+SPEC.mp4",
    description:
      "Had an idea for a quick 15 second spec ad for some Nikes. Chop cuts, sonic design, and working without a tripod on this one.",
  },
  {
    title: "IMPERMANENCE.",
    date: "2024-12-01",
    src: "https://benny-files-100.s3.us-east-1.amazonaws.com/BENNY+CHICAGO+FINAL.mp4",
    description:
      "Exploring the remaining and deteriorating factors in Chicago, IL in a short expository documentary.",
  },
  {
    title: "PUMA FOREVER FASTER SPEC AD",
    date: "2024-12-01",
    src: "https://benny-files-100.s3.us-east-1.amazonaws.com/FINAL+PUMA+12.15.mp4",
    description:
      "Created a 30 second ad for Puma's FOREVER. FASTER. campaign. Chose lifestyle and running shoes to portray the diversity of the brand as well as quick, action filled cuts to emphasize the cat-like characteristics of Pumas: endurance, suppleness, and speed.",
  },
  {
    title: "BRAN AND PARK",
    date: "2024-12-01",
    src: "https://benny-files-100.s3.us-east-1.amazonaws.com/Bran+and+Park.mp4",
    description:
      "5 classmates and I were given a script and created a short film.",
  },
  {
    title: 'ADIDAS "YOU GOT THIS"',
    date: "2024-10-15",
    src: "https://benny-files-100.s3.us-east-1.amazonaws.com/Adidas+You+Got+This+10-15+FINAL.mp4",
    description: "",
  },
  {
    title: "SUSPENSION",
    date: "2024-09-01",
    src: "https://benny-files-100.s3.us-east-1.amazonaws.com/One+Shot.mp4",
    description: "",
  },
  {
    title: "THE BARS AT LAKE MERRITT",
    date: "2024-08-01",
    src: "https://benny-files-100.s3.us-east-1.amazonaws.com/THE+BARS+AT+LAKE+MERRITT+-+A+SHORT+FILM.mp4",
    description:
      "This summer, I worked on a project interviewing individuals working out at the pink and black exercise bars of Lake Merritt. Shoutout Reymundo, Connor, Will, Ian, Isa, Q, Marcus, George, and Jordan.",
  },
];

videos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
                <h2 className="text-xl text-zinc-100">A SHORT FILM</h2>
                <p className="text-zinc-100 py-1 font-semibold">
                  DECEMBER 2024
                </p>
                <p className="text-zinc-100 text-sm ">
                  Exploring the remaining and detoriroating factors in Chicago,
                  IL in a short short expository documentary.
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
                  Created a 30 second spec for Puma&apos;s FOREVER. FASTER.
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
                  film in a setting and tone of our choice.
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
                  Had an idea for a quick 15 second spec ad for Nike Cortez.
                  Chop cuts, sonic design, and working without a tripod on this
                  one.
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
                <p className="text-zinc-100 text-sm ">
                  Tasked with creating a one-shot one-minute video, decided to
                  focus on the simplicity of keeping a football elevated. No
                  faces, no audio, just environment.
                </p>
              </div>
            }
          />
        </div>
      </main>
    </div>
  );
}

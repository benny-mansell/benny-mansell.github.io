/*
import Photo from "../components/Photo";
export default function Photography(){
    
  
       return (
    <main className="p-10">
      <Photo
        src="/Images/Cefalu Water Edit copy.jpg"
        content={<p className="text-lg mt-2">A beautiful view from Cefalù.</p>}
        width="1000px"
      />

         <Photo
        src="/Images/surf mid air.jpg"
        content={<p className="text-lg mt-2">I saw this live.</p>}
        width="800"
        
      />
    </main>
  );
}
*/
/*
import Photo from "../components/Photo";

export default function Photography() {
  return (
    <div className="w-screen w-full h-full">
      <main className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 flex flex-col items-center min-h-screen py-10">
        {/* Cefalù photo }
        <Photo
          src="/Images/Cefalu Water Edit copy.jpg"
          content={
            <div className="text-center mt-3">
              <h2 className="text-2xl font-bold text-zinc-100">Cefalù, Sicily</h2>
              <p className="text-zinc-100 text-sm italic mt-1">
                A beautiful view from Cefalù.
              </p>
            </div>
          }
          width="1000px"
        />

        {/* Surf photo }
        <Photo
          src="/Images/surf mid air.jpg"
          content={
            <div className="text-center mt-3">
              <h2 className="text-2xl font-bold text-zinc-100">Surf in Motion</h2>
              <p className="text-zinc-100 text-sm italic mt-1">I saw this live.</p>
            </div>
          }
          width="800px"
        />

        {/* Add more photos as needed }
      </main>
    </div>
  );
}
*/
import Nav from "../components/Nav";
import Photo from "../components/Photo";

export default function Photography() {
  return (
    <div className="w-screen w-full h-full">
      <main className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 flex flex-col lg:flex-row h-full min-w-full justify-evenly pb-24">
        
        {/* Navigation Section */}
        <div className="flex flex-col">
          <Nav />
        </div>

        {/* Photo Gallery Section */}
        <div className="flex flex-col items-center space-y-6 p-8">

          <Photo
            src="/Images/Cefalu Water Edit copy.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">
                  Cefalù, Sicily
                </h2>
                <p className="text-zinc-100 text-sm italic mt-1">
                  
                </p>
              </div>
            }
            width="600px"
          />

          <Photo
            src="/Images/Lake Merrit Sun.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">Oakland, CA</h2>
                <p className="text-zinc-100 text-sm italic mt-2"></p>
              </div>
            }
            width="600px"
          />

          <Photo
            src="/Images/Miles at Yuba.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">Yuba River, CA</h2>
              </div>
            }
            width="600px"
          />

          <Photo
            src="/Images/Jaca Rock.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">Jaca, Spain</h2>
              </div>
            }
            width="600px"
          />

          <Photo
            src="/Images/Toros.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">Madrid, Spain</h2>
              </div>
            }
            width="600px"
          />
          <Photo
            src="/Images/Haight.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">San Francisco, CA</h2>
              </div>
            }
            width="600px"
          />
          <Photo
            src="/Images/Fen in Tangier.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">Tangier, Morocco</h2>
              </div>
            }
            width="800px"
          />
           <Photo
            src="/Images/SF Split.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">San Francisco, CA</h2>
              </div>
            }
            width="400px"
          />
          <Photo
            src="/Images/Mbire Hooping.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">Berkeley, CA</h2>
              </div>
            }
            width="500px"
          />
          <Photo
            src="/Images/Dante in Cefalú.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">Cefalú, Italy</h2>
              </div>
            }
            width="600px"
          />
          <Photo
            src="/Images/Jorja.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">San Francisco, CA</h2>
              </div>
            }
            width="500px"
          />
          <Photo
            src="/Images/Los Roots.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">Oakland, CA</h2>
              </div>
            }
            width="600px"
          />
          <Photo
            src="/Images/Boys at Pellegrino.jpg"
            content={
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-zinc-100">Palermo, Italy</h2>
              </div>
            }
            width="600px"
          />
        </div>
      </main>
    </div>
  )
}
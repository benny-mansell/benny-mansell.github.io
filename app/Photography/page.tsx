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
import Nav from "../components/nav";
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
        <div className="flex flex-col items-center space-y-12 p-10">
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
        </div>
      </main>
    </div>
  );
}

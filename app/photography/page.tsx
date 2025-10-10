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
import Image from 'next/image';

const Gallery2: React.FC = () => {
  return (
    <div className="sm:flex justify-end sm:flex-wrap gap-4 sm:py-0 px-20">
      <div className="">
        <Image 
          src="/projet_nextjs/Video(3).png" 
          alt="Photo 4" 
          width={400} 
          height={200} 
          className="rounded-[15px] "
        />
        <br />
        <div className="flex space-x-5">
          <Image 
          src="/projet_nextjs/Logo(1).png" 
          alt="logo 4" 
          width={40} 
          height={0} 
          className="h-12 w-12 rounded-full "
          />
          <h1 className="text-20px font-bold">Desktop App UI Design in Figma-
            <br />Full Course  </h1>
        </div>
      </div>
      <div className="">
        <Image 
          src="/projet_nextjs/Video(4).png" 
          alt="Photo 5" 
          width={400} 
          height={200} 
          className="rounded-[15px] "
        />
        <br />
        <div className="flex space-x-5">
          <Image 
          src="/projet_nextjs/Logo(2).png" 
          alt="logo 5" 
          width={40} 
          height={0} 
          className="h-12 w-12 rounded-full "
          />
          <h1 className="text-20px font-bold">Desing and Prototype an App with 
              <br />Play-Full 3-hour course </h1>
        </div>
      </div>
      <div className="">
        <Image 
          src="/projet_nextjs/Video(8).png" 
          alt="Photo 3" 
          width={400} 
          height={200} 
          className="rounded-[15px]"
        />
        <br />
        <div className="flex space-x-5">
          <Image 
          src="/projet_nextjs/Logo(3).png" 
          alt="logo 6" 
          width={40} 
          height={0} 
          className="h-12 w-12 rounded-full "
          />
          <h1 className="text-20px font-bold">Build a 3D Site Without code with 
            <br />Framer-Crash Course </h1>
        </div>
      </div>
    </div>
    
  );
}

export default Gallery2;

import Image from 'next/image';

const Gallery1: React.FC = () => {
  return (
    
    <div className="sm:flex justify-end sm:flex-wrap gap-4 sm:py-20 px-20 ">
      <div className="">
        <Image 
          src="/projet_nextjs/Video.png" 
          alt="Photo 1" 
          width={400} 
          height={200} 
          className="rounded-[15px]  "
        />
        <br />
        <div className="flex space-x-5">
          <Image 
          src="/projet_nextjs/Logo(5).png" 
          alt="logo 1" 
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
          src="/projet_nextjs/Video(1).png" 
          alt="Photo 2" 
          width={400} 
          height={200} 
          className="rounded-[15px] "
        />
        <br />
        <div className="flex space-x-5">
          <Image 
          src="/projet_nextjs/Logo(6).png" 
          alt="logo 2" 
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
          src="/projet_nextjs/Video(2).png" 
          alt="Photo 3" 
          width={400} 
          height={200} 
          className="rounded-[15px]"
        />
        <br />
        <div className="flex space-x-5">
          <Image 
          src="/projet_nextjs/Logo(7).png" 
          alt="logo 3" 
          width={40} 
          height={0} 
          className="h-12 w-12 rounded-full "
          />
          <h1 className="text-20px font-bold">Desing and Prototype an App with 
              <br />Play-Full 3-hour course </h1>
        </div>
      </div>
    </div>
    
  );
}

export default Gallery1;

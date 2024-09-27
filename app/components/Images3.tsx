import Image from 'next/image';

const Gallery3: React.FC = () => {
  return (
    
    <div className="">
      <Image 
          src="/projet_nextjs/Browser Button.png" 
          alt="Photo 1" 
          width={80} 
          height={30} 
          className="rounded-[5px] absolute top-5 left-5 "
        />
        </div>
  );
}
export default Gallery3;
import Image from 'next/image';

const Gallery4: React.FC = () => {
  return (
        <div className="flex justify-end space-x-5 py-0 px-10">
            <Image 
          src="/projet_nextjs/Mail.png" 
          alt="Photo 1" 
          width={80} 
          height={30} 
          className="h-7 w-7 rounded-full "
        />
        <Image 
          src="/projet_nextjs/Bell.png" 
          alt="Photo 1" 
          width={80} 
          height={30} 
          className="h-7 w-7 rounded-full "
        />
        <Image 
          src="/projet_nextjs/Setting.png" 
          alt="Photo 1" 
          width={80} 
          height={30} 
          className="h-7 w-7 rounded-full"
        />
        </div>
  );
}
export default Gallery4;
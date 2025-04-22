import Image from "next/image";

export const ImageLayout = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <div className="bg-[#262626] border-[#262626] border-[20px] rounded-3xl mt-20">
      <Image
        src={image}
        alt={alt}
        width={1200}
        height={0}
        className="border-[10px] border-black rounded-3xl h-auto"
      />
    </div>
  );
};

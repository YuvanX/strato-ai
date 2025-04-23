import { RiArrowRightLine } from "react-icons/ri";

export const HeroSection = ({ heroSectionDetails }: { heroSectionDetails: { ctaText: string, headline: string, description: string, subheadline: string}}) => {
  return (
    <div className="mx-10 text-center">
      <div className="text-2xl lg:text-7xl font-sans font-medium">
        {heroSectionDetails.headline}
      </div>
      <div className="text-2xl lg:text-7xl font-sans font-medium text-green-500">
        {heroSectionDetails.subheadline}
      </div>
      <div className="text-xs lg:text-lg mt-5">
       {heroSectionDetails.description}
      </div>

      <div className="flex gap-10 mt-10 justify-center">
        <button className="flex gap-2 items-center px-5 py-3 bg-green-500 rounded-full">
          <div className="text-black font-medium text-xs">{heroSectionDetails.ctaText}</div>
          <RiArrowRightLine color="black" />
        </button>
        <button className="underline text-xs cursor-pointer">
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
};

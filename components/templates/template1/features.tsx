import { LuMousePointerClick } from "react-icons/lu";
import { FeatureCard } from "./featurecard";
import { BiCustomize } from "react-icons/bi";
import { TbSeo } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
export const Features = () => {
  const FEATURES = [{
    id: 1,
    title: "One-Click Page Generation",
    description: "Generate high-converting landing pages in seconds using AI. Just enter your idea, and let the generator do the magic.",
    icon: <LuMousePointerClick />
  }, {
    id: 2,
    title: "Customizable Designs",
    description: "Tailor your landing page to match your brand. Easily edit text, colors, images, and layout—no coding needed.",
    icon: <BiCustomize />
  }, {
    id: 3,
    title: "SEO & Mobile Optimized",
    description: "Pages come fully optimized for search engines and mobile devices, ensuring speed, visibility, and a great user experience.",
    icon: <TbSeo />
  }, {
    id: 4,
    title: "Conversion-Driven Templates",
    description: "Built-in templates designed using real marketing data to boost signups, sales, and customer engagement.",
    icon: <FaArrowTrendUp />
  }]

  return (
    <div className="text-center">
      <div className="my-3 text-sm font-medium">FEATURES</div>
      <div className="text-5xl font-semibold">
        Safe & Scalable Logistics for Heavy-Duty
      </div>
      <div className="text-muted-foreground mt-3 mb-16 max-w-2xl mx-auto">
        With real-time tracking, experting handling, and multi-modal transport,
        we move your goods with precision-anywhere, anytime.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  max-w-4xl">
        {FEATURES.map(f => <FeatureCard title={f.title} description={f.description} icon={f.icon} key={f.id}/>)}
      </div>
    </div>
  );
};

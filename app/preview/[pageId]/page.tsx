import { FeatureCard } from "@/components/preview/featurecard";
import { Footer } from "@/components/preview/footer";
import { HeroSection } from "@/components/preview/herosection";
import { NavBar } from "@/components/preview/navbar";
import { Pricing } from "@/components/preview/pricing";
import { Testimonial } from "@/components/preview/testimonial";
import * as m from "motion/react-client";
export default function () {
  const FEATURES = [
    {
      id: "feature-1",
      title: "AI-Powered Copy",
      description:
        "Generate high-converting website copy tailored to your SaaS product in seconds.",
    },
    {
      id: "feature-2",
      title: "Smart Layout Suggestions",
      description:
        "Get design suggestions for hero sections, features, and CTAs based on your prompt.",
    },
    {
      id: "feature-3",
      title: "Instant Preview",
      description:
        "See a live preview of your landing page as soon as it’s generated — no coding needed.",
    },
    {
      id: "feature-4",
      title: "Instant Preview",
      description:
        "See a live preview of your landing page as soon as it’s generated — no coding needed.",
    },
    {
      id: "feature-5",
      title: "Instant Preview",
      description:
        "See a live preview of your landing page as soon as it’s generated — no coding needed.",
    },
    {
      id: "feature-6",
      title: "Instant Preview",
      description:
        "See a live preview of your landing page as soon as it’s generated — no coding needed.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <m.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.6,
          ease: "easeIn",
        }}
        className="w-full flex justify-center"
      >
        <NavBar logo="Strato">
          <div>Home</div>
          <div>Contact</div>
          <div>Resources</div>
        </NavBar>
      </m.div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <HeroSection />
      </div>
      <div className="mb-60">
        <div className="flex flex-col items-center mb-10 text-2xl lg:text-5xl font-medium">
          <div>Powerful <span className="text-green-500">Features</span> For You</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3  lg:gap-10 mx-5 lg:mx-30">
            {FEATURES.map((f) => (
              <FeatureCard
                title={f.title}
                description={f.description}
                key={f.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-60">
        <Testimonial />
      </div>
        <Pricing />
      <Footer name="Strato" />
    </div>
  );
}

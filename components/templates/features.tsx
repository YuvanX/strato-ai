import { FeatureCard } from "./featurecard";

export const Features = () => {
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
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
      </div>
    </div>
  );
};

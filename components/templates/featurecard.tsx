export const FeatureCard = () => {
  return (
    <div className="relative p-6 rounded-xl flex flex-col text-left border bg-white/5 border-white/10 backdrop-blur-sm mx-3 my-3 min-h-60 overflow-hidden">
      <div className="absolute -top-10 -right-20 w-[200px] h-[200px] bg-red-500 rounded-full blur-3xl opacity-20 z-0"></div>
      <div>Icon</div>
      <div className="my-6 font-medium text-xl">Transport Solutions</div>
      <div className="text-muted-foreground">
        We handle heavy machinery, bulk cargo, and industrial materials with
        precision
      </div>
    </div>
  );
};

export const FeatureCard = ({title, description, icon}: {title: string, description: string, icon: React.ReactNode}) => {
  return (
    <div className="relative p-6 rounded-xl flex flex-col text-left border bg-white/5 border-white/10 backdrop-blur-sm mx-3 my-3 min-h-60 overflow-hidden">
      <div className="absolute -top-10 -right-20 w-[200px] h-[200px] bg-[#F44900] rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="text-xl">{icon}</div>
      <div className="my-6 font-medium text-xl">{title}</div>
      <div className="text-muted-foreground">
       {description}
      </div>
    </div>
  );
};

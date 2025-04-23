import * as m from "motion/react-client";
export const Footer = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-4xl bg-neutral-900 h-[20rem] mx-10 my-10 relative flex flex-col justify-between"
    >
      <div className="pr-5 pt-5 font-medium text-right text-xl text-white space-y-1">
        <div>X</div>
        <div>LinkedIn</div>
        <div>Github</div>
      </div>
      <div className="text-[6rem] xl:text-[150px] font-extrabold   left-4 leading-none text-white">
        Strato.
      </div>
    </m.div>
  );
};

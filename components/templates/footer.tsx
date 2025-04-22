import * as m from "motion/react-client";
export const Footer = () => {
    return <m.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6, ease: "easeOut"}} viewport={{once: true, amount: 0.2}}  className="rounded-4xl bg-neutral-900 h-[20rem] mx-10 relative">
        <div className="absolute right-8 top-8 font-medium text-right text-xl text-white space-y-1">
            <div>X</div>
            <div>LinkedIn</div>
            <div>Github</div>
        </div>
        <div className="absolute text-[150px] font-extrabold bottom-[-1rem] left-4 leading-none text-white">Strato.</div>
    </m.div>
}
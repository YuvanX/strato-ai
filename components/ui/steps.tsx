"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FileProcessor } from "./fileprocessor";
import { Steps } from "@/types/stepsType";
import { useState } from "react";
import { Card, CardContent } from "./card";
import * as m from "motion/react-client";

export const FileSteps = ({ steps }: { steps: Steps[] }) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="m-3">
      <div className="flex items-center justify-between  text-sm font-semibold font-sans">
        <div className={isVisible ? "border-r border-t border-l px-3 py-3 w-3/3 rounded-l-xl bg-card rounded-b-none" : "border px-3 py-3 w-3/3 rounded-l-xl bg-card"}>
          Building Files
        </div>
        <div
          onClick={() => setVisible((c) => !c)}
          className={isVisible ? "border-r border-t bg-card   px-5 rounded-r-xl  py-3 rounded-b-none" : "border-r border-t  border-b px-5 rounded-r-xl  py-3 bg-card"}
        >
          <RiArrowDropDownLine size={20} />
        </div>
      </div>
      {isVisible && (
        <m.div initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}} transition={{duration: 0.2, ease: 'easeInOut'}}>
          <Card className="rounded-t-none">
            <CardContent>
              {steps.map((s) => (
                <FileProcessor
                  filename={s.title}
                  status={s.status}
                  key={s.id}
                />
              ))}
            </CardContent>
          </Card>
        </m.div>
      )}
    </div>
  );
};

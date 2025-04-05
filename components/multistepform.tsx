"use client";
import { useState } from "react";
import { Avatar } from "./avatar";
import { Button } from "./button";
import { Input } from "./input";
import { Select } from "./select";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import * as m from "motion/react-client";
import { LuSparkles } from "react-icons/lu";

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    business: "",
    industry: "",
    tone: "",
    businessDescription: "",
    keyFeatures: [],
  });

  return (
    <div className="p-4">
      <m.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6, ease: "linear" }}
      >
        <div className="font-semibold text-3xl">Create Your Landing Page</div>
        <div className="text-gray-500 mb-6">
          Fill in the details below and our AI will generate a custom landing
          page for your business.
        </div>
        <div className="bg-black text-white rounded-lg p-6 border border-slate-800  shadow-lg ">
          <Header />
          { step === 1 && <StepOne /> }
          { step === 2 && <StepTWo /> }
          { step === 3 && <StepThree /> }
          { step === 4 && <StepFour/> }
          <div className="flex justify-between mt-8">
            <Button
              classname="text-white bg-black rounded-xl border border-slate-700 !w-25 flex items-center justify-center gap-3"
              onClick={() => ""}
            >
              <RiArrowLeftLine />
              <div>Back</div>
            </Button>
            <Button
              classname="text-white bg-[#7054E2] !w-25 rounded-xl flex items-center justify-center gap-3"
              onClick={() => setStep((s) => s + 1)}
            >
              <div>Next</div>
              <RiArrowRightLine />
            </Button>
          </div>
        </div>
      </m.div>
    </div>
  );
};

const Header = () => {
  const ele = [
    { id: 1, text: "Basic Information" },
    { id: 2, text: "Style & Tono" },
    { id: 3, text: "Content Details" },
    { id: 4, text: "Preview & Generate" },
  ];
  return (
    <div className="flex items-center gap-4 mb-6 mt-2">
      {ele.map((e) => (
        <Avatar key={e.id} text={String(e.id)} children={e.text} />
      ))}
    </div>
  );
};

const StepOne = () => {
  const OPTIONS = [
    "Technology",
    "Healthcare",
    "Finance",
    "E-commerce",
    "Education",
    "Real Estate",
    "Food & Beverage",
    "Travel",
    "Entertainment",
    "Fitness",
    "Other",
  ];
  return (
    <div>
      <div className="text-2xl font-semibold">Basic Information</div>
      <div className="text-gray-700 text-md mt-2 mb-6">
        Tell us about your business
      </div>

      <Input
        classname="rounded-xl"
        label="Business Name"
        placeholder="Enter your business name"
        id="businessname"
        onChange={(e) => ""}
        type="text"
      />
      <Select label="Industry" id="Industry" name="industryData">
        {OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
};

const StepTWo = () => {
  const OPTIONS = ["Casual", "Professional", "Playful"];
  return (
    <div>
      <div className="text-2xl font-semibold">Style & Tone</div>
      <div className="text-md text-gray-600">
        Choose the look and feel of your landing page
      </div>
      <Select label="Tone of Copy" id="tone" name="tone">
        {OPTIONS.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </div>
  );
};

const StepThree = () => {
  const [features, setFeatures] = useState(["Feature 1"]);

  const handleFeatureChange = () => {
    setFeatures([...features, "feature X"]);
  };

  const handleFeatures = (i: number, val: string) => {
    const updated = [...features];
    updated[i] = val;
    setFeatures(updated);
  };

  const removeFeature = (i: number) => {
    const updated = features.filter((_, index) => index !== i);
    setFeatures(updated);
  };

  return (
    <div>
      <div className="text-2xl font-semibold">Content Details</div>
      <div className="text-md text-slate-700">
        Add more details to enhance your page
      </div>

      <div className="mt-6">
        <div>Business Description</div>
        <textarea className="w-full h-28 border border-slate-700 rounded-xl mt-1"></textarea>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="text-sm">Key Features or Services</div>
          <Button
            classname="text-white !w-25 hover:bg-slate-800"
            onClick={handleFeatureChange}
          >
            Add Feature
          </Button>
        </div>

        {features.map((feature, index) => (
          <div key={index} className="flex gap-2 items-center m-2">
            <input
              type="text"
              className="w-full border border-slate-800 rounded-xl px-2 py-2"
              value={feature}
              onChange={(e) => handleFeatures(index, e.target.value)}
            />
            {features.length > 1 && (
              <Button
                classname="!w-10 text-white"
                onClick={() => removeFeature(index)}
              >
                X
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
const StepFour = () => {
  return (
    <div>
      <div className="font-semibold text-2xl">Preview & Generate</div>
      <div className="text-md text-slate-600">
        Preview your landing page and make any final changes
      </div>
      <div className="text-center mt-10 mb-2">
        Review your landing page preview on the right. If you're happy with it,
        click the button below to generate the full page.
      </div>
      <Button classname="flex text-white bg-gradient-to-r from-violet-600 to-blue-500 hover:opacity-90 transition duration-200 items-center justify-center gap-2" onClick={() => ""}>
      <LuSparkles />
        <div>
            Generate
        </div>
      </Button>
    </div>
  );
};

import { EditorStoreType, SectionName } from "@/types/editorstoretype";
import { create } from "zustand";

export const useEditorStore = create<EditorStoreType>((set) => ({
  data: {
    navbar: { logo: "Zen" },
    heroSection: {
      ctaText: "Shop Now",
      headline: "A Premium Clothing brand",
      subheadline: "Make the difference with Zen",
      description: "Limited Slots Subscribe now",
    },
    featureSection: [{
        icon: "AiOutLineHeart",
        title: "SEO Optimized",
        description: "A new way to revolt the seo platform",
      }],
    testimonialSection: [{
        name: "",
        designation: "",
        testimonial: "",
      }],
    pricingSection: [{
        bestFor: "",
        features: ["", "", "", ""],
        plan: "",
        price: "",
      }],
    footer: { brandName: "" },
  },
  sectionOrder: ["navbar", "heroSection", "featureSection", "testimonialSection", "pricingSection", "footer"],
  updateSectionOrder: (order) => set({ sectionOrder: order }),
  updateSection: (sectionName: SectionName, newSectionData) =>  set((state) => ({
    data: {
      ...state.data,
      [sectionName]: {
        ...state.data[sectionName],
        ...newSectionData
      }
    }
  })),
  updateArraySection: (sectionName ,sectionIdx, newData) => set((state) => ({
        data: {
          ...state.data,
          [sectionName]: state.data[sectionName].map((name: any, i: number) => i == sectionIdx ? {...name, ...newData} : name)
        }
  })),
  resetSection: () =>
    set({
      data: {
        navbar: { logo: "" },
        heroSection: {
          ctaText: "",
          headline: "",
          subheadline: "",
          description: "",
        },
        featureSection: [
          {
            icon: "",
            title: "",
            description: "",
          },
        ],
        testimonialSection: [
          {
            name: "",
            designation: "",
            testimonial: "",
          },
        ],
        pricingSection: [
          {
            bestFor: "",
            features: ["", "", "", ""],
            plan: "",
            price: "",
          },
        ],
        footer: { brandName: "" },
      },
      sectionOrder: [],
    }),
}));

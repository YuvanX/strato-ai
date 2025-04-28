export type EditorStoreType = {
    data: SectionType,
    sectionOrder: string[],
    updateSectionOrder: (newOrder: string[]) => void,
    updateSection: (sectionName: SectionName, newSectionData: any) => void,
    updateArraySection: (sectionName: ArrSectionName,sectionIdx: number, newData: any) => void,
    resetSection: () => void
}

type SectionType = {
    navbar: { logo: string },
    heroSection: { ctaText: string, headline: string, description: string, subheadline: string },
    featureSection: { icon: string, title: string, description: string }[],
    testimonialSection: {name: string, designation: string, testimonial: string}[],
    pricingSection: { bestFor: string, features: string[], plan: string, price: string}[],
    footer: { brandName: string }
}

export type SectionName =   "navbar" | "footer" | "heroSection"
export type ArrSectionName = "featureSection" | "testimonialSection" | "pricingSection" 
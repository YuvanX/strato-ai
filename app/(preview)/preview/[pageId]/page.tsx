import { FeatureCard } from "@/components/templates/preview/featurecard";
import { Footer } from "@/components/templates/preview/footer";
import { HeroSection } from "@/components/templates/preview/herosection";
import { NavBar } from "@/components/templates/preview/navbar";
import { Pricing } from "@/components/templates/preview/pricing";
import { Testimonial } from "@/components/templates/preview/testimonial";
import prisma from "@/db/src/db";
import * as m from "motion/react-client";

type Page = {
  featureSection: [
    {
      icon: React.ReactNode;
      title: string;
      description: string;
    }
  ];
  footer: {
    brandName: string;
  };
  heroSection: {
    ctaText: string;
    headline: string;
    description: string;
    subheadline: string;
  };
  navbar: {
    logo: string;
  };
  pricingSection: [
    {
      bestFor: string;
      features: string[];
      plan: string;
      price: string;
    }
  ];
  testimonialSection: [
    {
      name: string;
      designation: string;
      testimonial: string;
    }
  ];
};

async function getPageData(id: string) {
  const page = await prisma.page.findFirst({
    where: {
      id,
    },
  });

  return page?.content;
}
export default async function ({
  params: { pageId },
}: {
  params: { pageId: string };
}) {
  const id = pageId;
  const page: Page = await getPageData(id);
  console.log(page);
  
  
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
        <NavBar logo={page.navbar.logo}>
          <div>Home</div>
          <div>Contact</div>
          <div>Resources</div>
        </NavBar>
      </m.div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <HeroSection heroSectionDetails={page.heroSection}/>
      </div>
      <div className="mb-60">
        <div className="flex flex-col items-center mb-10 text-2xl lg:text-5xl font-medium">
          <div>
            Powerful <span className="text-green-500">Features</span> For You
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3  lg:gap-10 mx-5 lg:mx-30">
            {page.featureSection.map((f) => (
              <FeatureCard
                title={f.title}
                description={f.description}
                icon={f.icon}
                key={f.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-60">
        <Testimonial testimonialSection={page.testimonialSection}  />
      </div>
      <Pricing pricingSection={page.pricingSection} />
      <Footer name={page.footer.brandName} />
    </div>
  );
}

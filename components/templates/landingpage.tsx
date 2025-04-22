import { Features } from "./features"
import { Footer } from "./footer"
import { HeroSection } from "./herosection"
import { ImageLayout } from "./imagelayout"
import { LandingPageBar } from "./landingpagebar"
import { PerkSection } from "./perksection"

export const LandingPage = () => {
    return <div className="flex flex-col items-center w-full">
        <LandingPageBar />
        <HeroSection/>
        <div className="min-h-screen">
            <ImageLayout image="/dashboard1.png" alt="landing"/>
        </div>
        <Features/>
        <PerkSection/>
        <div className="mx-8 w-full">
            <Footer/>
        </div>
    </div>
}
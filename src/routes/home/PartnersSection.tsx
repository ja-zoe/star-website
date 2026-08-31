import { Mail } from "lucide-react";
import HoverBlurCards, { type ItemType } from "../../components/HoverBlurCards";
import HomeSectionTitle from "../../components/HomeSectionTitle";
import { Spotlight } from "../../components/ui/spotlight-new";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import AnsysLogo from "/ansys-logo.png";
import DassaultLogo from "/dassault-systemes-logo.png";
import EGCLogo from "/egc-logo-w-trans.png";
import NasaLogo from "/nasa-logo.png";
import RutgersLogo from "/rutgers-logo.png";
import SedsLogo from "/seds-logo.png";
import UNPLogo from "/unp-logo.png";
import AirForceLogo from "/us-air-force-logo.png";

const organizations: ItemType[] = [
  { itemName: "Rutgers University", alt: "Rutgers University", logo: RutgersLogo, relationship: "Home institution", tooltipContent: "STAR is a Rutgers student organization.", link: "https://www.rutgers.edu/" },
  { itemName: "Students for the Exploration and Development of Space", alt: "SEDS", logo: SedsLogo, invertLogo: false, relationship: "Chapter network", tooltipContent: "STAR is a student chapter of SEDS.", link: "https://seds.org/space-for-all/" },
  { itemName: "NASA", alt: "NASA", logo: NasaLogo, relationship: "Lunabotics organizer", tooltipContent: "NASA organizes the Lunabotics competition pursued by Robotics.", link: "https://www.nasa.gov/" },
  { itemName: "University Nanosatellite Program", alt: "University Nanosatellite Program", logo: UNPLogo, invertLogo: false, relationship: "CubeSat program", tooltipContent: "SPICEsat participates in the University Nanosatellite Program.", link: "https://universitynanosat.org/" },
  { itemName: "Rutgers Engineering Governing Council", alt: "Rutgers Engineering Governing Council", logo: EGCLogo, relationship: "Student governance", tooltipContent: "Rutgers School of Engineering student governance.", link: "https://egc.rutgers.edu/" },
  { itemName: "Ansys", alt: "Ansys", logo: AnsysLogo, relationship: "Engineering software", tooltipContent: "Engineering simulation and analysis software ecosystem.", link: "https://www.ansys.com/" },
  { itemName: "Dassault Systèmes", alt: "Dassault Systèmes", logo: DassaultLogo, relationship: "CAD software", tooltipContent: "The company behind SOLIDWORKS CAD software.", link: "https://www.3ds.com/" },
  { itemName: "United States Air Force", alt: "United States Air Force", logo: AirForceLogo, relationship: "UNP via AFRL", tooltipContent: "The Air Force Research Laboratory established and operates the University Nanosatellite Program.", link: "https://www.afrl.af.mil/News/Article-Display/Article/2762023/afrl-offers-university-satellite-program/" },
];

const PartnersSection = () => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 px-5 py-20 md:px-10 md:py-28">
      <Spotlight
        animate={!reducedMotion}
        translateY={-560}
        duration={10}
        gradientFirst="radial-gradient(68% 68% at 55% 31%, rgba(248,113,113,.11), rgba(157,38,38,.025) 55%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(56,189,248,.05), transparent 82%)"
      />
      <div className="relative mx-auto w-full max-w-7xl">
        <HomeSectionTitle
          title="Our network"
          display="OUR NETWORK"
          description="The institutions, programs, and tools connected to our work. Each label says what the relationship actually is."
        />
        <div className="mt-12 border-y border-white/15 py-10 sm:py-12">
          <HoverBlurCards items={organizations} />
        </div>
        <div className="mt-7 flex justify-end">
          <a
            href="mailto:rutgersstar@gmail.com?subject=Supporting%20STAR"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 border border-white/25 px-5 font-bold transition-colors hover:border-white/60 hover:bg-white/5"
          >
            <Mail className="h-4 w-4 text-red-300" aria-hidden="true" />
            Sponsor inquiry
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

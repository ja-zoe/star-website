import { Mail } from "lucide-react";
import HoverBlurCards, { type ItemType } from "../../components/HoverBlurCards";
import SectionHeading from "../../components/SectionHeading";
import AnsysLogo from "/ansys-logo.png";
import DassaultLogo from "/dassault-systemes-logo.png";
import EGCLogo from "/egc-logo-w-trans.png";
import NasaLogo from "/nasa-logo.png";
import RutgersLogo from "/rutgers-logo.png";
import SedsLogo from "/seds-logo.png";
import UNPLogo from "/unp-logo.png";

const organizations: ItemType[] = [
  { itemName: "Rutgers University", alt: "Rutgers University", logo: RutgersLogo, relationship: "Home institution", tooltipContent: "STAR is a Rutgers student organization.", link: "https://www.rutgers.edu/" },
  { itemName: "Students for the Exploration and Development of Space", alt: "SEDS", logo: SedsLogo, invertLogo: false, relationship: "Chapter network", tooltipContent: "STAR is a student chapter of SEDS.", link: "https://seds.org/space-for-all/" },
  { itemName: "NASA", alt: "NASA", logo: NasaLogo, relationship: "Lunabotics organizer", tooltipContent: "NASA organizes the Lunabotics competition pursued by Robotics.", link: "https://www.nasa.gov/" },
  { itemName: "University Nanosatellite Program", alt: "University Nanosatellite Program", logo: UNPLogo, invertLogo: false, relationship: "CubeSat program", tooltipContent: "SPICEsat participates in the University Nanosatellite Program.", link: "https://universitynanosat.org/" },
  { itemName: "Rutgers Engineering Governing Council", alt: "Rutgers Engineering Governing Council", logo: EGCLogo, relationship: "Student governance", tooltipContent: "Rutgers School of Engineering student governance.", link: "https://egc.rutgers.edu/" },
  { itemName: "Ansys", alt: "Ansys", logo: AnsysLogo, relationship: "Engineering software", tooltipContent: "Engineering simulation and analysis software ecosystem.", link: "https://www.ansys.com/" },
  { itemName: "Dassault Systèmes", alt: "Dassault Systèmes", logo: DassaultLogo, relationship: "CAD software", tooltipContent: "The company behind SOLIDWORKS CAD software.", link: "https://www.3ds.com/" },
];

const PartnersSection = () => (
  <section className="w-full border-t border-white/10 px-5 py-20 md:px-10 md:py-28">
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Ecosystem"
          title="Partners, programs & supporters."
          description="These organizations play different roles in STAR's work. Labels below describe each relationship without treating every organization as a sponsor."
        />
        <a href="mailto:rutgersstar@gmail.com?subject=Supporting%20STAR" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 border border-white/25 px-5 font-bold transition-colors hover:border-white/60 hover:bg-white/5">
          <Mail className="h-4 w-4 text-red-300" aria-hidden="true" /> Sponsor inquiry
        </a>
      </div>
      <div className="mt-14">
        <HoverBlurCards items={organizations} />
      </div>
    </div>
  </section>
);

export default PartnersSection;

import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { ShootingStars } from "../../components/ui/shooting-stars";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const FAQSection = () => {
  return (
    <div id="FAQSection" className="flex flex-col relative w-full py-10">
      <TextHoverEffect text="FAQ" />
      <div className="flex justify-center items-center px-20">
        <Accordion type="single" collapsible className="w-full z-20">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is STAR?</AccordionTrigger>
            <AccordionContent>
              STAR (Space Technology Association of Rutgers) is a student-led
              chapter of SEDS (Students for the Exploration and Development of
              Space) dedicated to empowering students to explore and develop
              space technology through hands-on projects, professional
              development, and community engagement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Who can join STAR?</AccordionTrigger>
            <AccordionContent>
              STAR is open to all Rutgers students, regardless of major or
              experience level. Whether you’re an engineer, scientist, or just a
              space enthusiast, there’s a place for you in STAR!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do I need any experience to join STAR?
            </AccordionTrigger>
            <AccordionContent>
              No prior experience is required! STAR welcomes students of all
              skill levels. We provide training, resources, and mentorship to
              help you get started.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              What projects does STAR work on?
            </AccordionTrigger>
            <AccordionContent>
              STAR is currently working on three major projects: the CubeSat
              team, which aims to design and launch a small satellite; the
              Robotics team, which competes in the NASA Lunabotics Challenge;
              and the Weather Balloon team, which launches high-altitude
              balloons to collect data and images.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How do i join a project team?</AccordionTrigger>
            <AccordionContent>
              You can join a project team by attending our general meetings,
              reaching out to team leads, or joining our Discord server. No
              application is required—just bring your enthusiasm!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Am I limited to what project teams i can join?
            </AccordionTrigger>
            <AccordionContent>
              No. You can join as many project teams and subteams within those
              projects team as you want.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>When and where does STAR meet?</AccordionTrigger>
            <AccordionContent>
              Most meetings are held in The Cage, STAR's dedicated workspace.
              However, meeting locations may vary depending on the subteam and
              are determined by the team leads.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              How can I get involved with STAR?
            </AccordionTrigger>
            <AccordionContent>
              You can get involved by attending our meetings, joining a project
              team (CubeSat, Robotics, or Weather Balloon), participating in
              workshops, or connecting with us on Discord. Follow us on
              Instagram for updates!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>
              How does STAR help with career development?
            </AccordionTrigger>
            <AccordionContent>
              STAR provides opportunities to network with industry
              professionals, attend space conferences, compete in national
              competitions like NASA Lunabotics, and gain hands-on experience
              that can boost your resume and prepare you for a career in
              aerospace.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <ShootingStars />
    </div>
  );
};
export default FAQSection;

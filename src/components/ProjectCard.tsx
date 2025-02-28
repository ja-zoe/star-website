import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
interface ProjectCardProps {
    icon: string,
    title: string,
    colors?: number[][],
    href: string
}

const ProjectCard = ({icon, title, colors, href}: ProjectCardProps) => {
  return (
    <a href={href} className="w-full hover:cursor-pointer">
      <Card title={title} icon={icon}>
          <CanvasRevealEffect 
              animationSpeed={5.1}
              containerClassName="bg-[#9D2626]"
              colors={colors}
          />
      </Card>
    </a>
  )
}

const Card = ({
    title,
    icon,
    children,
  }: {
    title: string;
    icon: string;
    children?: React.ReactNode;
  }) => {
    const [hovered, setHovered] = React.useState(false);    
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-white/30 group/canvas-card flex items-center justify-center min-w-[250px] w-full max-w-[500px] p-4 relative h-[30rem]"
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
   
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
   
        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            <img src={icon} className="w-[66px] h-[66px] invert"/>
          </div>
          <h2 className="dark:text-white text-xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
        </div>        
      </div>
    );
  };

  export const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };

export default ProjectCard
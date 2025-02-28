import React from "react"
import Tilt from "react-parallax-tilt"

interface Props {
  className: string
}

interface StarStatProps {
  Icon: React.FunctionComponent<Props>,
  headline: string,
  className?: string,
  stat: string | number,
}

const StarStat = ({headline, stat, className, Icon}: StarStatProps) => {
  return (
    <Tilt tiltReverse glareEnable glareReverse glareMaxOpacity={0.3} tiltMaxAngleX={5} tiltMaxAngleY={5}>
      <div className={`flex flex-col gap-3 text-center items-center justify-center w-72 border py-10 border-white/20 rounded-lg ${className}`}>
        <div className="rounded-full p-3 border-white/30 border">
          <Icon className="w-10 h-auto"/>
        </div>
        <div>
          <p className="text-3xl">{stat}</p>
          <p>{headline}</p>
        </div>
      </div>
    </Tilt>
  )
}
export default StarStat
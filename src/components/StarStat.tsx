interface StarStatProps {
  icon?: string,
  headline: string,
  className?: string,
  stat: string | number
}

const StarStat = ({icon, headline, stat, className}: StarStatProps) => {
  return (
    <div className={`flex flex-col gap-3 text-center items-center justify-center w-72 border py-10 border-white/20 rounded-lg transition-transform hover:scale-100 ${className}`}>
      <p className="text-3xl">{stat}</p>
      <p>{headline}</p>
    </div>
  )
}
export default StarStat
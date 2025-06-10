import { ShootingStars } from "../ui/shooting-stars"
import CubesatSubteams from "../CubesatSubteams"

const CubesatPage = () => {
  return (
    <div className="min-h-screen bg-black pt-20 px-32 relative">
      <div className="flex flex-col lg:grid grid-cols-8 grid-rows-7 h-screen gap-8 max-w-[100rem]">
        <div className="col-span-2 row-span-3 border border-white rounded-md"></div>
        <div className="col-span-2 row-span-2 border border-white rounded-md"></div>
        <div className="col-span-2 row-span-2 border border-white rounded-md"></div>
        <div className="col-span-2 row-span-3 border border-white rounded-md"></div>
        <div className="grid place-items-center col-span-4 row-span-2 border border-white rounded-md">
          <h1 className="text-center text-6xl">Cube Satellite</h1>
        </div>
        <div className="col-span-2 row-span-1 border border-white rounded-md"></div>
        <div className="col-span-1 row-span-1 border border-white rounded-md"></div>
        <div className="col-span-1 row-span-1 border border-white rounded-md"></div>
        <div className="col-span-4 row-span-2 border border-white rounded-md"></div>
        <div className="col-span-4 row-span-2 border border-white rounded-md"></div>
      </div>
      <ShootingStars />
    </div>
  )
}
export default CubesatPage
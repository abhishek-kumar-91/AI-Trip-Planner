import { Plane, Ellipsis } from "lucide-react";

function FareComponent() {
  return (
    <div className="w-[50%] bg-purple-950 p-4 rounded-xl shadow-md text-white space-y-4">
     
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <Plane size={16} /> FLIGHT
        </h2>
        <Ellipsis className=" bg-white/20 rounded-full p-1 cursor-pointer" />
      </div>

     
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-300">12 May, 2:30PM</p>
            <p className="font-medium">Dhaka</p>
          </div>
          <Plane size={18} />
          <p className="font-medium">Kathmandu</p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-300">22 May, 9:30AM</p>
            <p className="font-medium">Kathmandu</p>
          </div>
          <Plane size={18} />
          <p className="font-medium">Delhi</p>
        </div>
      </div>
    </div>
  );
}

export default FareComponent;

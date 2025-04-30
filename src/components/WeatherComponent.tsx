import { Ellipsis, MapPin, Thermometer, Cloud } from "lucide-react";

function WeatherComponent() {
  return (
    <div className="w-[50%] bg-blue-300 p-4 rounded-xl shadow-md text-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <MapPin size={16} /> KATHMANDU
        </h2>
        <Ellipsis className=" bg-white/50 rounded-full p-1 cursor-pointer text-gray-700" />
      </div>
      <div className="flex justify-between items-center">
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-2">
            <Thermometer size={16} className="mt-1" />
            <div>
              <p className="font-semibold">Temperature</p>
              <p className="text-xs text-gray-700">H: 10°  L: 4° C</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Cloud size={16} className="mt-1" />
            <div>
              <p className="font-semibold">Weather</p>
              <p className="text-xs text-gray-700">Mostly cloudy</p>
            </div>
          </div>
        </div>

        <p className="text-5xl font-semibold">13°</p>
      </div>
    </div>
  );
}

export default WeatherComponent;

import { useAppSelector } from "../redux/hooks";
import { format } from "date-fns";

const gradients = [
  "bg-gradient-to-br from-[#fee371] to-[#fcd34d]",
  "bg-gradient-to-br from-[#0b5e57] to-[#00b894]",
];

const YourTrip = () => {
  const trips = useAppSelector((state) => state.trip.trips);

  return (
     <div className="pt-24 px-4">
  <div className="max-w-6xl mx-auto space-y-6">
    <h2 className="text-3xl font-bold text-center text-[#0b5e57]">Your Trips</h2>

    {trips.length === 0 ? (
      <p className="text-center text-gray-500">No trips planned yet.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trips.map((trip, index) => (
          <div
            key={index}
            className={`relative p-4 rounded-2xl text-white shadow-xl overflow-hidden max-w-[350px] w-full mx-auto animate-fade-in 
            ${gradients[index % gradients.length]}`}
          >
            <div className="absolute top-3 right-3 z-20 flex items-center space-x-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <span className="text-xs font-semibold text-gray-900 px-2 py-0.5 rounded-md shadow-md">
                {trip.mode === "train" ? trip.trainDate : trip.flightDate}
              </span>
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white opacity-10 rounded-full animate-pulse" />
            <div className="relative z-10 space-y-2">
              <h3 className="text-2xl font-bold">{trip.destination}</h3>
              <p className="text-sm">
                <strong>Mode:</strong> {trip.mode === "train" ? "Train" : "Flight"}
              </p>
              <p className="text-sm">
                <strong>Budget:</strong> ₹{trip.budget}
              </p>
              <p className="text-sm">
                <strong>Created At:</strong> {format(new Date(trip.createdAt), "dd MMM yyyy")}
              </p>
              <div>
                <h4 className="font-semibold mt-2 underline">Packaging Items:</h4>
                <ul className="list-disc pl-5 text-sm">
                  {trip.packaging.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

  );
};

export default YourTrip;

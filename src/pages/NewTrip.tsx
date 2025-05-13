import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  setField,
  addPackagingItem,
  updatePackagingItem,
  resetCurrentTrip,
  saveTrip,
} from "../redux/tripSlice";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

const inputStyle = "border p-2 rounded-md w-full";
const labelStyle = "block text-sm font-semibold mb-1 text-[#0b5e57]";

const NewTrip = () => {
  const dispatch = useAppDispatch();
  const trip = useAppSelector((state) => state.trip.currentTrip);

  const handleChange = (field: keyof typeof trip, value: any) => {
    dispatch(setField({ field, value }));
  };

  const handleSubmit = () => {
    if (
      !trip.destination ||
      !trip.budget ||
      !trip.mode ||
      (trip.mode === "train" &&
        (!trip.trainFrom ||
          !trip.trainTo ||
          !trip.trainDate ||
          !trip.trainPNR ||
          !trip.trainTicketDetails)) ||
      (trip.mode === "flight" &&
        (!trip.flightFrom ||
          !trip.flightTo ||
          !trip.flightDate ||
          !trip.flightTicketNumber ||
          !trip.flightDetails)) ||
      trip.packaging.some((item) => item.trim() === "")
    ) {
      toast.error("Please fill all the details");
      return;
    }

    dispatch(setField({ field: "createdAt", value: new Date().toISOString() }));
    dispatch(saveTrip());
    toast.success("Successfully added your trip!");
    dispatch(resetCurrentTrip());
  };

  return (
    <div className="pt-24">
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-6 border border-[#fee371]">
        <h2 className="text-2xl font-bold text-[#0b5e57]">Plan Your Trip</h2>
        <div>
          <label className={labelStyle}>Destination</label>
          <input
            type="text"
            className={inputStyle}
            placeholder="Where do you want to go?"
            value={trip.destination}
            onChange={(e) => handleChange("destination", e.target.value)}
          />
        </div>
        <div>
          <label className={labelStyle}>Budget</label>
          <input
            type="number"
            className={inputStyle}
            placeholder="Set your budget..."
            value={trip.budget}
            onChange={(e) => handleChange("budget", parseInt(e.target.value))}
          />
        </div>

        <div>
          <label className={labelStyle}>Select Travel Mode</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="mode"
                value="train"
                checked={trip.mode === "train"}
                onChange={() => handleChange("mode", "train")}
              />
              Train
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="mode"
                value="flight"
                checked={trip.mode === "flight"}
                onChange={() => handleChange("mode", "flight")}
              />
              Flight
            </label>
          </div>
        </div>

        {trip.mode === "train" && (
          <>
            <div>
              <label className={labelStyle}>Train From</label>
              <input
                type="text"
                className={inputStyle}
                placeholder="Start location"
                value={trip.trainFrom}
                onChange={(e) => handleChange("trainFrom", e.target.value)}
              />
            </div>
            <div>
              <label className={labelStyle}>Train To</label>
              <input
                type="text"
                className={inputStyle}
                placeholder="Destination"
                value={trip.trainTo}
                onChange={(e) => handleChange("trainTo", e.target.value)}
              />
            </div>
            <div>
              <label className={labelStyle}>Train Date</label>
              <input
                type="date"
                className={inputStyle}
                value={trip.trainDate}
                onChange={(e) => handleChange("trainDate", e.target.value)}
              />
            </div>
            <div>
              <label className={labelStyle}>Train PNR</label>
              <input
                type="text"
                className={inputStyle}
                placeholder="Enter PNR number"
                value={trip.trainPNR}
                onChange={(e) => handleChange("trainPNR", e.target.value)}
              />
            </div>
            <div>
              <label className={labelStyle}>Ticket Details</label>
              <input
                type="text"
                className={inputStyle}
                placeholder="Ticket details"
                value={trip.trainTicketDetails}
                onChange={(e) => handleChange("trainTicketDetails", e.target.value)}
              />
            </div>
          </>
        )}

        {trip.mode === "flight" && (
          <>
            <div>
              <label className={labelStyle}>Flight From</label>
              <input
                type="text"
                className={inputStyle}
                placeholder="Departure location"
                value={trip.flightFrom}
                onChange={(e) => handleChange("flightFrom", e.target.value)}
              />
            </div>
            <div>
              <label className={labelStyle}>Flight To</label>
              <input
                type="text"
                className={inputStyle}
                placeholder="Arrival location"
                value={trip.flightTo}
                onChange={(e) => handleChange("flightTo", e.target.value)}
              />
            </div>
            <div>
              <label className={labelStyle}>Flight Date</label>
              <input
                type="date"
                className={inputStyle}
                value={trip.flightDate}
                onChange={(e) => handleChange("flightDate", e.target.value)}
              />
            </div>
            <div>
              <label className={labelStyle}>Ticket Number</label>
              <input
                type="text"
                className={inputStyle}
                placeholder="Flight ticket number"
                value={trip.flightTicketNumber}
                onChange={(e) => handleChange("flightTicketNumber", e.target.value)}
              />
            </div>
            <div>
              <label className={labelStyle}>Flight Details</label>
              <input
                type="text"
                className={inputStyle}
                placeholder="Enter flight details"
                value={trip.flightDetails}
                onChange={(e) => handleChange("flightDetails", e.target.value)}
              />
            </div>
          </>
        )}

        <div>
          <label className={labelStyle}>Packaging Details</label>
          {trip.packaging.map((item, index) => (
            <input
              key={index}
              type="text"
              className={`${inputStyle} mb-2`}
              placeholder={`Item ${index + 1}`}
              value={item}
              onChange={(e) =>
                dispatch(updatePackagingItem({ index, value: e.target.value }))
              }
            />
          ))}
          <button
            type="button"
            onClick={() => dispatch(addPackagingItem())}
            className="text-[#0b5e57] hover:underline flex items-center gap-1 mt-1"
          >
            <Plus size={18} />
            Add Item
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-md text-white bg-[#0b5e57] hover:bg-[#09413d]"
        >
          Save Trip
        </button>
      </div>
    </div>
  );
};

export default NewTrip;

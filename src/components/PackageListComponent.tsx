import { Ellipsis, ScrollText, Info, Plus } from "lucide-react";
import { useState } from "react";

const initialItems = [
  { label: "Backpack", note: "Add Note" },
  { label: "Camera & GoPro" },
  { label: "Laptop & Charger" },
  { label: "Hot water button" },
  { label: "Medical Aid" },
  { label: "Winter Jacket" },
];

function PackageListComponent() {
  const [checkedItems, setCheckedItems] = useState(
    Array(initialItems.length).fill(false)
  );

  const toggleItem = (index: number) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  return (
    <div className="w-[25%] h-[450px] bg-black text-white p-4 rounded-xl shadow-md flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold flex items-center gap-2">
            <ScrollText size={18} /> PACKING LIST
          </h2>
          <Ellipsis className="text-gray-400 w-5 h-5 p-1 rounded-full cursor-pointer" />
        </div>
        <ul className="mt-4 space-y-4">
          {initialItems.map((item, index) => (
            <li key={index}>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`packing-item-${index}`}
                  checked={checkedItems[index]}
                  onChange={() => toggleItem(index)}
                  className="mt-1 accent-yellow-400"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span
                      className={`${
                        checkedItems[index] ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.note && <Info size={14} />}
                  </div>
                  {item.note && (
                    <p className="text-xs text-gray-400">{item.note}</p>
                  )}
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button className="flex items-center gap-2 mt-4 font-medium text-white">
        <Plus className="bg-yellow-300 text-black rounded-full p-1 w-6 h-6" />
        New Reminder
      </button>
    </div>
  );
}

export default PackageListComponent;

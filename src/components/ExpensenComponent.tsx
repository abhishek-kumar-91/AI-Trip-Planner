import { CircleChevronRight, Ellipsis, Plus, ScrollText } from "lucide-react"

function ExpensenComponent() {
  return (
    <>
     <div className="w-[20%] h-full bg-white p-4 rounded-xl shadow-md">
         
          <div className="flex justify-between items-center"><h2 className="text-lg flex gap-2 items-center text-gray-700 font-semibold"><ScrollText />EXPENSES</h2><Ellipsis className="text-gray-400 bg-gray-100 rounded-full text-xs p-1 cursor-pointer" /></div>
            
          <div className="flex flex-col gap-1 mt-3">
         <div className="flex  justify-between"><h3 className="flex gap-2 itmes-center"><CircleChevronRight className="bg-[#0b5e57] rounded-full text-white" />Air Ticket </h3><h2>$133</h2></div>
         <div className="flex  justify-between"><h3 className="flex gap-2 itmes-center"><CircleChevronRight className="bg-[#0b5e57] rounded-full text-white" />Taxi Rent </h3><h2>$93</h2></div>
         <div className="flex  justify-between"><h3 className="flex gap-2 itmes-center"><CircleChevronRight className="bg-[#0b5e57] rounded-full text-white" />King Burger</h3><h2>$368</h2></div>
         <div className="flex  justify-between"><h3 className="flex gap-2 itmes-center"><CircleChevronRight className="bg-[#0b5e57] rounded-full text-white" />Treking Goar</h3><h2>$589</h2></div>
         <button className="flex mt-2 gap-2 font-medium cursor-pointer">
         <Plus className="p-1 bg-black text-white rounded-full"/>
          Record
         </button>
         
          
      </div>
      </div>

    </>
  )
}

export default ExpensenComponent
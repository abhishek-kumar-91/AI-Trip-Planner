
function YourTripComponent() {
  return (
    <div className="w-[30%] flex flex-col px-4 py-5 bgImage rounded-4xl">
      <div className="overlay"></div>
      <div className="flex w-full justify-between items-center pb-6">
      <h4 className="text-white z-50 font-semibold ">YOUR TRIP</h4>
      <select className="text-white z-40 font-semibold bg-gray-950 px-2 py-1 rounded-lg border-none">
        <option value={"Nepal"}>Nepal</option>
        <option value={"Kashmiri"}>Kashmiri</option>
      </select>
      </div>

      <h2 className="text-white z-50 text-lg font-bold pb-2">Hey Abhishek! &#128075; </h2>
      <h1 className="text-white z-50 text-xl font-semibold leading-6 pb-2">Welcome To Your Nepal Adventure!</h1>
      <h5 className="text-gray-100 z-50 text-xs">The Mountains Are Calling And I Must Go - John Murr </h5>
    </div>
  )
}

export default YourTripComponent
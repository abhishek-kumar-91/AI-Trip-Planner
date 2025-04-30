import BudgetComponent from "../components/BudgetComponent"
import Days_ActivityComponent from "../components/Days_ActivityComponent"
import ExpensenComponent from "../components/ExpensenComponent"
import FareComponent from "../components/FareComponent"
import LocationComponent from "../components/LocationComponent"
import PackageListComponent from "../components/PackageListComponent"
import ReadinessComponent from "../components/ReadinessComponent"
import WeatherComponent from "../components/WeatherComponent"
import YourTripComponent from "../components/YourTripComponent"

function DashboardLayout() {
  return (
    <div className="flex flex-col gap-4 h-full px-14 pt-24 pb-4">
     <div className="h-54 justify-between flex w-full">
     <YourTripComponent />
     <BudgetComponent budget={10000} expense={4500} />
     <ExpensenComponent />
     <ReadinessComponent />
     </div>

     <div className="flex w-full">
      
      <LocationComponent />
      
      <div className="w-[45%]">
          <div className="h-[35%] w-full gap-4 flex justify-between px-4">
              <WeatherComponent />
              <FareComponent />
          </div>
          <div className="h-[60%] px-4 pt-4">
              <Days_ActivityComponent />
          </div>
      </div>
      
        <PackageListComponent />
    
     </div>
    </div>
  )
}

export default DashboardLayout
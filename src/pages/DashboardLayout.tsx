import BudgetComponent from "../components/BudgetComponent"
import YourTripComponent from "../components/YourTripComponent"

function DashboardLayout() {
  return (
    <div className="flex h-full">
     <div className="h-54 justify-around flex w-full">
     <YourTripComponent />
     <BudgetComponent budget={10000} expense={4500} />
     </div>
    </div>
  )
}

export default DashboardLayout
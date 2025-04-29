import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; // ✅ import ApexOptions

interface BudgetDonutChartProps {
  budget: number;
  expense: number;
}

const BudgetComponent: React.FC<BudgetDonutChartProps> = ({ budget, expense }) => {
  const remaining = Math.max(budget - expense, 0);

  const chartOptions: ApexOptions = {  // ✅ type explicitly
    chart: {
      type: 'donut', // ✅ now safely accepted because of ApexOptions type
    },
    labels: ['Spent', 'Budget'],
    colors: ['#fee371', '#0b5e57'],
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return Math.round(val) + '%';
      },
    },
    legend: {
      position: 'top',
      show: false, 
    },

    plotOptions: {
      pie: {
        donut: {
          size: '40%' // Increase thickness
        }
      }
    }
  };

  const chartSeries: number[] = [expense, remaining];

  return (
    <div className="w-[20%] h-full bg-white p-4 rounded-xl shadow-md">
      <div className=" text-gray-700">
      <h2 className="text-xl font-semibold">BUDGET</h2>
        <span className='text-xs bg-gray-100 font-bold px-2 rounded-2xl'><span className="font-medium text-xs">Total:</span> ${budget}</span>
      </div>
      
      <Chart options={chartOptions} series={chartSeries} type="donut" width="100%"  height="80%"/>
      
    </div>
  );
};

export default BudgetComponent;

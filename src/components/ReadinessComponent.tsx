import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Ellipsis, Hourglass } from "lucide-react";

const TOTAL_DAYS = 17;

const ReadinessComponent: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number>(TOTAL_DAYS);
  const [percentComplete, setPercentComplete] = useState<number>(0);

  useEffect(() => {
    const savedStartDate = localStorage.getItem("readinessStartDate");

    let startDate: Date;
    if (!savedStartDate) {
      startDate = new Date();
      localStorage.setItem("readinessStartDate", startDate.toISOString());
    } else {
      startDate = new Date(savedStartDate);
    }

    const today = new Date();
    const diffInDays = Math.floor(
      (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const remaining = Math.max(TOTAL_DAYS - diffInDays, 0);
    setDaysLeft(remaining);

    const percent = Math.floor(((TOTAL_DAYS - remaining) / TOTAL_DAYS) * 100);
    setPercentComplete(percent);
  }, []);

  const chartOptions: ApexOptions = {
    chart: {
      type: "radialBar",
    },
    series: [percentComplete],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%",
          background: "#293450",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px",
          },
          value: {
            color: "#fff",
            fontSize: "20px",
            show: true,
            formatter: () => `${daysLeft}d left`,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  return (
    <div className="w-[25%] bg-[#fee371] p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg flex gap-2 items-center text-gray-700 font-semibold">
          <Hourglass />
          READINESS
        </h2>
        <Ellipsis className="text-gray-400 bg-gray-100/50 rounded-full text-xs p-1 cursor-pointer" />
      </div>

      <div className="relative bottom-6">
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series as number[]}
          type="radialBar"
          height={220}
        />
      </div>
    </div>
  );
};

export default ReadinessComponent;

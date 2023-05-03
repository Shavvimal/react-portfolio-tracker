import React from "react";
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  maintainAspectRatio: true,
  legend: {
    display: false
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ]
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "../../variables";

export default function popoverLang() {
  const { t } = useTranslation();

  return (
    <div
    className="relative bg-dark-900 backdrop-filter backdrop-blur-lg bg-opacity-25 rounded-md pt-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden md:my-6 "
    data-aos="zoom-y-out"
  >
    <div className="relative flex flex-col lg:flex-row items-center justify-center ">
      {/* Dashboard content */}
      <div className="text-center lg:text-left lg:max-w-xl ">
        <h3 className="h3 text-white mb-2 text-center">
          {t("Ready to Talk?")}
        </h3>
        <p className="text-gray-300 text-lg mb-6 text-center">
          {t("We specialize in leveraging")}{" "}
          <span className="text-white hover:text-teal-400 transition duration-150 ease-in-out underline">
            <a href={`mailto:${t("email")}`}>{t("email")}</a>
          </span>{" "}
          {t("or message us directly")}
        </p>
        <Line options={options} data={data} />
      </div>
    </div>
  </div>
  );
}

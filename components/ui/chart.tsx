import React from 'react';
import { Doughnut, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
} from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler
);

interface DoughnutChartProps {
  labels: string[];
  voteData: number[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ labels, voteData }) => {
  const data: ChartData<'doughnut'> = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',

        data: voteData,
        backgroundColor: [
          '#FFE8E8',
          '#DEEEFF',
        ],
        borderColor: [
          '#FFFFFF',
          '#FFFFFF'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    maintainAspectRatio: false,
    layout: {
    },
    plugins: {

      legend: {
        position: 'top',
        align: 'center',
        display: false,
        labels: {
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
        text: 'Are you an asshole doughnut chart',
      },
    },

    cutout: '45%', // control the size of the inner circle
    rotation: 50,
    circumference: 365,
  };

  return (

      <Doughnut data={data} options={options} />

  );
};

interface RadarChartProps {
  labels: string[];
  dataPoints1: number[];
  dataPoints2?: number[]; // 第二组数据是可选的
}

const RadarChart: React.FC<RadarChartProps> = ({ labels, dataPoints1, dataPoints2 }) => {
  const datasets = [
    {
      label: 'Your test data',
      data: dataPoints1,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    }
  ];

  if (dataPoints2 && dataPoints2.length > 0) {
    datasets.push({
      label: 'Post test data',
      data: dataPoints2,
      backgroundColor: 'rgba(34, 202, 236, 0.2)',
      borderColor: 'rgba(34, 202, 236, 1)',
      borderWidth: 2,
    });
  }

  const data: ChartData<'radar'> = {
    labels: labels,
    datasets: datasets,
  };

  const options: ChartOptions<'radar'> = {
    scales: {
      r: {
        beginAtZero: true,
        angleLines: { display: false },
        suggestedMin: 0,
        suggestedMax: 5,
        pointLabels: {
          display: true,
          font: {
            weight: 'bold',
          },
          padding: 10,
        },
        ticks: {
          stepSize: 1,
          display: false, // hide ticks
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        display: datasets.length > 1, // 如果有两个数据集，则显示图例
      },
      title: {
        display: false,
        text: 'Radar Chart Example',
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export { DoughnutChart, RadarChart };
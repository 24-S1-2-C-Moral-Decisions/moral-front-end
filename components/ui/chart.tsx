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

const DoughnutChart: React.FC<DoughnutChartProps> = ({labels,voteData}) => {
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
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Doughnut Chart Example with Two Data Points',
      },
    },
    cutout: '45%', // control the size of the inner circle
  };

  return <Doughnut data={data} options={options} />;
};

interface RadarChartProps {
    labels: string[];
    dataPoints: number[];
  }
  
  const RadarChart: React.FC<RadarChartProps> = ({ labels, dataPoints }) => {
    const data: ChartData<'radar'> = {
      labels: labels,
      datasets: [
        {
          /*label: 'Work Personality',*/
          data: dataPoints,
          backgroundColor: 'rgba(34, 202, 236, 0.2)',
          borderColor: 'rgba(34, 202, 236, 1)',
          borderWidth: 2,
        },
      ],
    };
  
    const options: ChartOptions<'radar'> = {
        scales: {
            r: {
              beginAtZero: true,
              angleLines: { display: false },
              suggestedMin: 0,
              suggestedMax: 5,
              pointLabels: {
                display: true
              },
              ticks: {
                stepSize: 1,
                display: false // 这个选项用于隐藏刻度
              },
            },
          },
      plugins: {
        legend: {
          position: 'top',
          display: false
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
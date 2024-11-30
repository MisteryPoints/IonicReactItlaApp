import React, { useRef, useEffect } from 'react';
import {
  Chart,
  ChartType,
  ChartConfiguration,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  BarController, 
  LineController,  
  PieController,  
  PolarAreaController
} from 'chart.js';

Chart.register(
  CategoryScale, 
  LinearScale, 
  BarElement,  
  LineElement, 
  RadialLinearScale,
  PointElement,  
  ArcElement,  
  Tooltip, 
  Legend, 
  Title,  
  BarController,  
  LineController,  
  PieController,
  PolarAreaController
);

interface ChartProps {
  type: ChartType; 
  data: ChartConfiguration['data'];  
  options?: ChartConfiguration['options']; 
}

const ChartComponent: React.FC<ChartProps> = ({ type, data, options }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null); 
  const chartInstance = useRef<Chart | null>(null);  

  useEffect(() => {
    const canvas = chartRef.current;

    if (canvas) { 
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }

      try { 
        chartInstance.current = new Chart(canvas, {
          type,
          data,
          options,
        });
      } catch (error) {
        console.error('Error creating Chart:', error);
      }
    }
 
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [type, data, options]);

  return (
    <div className="p-4 bg-[#242424] text-white rounded shadow-md">
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;

import React from 'react'; 
import ChartComponent from '../components/ChartComponent';

const BarChart: React.FC = () => {
  const label = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

  const barChartData = {
    labels: label,
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: label,
    datasets: [
      {
        label: 'Revenue',
        data: [5, 10, 15, 20, 25, 30],
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.4,
      },
    ],
  };

  const pieChartData = {
    labels: ['Republicanos', 'Democratas', 'Otros'],
    datasets: [
      {
        label: 'Votantes',
        data: [300, 50, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const polarAreaData = {
    labels: [
      'Rojo',
      'Verde',
      'Amarillo',
      'Gris',
      'Azul'
    ],
    datasets: [{
      label: 'Votantes',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ],
      hovoerBackgroundColor: [
        'rgba(255, 99, 133, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(201, 203, 207, 0.7)',
        'rgba(54, 162, 235, 0.7)'
      ],
      borderColor: '#00000080',
      borderWidth: 1,
      circular: false
    }]
  };

  return ( 
    <div>
      <h1 className="text-xl font-bold text-center mb-4">Gráfico de Barras</h1>
      <ChartComponent type="bar" data={barChartData} />

      <h1 className="text-xl font-bold text-center mt-8 mb-4">Gráfico de Lineas</h1>
      <ChartComponent type="line" data={lineChartData} />

      <h1 className="text-xl font-bold text-center mt-8 mb-4">Gráfico de Pastel</h1>
      <ChartComponent type="pie" data={pieChartData} />
      
      <h1 className="text-xl font-bold text-center mt-8 mb-4">Gráfico de Pastel</h1>
      <ChartComponent type="polarArea" data={polarAreaData} />
    </div> 
  );
};

export default BarChart;

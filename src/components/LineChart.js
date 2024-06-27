import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';
import './LineChart.css';

const LineChart = ({ data, events }) => {
  const chartRef = useRef(null); // Create a reference

  useEffect(() => {
    const currentChartRef = chartRef.current;

    if (!currentChartRef) {
      return;
    }

    // Define the data and layout for Plotly
    const plotData = [
      {
        x: data.labels,
        y: data.param1,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Parameter 1',
        line: { color: 'rgba(75,192,192,1)' },
      },
      // Other data traces...
    ];

    // Add event markers
    events.forEach(event => {
      plotData.push({
        x: [event.x],
        y: [event.y],
        type: 'scatter',
        mode: 'markers',
        name: event.label,
        marker: {
          color: event.color || 'red',
          size: event.size || 10,
          symbol: event.symbol || 'circle',
        },
      });
    });

    const layout = {
      // title: 'Line Chart with Plotly',
      // xaxis: { title: 'X Axis Title' },
      // yaxis: { title: 'Y Axis Title' },
      showlegend: true,
      legend: {
        xanchor: 'right',
      },
      hovermode: 'closest',
      plot_bgcolor:"#fefefe",
      paper_bgcolor:"#fefefe",
    };

    const config = { responsive: true, scrollZoom: true };

    // Create the Plotly chart
    Plotly.newPlot(currentChartRef, plotData, layout, config);

    // Cleanup function to purge the chart on unmount
    return () => {
      if (currentChartRef) {
        Plotly.purge(currentChartRef);
      }
    };
  }, [data, events]); // Re-run the effect when `data` or `events` change

  return <div className="chart-container" ref={chartRef} />; // Attach the ref to the div element
};

export default LineChart;

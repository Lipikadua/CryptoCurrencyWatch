export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },
  zoomEnabled: true,
  animation: {
    duration: 2000,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    // yAxes:[
    //   {
    //     label: 'Price in USD',
    //     prefix: "$",
    //   },
    // ],
    xAxes: [
      {
        type: 'time',
        distribution: 'linear',
      },
    ],
  },
};

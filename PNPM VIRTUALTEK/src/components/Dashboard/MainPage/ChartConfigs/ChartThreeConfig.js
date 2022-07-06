const data = [
    {
      name: 'London',
      Month: 'Jan.',
      value: 18.9,
    },
    {
      name: 'London',
      Month: 'Feb.',
      value: 28.8,
    },
    {
      name: 'London',
      Month: 'Mar.',
      value: 39.3,
    },
    {
      name: 'London',
      Month: 'Apr.',
      value: 81.4,
    },
    {
      name: 'London',
      Month: 'May',
      value: 47,
    },
    {
      name: 'London',
      Month: 'Jun.',
      value: 20.3,
    },
    {
      name: 'London',
      Month: 'Jul.',
      value: 24,
    },
    {
      name: 'London',
      Month: 'Aug.',
      value: 35.6,
    },
    {
      name: 'Berlin',
      Month: 'Jan.',
      value: 12.4,
    },
    {
      name: 'Berlin',
      Month: 'Feb.',
      value: 23.2,
    },
    {
      name: 'Berlin',
      Month: 'Mar.',
      value: 34.5,
    },
    {
      name: 'Berlin',
      Month: 'Apr.',
      value: 99.7,
    },
    {
      name: 'Berlin',
      Month: 'May',
      value: 52.6,
    },
    {
      name: 'Berlin',
      Month: 'Jun.',
      value: 35.5,
    },
    {
      name: 'Berlin',
      Month: 'Jul.',
      value: 37.4,
    },
    {
      name: 'Berlin',
      Month: 'Aug.',
      value: 42.4,
    },
  ];
  export const config3 = {
    data,
    isGroup: true,
    xField: 'Month',
    yField: 'value',
    seriesField: 'name',

   
    label: {
      
      position: 'middle',
     
      layout: [
     
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        }, 
        {
          type: 'adjust-color',
        },
      ],
    },
  };

////Line Chart//////////
///////////////////////
const trafficChartLabels = [
    '16-22',
    '23-29',
    '30-5',
    '6-12',
    '13-19',
    '20-26',
    '27-3',
    '4-10',
    '11-17',
    '18-24',
    '25-31'
  ];
  const trafficChartData = {
    labels: trafficChartLabels,
    datasets: [{
      label: '',
      backgroundColor: 'rgba(183, 181, 232,0.3)',
      data: [0, 700,1800,1000,2000,1500,1800,1200,1900,2400,1500,2500],
      fill:true,
      tension:0.4,
      borderWidth:1
    }]

  };

  const trafficChartConfig = {
    type: 'line',
    data: trafficChartData,
    options: {
     plugins:{
      legend:{
        display: false
      },
      tooltips: {
        enabled: false
     }
     }
    }
  };

  const trafficChart = new Chart(
    document.getElementById('traffic-chart'),
    trafficChartConfig
  );


/////Bar Chart////////////
/////////////////////////
const dailyChartLabels = [
  'S',
  'M',
  'T',
  'W',
  'T',
  'F',
  'S'
];
const dailyChartData = {
  labels: dailyChartLabels,
  datasets: [{
    label: '',
    data: [50, 120, 160, 120, 230, 200, 100, 250],
    backgroundColor: [
      'rgb(116, 119, 191)'
    ],
    borderColor: [
      'rgb(116, 119, 191)'
    ],
    borderWidth: 1
  }]
};

const dailyChartConfig = {
  type: 'bar',
  data: dailyChartData,
      y: {
        beginAtZero: true
      },
      options: {
    plugins:{
     legend:{
       display: false
     },
     tooltips: {
       enabled: false
    }
    }
   }
    };

const dailyChart = new Chart(
  document.getElementById('daily-chart'),
  dailyChartConfig
  );

  /////Doughnut Chart//////////
  /////////////////////////////

  const mobileUsersdata = {
    labels: [
      'Desktop',
      'Tablet',
      'Phones'
    ],
    datasets: [{
      label: '',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(116, 119, 191)',
        'rgb(129,201,143)',
        'rgb(81, 181, 200)'
      ],
      hoverOffset: 4
    }]
  };

  const mobileUsersConfig = {
    type: 'doughnut',
    data: mobileUsersdata,
    options: {
      plugins:{
       legend:{
         display: true,
         position: 'right'
       },
       tooltips: {
        enabled: true
     }
      }
     }
  };

  const mobileChart = new Chart(
    document.getElementById('mobile-chart'),
    mobileUsersConfig
    );


    /////////////////////////////
    //////MESSAGE USER SEND BUTTON//////////

    const user = document.getElementById("userField");
    const message = document.getElementById("messageField");
    const send = document.getElementById("send");

    send.addEventListener('click', () => {
      // user and message fields are filled out conditional
      if (user.value === "" && message.value === "") {
      alert("Please fill out user and message fields before sending");
      } else if (user.value === "" ) {
      alert("Please fill out user field before sending");
      } else if (message.value === "" ) {
      alert("Please fill out message field before sending");
      } else {
      alert(`Message successfully sent to: ${user.value}`);
      }
      });


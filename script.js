const ctx = document.getElementById("myChart");

const dataArray = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "",
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      backgroundColor: [
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(186, 34%, 60%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
      ],

      hoverBackgroundColor: [
        "rgb(248, 139, 139)",
        "rgb(248, 139, 139)",
        "hsl(186, 78%, 86%)",
        "rgb(248, 139, 139)",
        "rgb(248, 139, 139)",
        "rgb(248, 139, 139)",
        "rgb(248, 139, 139)",
      ],

      borderWidth: 1,
      borderRadius: 5,
    },
  ],
};

// config
const config = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          borderColor: "transparent",
        },
      },
      x: {
        grid: {
          display: false,
          borderColor: "transparent",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
        },
      },
      tooltip: {
        yAlign: "bottom",
        displayColors: false,
        titleMarginBottom: 0,
        callbacks: {
          title: () => null,
          label: (tooltipitems) => {
            return "";
          },
          beforeBody: function (context) {
            return `$${dataArray[context[0].dataIndex]}`;
          },
        },
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

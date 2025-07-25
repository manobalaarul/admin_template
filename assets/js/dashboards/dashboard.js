$(function () {
  //
  // Carousel
  //
  $(".counter-carousel").owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    rtl: true,
    nav: false,
    dots:false,
    responsive: {
      0: {
        items: 2,
        loop: true,
      },
      576: {
        items: 2,
        loop: true,
      },
      768: {
        items: 3,
        loop: true,
      },
      1200: {
        items: 5,
        loop: true,
      },
      1400: {
        items: 6,
        loop: true,
      },
    },
  });
  // =====================================
  // Profit
  // =====================================
  var chart = {
    series: [
      {
        name: "Eanings this month",
        data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.0],
      },
      {
        name: "Expense this month",
        data: [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      height: 310,
      stacked: true,
      width: "100%",
      offsetX: -20,
    },
    colors: ["var(--color-primary)", "var(--color-secondary)"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "20%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    
    yaxis: {
      min: -5,
      max: 5
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      categories: [
        "16/08",
        "17/08",
        "18/08",
        "19/08",
        "20/08",
        "21/08",
      ],
    },
    yaxis: {
      tickAmount: 4,
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), chart);
  chart.render();

  // =====================================
  // Breakup
  // =====================================
  var breakup = {
        color: "#adb5bd",
        series: [38, 40, 25],
        labels: ["2023", "2022", "2025"],
        chart: {
            width: 180,
            type: "donut",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '75%',
                },
            },
        },
        stroke: {
            show: false,
        },

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        colors: ["var(--color-primary)", "var(--color-lightprimary)", "var(--color-secondary)"],

        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 120,
                    },
                },
            },
        ],
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();

  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "var(--color-secondary)",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.1,
        opacityTo: 0,
        stops: [20, 180],
      },
      opacity: 0.5,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();

  // =====================================
  // Salary
  // =====================================
  var salary = {
    series: [
      {
        name: "Employee Salary",
        data: [20, 15, 30, 25, 10, 15, 20],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      height: 260,
      type: "bar",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      offsetX:-30,
    },
    colors: [
      "var(--color-lightprimary)",
      "var(--color-lightprimary)",
      "var(--color-primary)",
      "var(--color-lightprimary)",
      "var(--color-lightprimary)",
      "var(--color-lightprimary)",
      "var(--color-lightprimary)",
    ],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "55%",
        distributed: true,
        endingShape: "rounded",
        
      },
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [["Apr"], ["May"], ["June"], ["July"], ["Aug"], ["Sept"],["Oct"]],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#salary"), salary);
  chart.render();

  // =====================================
  // Customers
  // =====================================
  var customers = {
    chart: {
      id: "sparkline3",
      type: "area",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    series: [
      {
        name: "Customers",
        color: "var(--color-secondary)",
        data: [30, 25, 35, 20, 30, 40],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.1,
        opacityTo: 0,
        stops: [20, 180],
      },
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#customers"), customers).render();

  // =====================================
  // Projects
  // =====================================
  var projects = {
    series: [
      {
        name: "",
        data: [4, 10, 9, 7, 9, 10, 11, 8, 10, 9],
      },
    ],
    chart: {
      type: "bar",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      height: 60,
      offsetX:-10,

      resize: true,
      barColor: "#fff",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["var(--color-primary)"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "flat",
        columnWidth: "60%",
        barHeight: "20%",
        endingShape: "rounded",
        distributed: true,
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2.5,
      colors: ["rgba(0,0,0,0.01)"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    axisBorder: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
      },
      x: {
        show: false,
      },
    },
  };

  var chart_column_basic = new ApexCharts(
    document.querySelector("#projects"),
    projects
  );
  chart_column_basic.render();

  // =====================================
  // Stats
  // =====================================
  var stats = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 180,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Weekly Stats",
        color: "var(--color-primary)",
        data: [5, 15, 10, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.1,
        opacityTo: 0,
        stops: [20, 280],
      },
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#stats"), stats).render();
});

//Toaster Js
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(()=>{
    if(document.getElementById('dismiss-toast')){   
      document.getElementById('dismiss-toast').classList.add('hs-removing'); 
      document.getElementById('dismiss-toast').classList.remove('show-toast'); 
      setTimeout(() => {
        document.getElementById('dismiss-toast').remove();
      }, 300);  
    }
    else{}
  },5000)

  setTimeout(()=>{
    document.getElementById('dismiss-toast').classList.add('show-toast'); 
  },1000)
});
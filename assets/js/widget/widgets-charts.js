document.addEventListener("DOMContentLoaded", function () {
    // =====================================
    // widgest-chart-1
    // =====================================
    var options = {
        chart: {
            id: "widgest-chart-1",
            type: "area",
            height: 90,
            sparkline: {
                enabled: true,
            },
            group: "widgest-chart-1",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        series: [
            {
                name: '',
                color: "var(--color-primary)",
                data: [0, 150, 110, 240, 200, 200, 300, 200],
            },
        ],
        stroke: {
            curve: "straight",
            width: 2,
        },

        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0.1,
                opacityTo: 0,
                stops: [0, 200],
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
    new ApexCharts(document.querySelector("#widgest-chart-1"), options).render();




    // =====================================
    // widgest-chart-2
    // =====================================
    var options = {
        series: [
            {
                name: "",
                data: [20, 15, 30, 25, 10, 18, 20],
            },
        ],

        chart: {
            toolbar: {
                show: false,
            },
            height: 85,
            type: "bar",
            sparkline: {
                enabled: true
            },
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            offsetX:-12
        },
        colors: ["var(--color-lightsecondary)", "var(--color-lightsecondary)", "var(--color-secondary)", "var(--color-lightsecondary)", "var(--color-lightsecondary)", "var(--color-lightsecondary)", "var(--color-lightsecondary)"],
        plotOptions: {
            bar: {
                borderRadius: 3,
                columnWidth: "48%",
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
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false
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

    var chart = new ApexCharts(document.querySelector("#widgest-chart-2"), options);
    chart.render();



    // =====================================
    // widgest-chart-3
    // =====================================
    var options = {
        chart: {
            id: "widgest-chart-3",
            type: "area",
            height: 90,
            sparkline: {
                enabled: true,
            },
            group: "sparklines",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        series: [
            {
                name: '',
                color: "var(--color-primary)",
                data: [0, 3, 1, 2, 8, 1, 5, 1],
            },
        ],
        stroke: {
            curve: "straight",
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
    new ApexCharts(document.querySelector("#widgest-chart-3"), options).render();



    // =====================================
    // widgest-chart-4
    // =====================================
    var options = {
        series: [
            {
                name: "",
                data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
            },
        ],

        chart: {
            toolbar: {
                show: false,
            },
            height: 55,
            type: "bar",
            sparkline: {
                enabled: true
            },
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            offsetX:-8
        },
        colors: ["var(--color-secondary)", "var(--color-secondary)", "var(--color-secondary)", "var(--color-secondary)", "var(--color-secondary)", "var(--color-secondary)", "var(--color-secondary)", "var(--color-secondary)", "var(--color-secondary)"],
        plotOptions: {
            bar: {
                borderRadius: 3,
                columnWidth: "45%",
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
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false
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

    var chart = new ApexCharts(document.querySelector("#widgest-chart-4"), options);
    chart.render();



    // =====================================
    // widgest-chart-5
    // =====================================
    var options = {
        series: [
            {
                name: "",
                data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5],
            },
            {
                name: "",
                data: [-2.8, -1.1, -3.2, -1.5, -1.9, -2.8],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
            type: "bar",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            height: 235,
            stacked: true,
            offsetX:-18
        },
        colors: ["var(--color-primary)", "var(--color-primary)"],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: "60%",
                columnWidth: "20%",
                borderRadius: [5],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            },
        },
        stroke: {
            show: false
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        yaxis: {
            min: -5,
            max: 5,
            tickAmount: 4
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            axisTicks: {
                show: false,
            },
        },
        tooltip: {
            theme: "dark",
        },

    };

    var chart = new ApexCharts(document.querySelector("#widgest-chart-5"), options);
    chart.render();




    // =====================================
    // widgest-chart-6
    // =====================================
    var options = {
        series: [
            {
                name: "",
                data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5],
            },
            {
                name: "",
                data: [-2.8, -1.1, -3.2, -1.5, -1.9, -2.8],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
            type: "bar",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            height: 235,
            stacked: true,
            offsetX:-18
        },
        colors: ["var(--color-secondary)", "var(--color-secondary)"],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: "60%",
                columnWidth: "20%",
                borderRadius: [5],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            },
        },
        stroke: {
            show: false
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        yaxis: {
            min: -5,
            max: 5,
            tickAmount: 4
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            axisTicks: {
                show: false,
            },
        },
        tooltip: {
            theme: "dark",
        },

    };

    var chart = new ApexCharts(document.querySelector("#widgest-chart-6"), options);
    chart.render();




    // =====================================
    // Current Year
    // =====================================
    var options = {
        color: "#adb5bd",
        series: [55, 55, 55],
        labels: ["Income", "Current", "Expance"],
        chart: {
            type: "donut",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '89%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 7,
                        },
                        value: {
                            show: false,
                        },
                        total: {
                            show: true,
                            color: '#5A6A85',
                            fontSize: '20px',
                            fontWeight: "600",
                            label: '$98,260',
                        },
                    },
                },
            },
        },

        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: false,
        },
        legend: {
            show: false,
        },
        colors: ["var(--color-primary)", "#EAEFF4", "var(--color-secondary)"],

        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };

    var chart = new ApexCharts(document.querySelector("#current-year"), options);
    chart.render();




    // =====================================
    // Breakup
    // =====================================
    var options = {
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

    var chart = new ApexCharts(document.querySelector("#breakup"), options);
    chart.render();



    // =====================================
    // monthly-earning
    // =====================================
    var options = {
        chart: {
            id: "monthly-earning",
            type: "area",
            height: 70,
            sparkline: {
                enabled: true,
            },
            group: "monthly-earning",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        series: [
            {
                name: 'monthly earnings',
                color: "var(--color-primary)",
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
    new ApexCharts(document.querySelector("#monthly-earning"), options).render();




    // =====================================
    // Most Visited
    // =====================================
    var options = {
        series: [
            {
                name: "San Francisco",
                data: [44, 55, 41, 67, 22, 43],
            },
            {
                name: "Diego",
                data: [13, 23, 20, 8, 13, 27],
            },
        ],
        chart: {
            height: 265,
            type: 'bar',
            fontFamily: "inherit",
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
            stacked: true,
            offsetX:-15
        },

        colors: ["var(--color-primary)", "var(--color-secondary)"],

        plotOptions: {
            bar: {
                borderRadius: [6],
                horizontal: false,
                barHeight: '60%',
                columnWidth: '40%',
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
            }
        },
        stroke: {
            show: false
        },

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },

        grid: {
            show: false,
        },

        yaxis: {
            tickAmount: 4,
        },

        xaxis: {
            categories: ['01', '02', '03', '04', '05', '06'],
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: true,
                color:'rgba(173,176,187,0.2)'
            }
        },

        tooltip: {
            theme: 'dark',
            fillSeriesColor: false,
            x: {
                show: false
            }
        },

    };

    var chart = new ApexCharts(document.querySelector("#most-visited"), options);
    chart.render();




    // =====================================
    // Yearly Salary
    // =====================================
    var options = {
        series: [
            {
                name: "",
                data: [20, 15, 30, 25, 10, 15, 20],
            },
        ],

        chart: {
            toolbar: {
                show: false,
            },
            height: 275,
            type: "bar",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            offsetX:-30
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
                borderRadius: 3,
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

    var chart = new ApexCharts(document.querySelector("#yearly-salary"), options);
    chart.render();



    // =====================================
    // Impressions
    // =====================================
    var options = {
        series: [
            {
                name: "",
                data: [20, 15, 30, 25, 10],
            },
        ],

        chart: {
            toolbar: {
                show: false,
            },
            height: 100,
            type: "bar",
            sparkline: {
                enabled: true
            },
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        colors: ["var(--color-lightsecondary)", "var(--color-lightsecondary)", "var(--color-secondary)", "var(--color-lightsecondary)", "var(--color-lightsecondary)"],
        plotOptions: {
            bar: {
                borderRadius: 3,
                columnWidth: "64%",
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
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false
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

    var chart = new ApexCharts(document.querySelector("#impressions"), options);
    chart.render();



    // =====================================
    // Customers
    // =====================================
    var options = {
        chart: {
            id: "customers",
            type: "area",
            height: 80,
            sparkline: {
                enabled: true,
            },
            group: "customers",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            
        },

        series: [
            {
                name: '',
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
    new ApexCharts(document.querySelector("#customers"), options).render();




    // =====================================
    // Projects
    // =====================================
    var options = {
        series: [
            {
                name: "",
                data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
            },
        ],

        chart: {
            toolbar: {
                show: false,
            },
            height: 80,
            type: "bar",
            sparkline: {
                enabled: true
            },
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            offsetX:-5
        },
        colors: ["var(--color-primary)", "var(--color-primary)", "var(--color-primary)", "var(--color-primary)", "var(--color-primary)", "var(--color-primary)", "var(--color-primary)", "var(--color-primary)", "var(--color-primary)"],
        plotOptions: {
            bar: {
                borderRadius: 2,
                columnWidth: "40%",
                distributed: true,
                endingShape: "rounded",
                borderRadiusApplication: 'end',
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
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false
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

    var chart = new ApexCharts(document.querySelector("#projects"), options);
    chart.render();



    // =====================================
    // Revenue Updates
    // =====================================
    var options = {
        series: [
            {
                name: "Footware",
                data: [2.5, 2.7, 3.2, 2.6, 1.9],
            },
            {
                name: "Fashionware",
                data: [-2.8, -1.1, -3.0, -1.5, -1.9],
            },
        ],
        chart: {
            height: 290,
            type: 'bar',
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            toolbar: {
                show: false
            },
            offsetX: -20,
            stacked: true
        },
        colors: ["var(--color-primary)", "var(--color-secondary)"],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '20%',
                borderRadius: [5],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            }
        },
        stroke: {
            show: false
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        yaxis: {
            min: -5,
            max: 5,
            tickAmount: 4
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
        },
        tooltip: {
            theme: "dark",
        },

    };

    var chart = new ApexCharts(document.querySelector("#revenue-updates"), options);
    chart.render();




    // =====================================
    // Sales Overview
    // =====================================
    var options = {
        color: "#adb5bd",
        series: [38, 40, 25],
        labels: ["Expance", "Revenue", "Profit"],
        chart: {
            type: "donut",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '89%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 7,
                        },
                        value: {
                            show: false,
                        },
                        total: {
                            show: true,
                            color: '#5A6A85',
                            fontSize: '20px',
                            fontWeight: "600",
                            label: '$500,458',
                        },
                    },
                },
            },
        },

        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: false,
        },
        legend: {
            show: false,
        },
        colors: ["var(--color-secondary)", "#EAEFF4", "var(--color-primary)"],

        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };

    var chart = new ApexCharts(document.querySelector("#sales-overview"), options);
    chart.render();




});
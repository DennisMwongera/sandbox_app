<template>
    <div>
      <div>
        <VueApexCharts
            type="donut"
            :options="chartOptions"
            :series="series"
        ></VueApexCharts>
      </div>
    </div>
  </template>
  
  <script>
  import VueApexCharts from "vue-apexcharts";
  export default {
    name: "PieChart",
    props: ['question'],
    components: {
      VueApexCharts,
    },
    data() {
      return {
        report: {
          keys: [],
          values: []
        },
      };
    },
    mounted() {
    //   this.extractKeysAndValues()
    },
    methods: {
      extractKeysAndValues() {
        this.report.keys = (this.question.report.map(a => a.key))
        this.report.values = (this.question.report.map(a => a.percentage))
      }
    },
    computed: {
      series() {
        return this.report.values
      },
      chartOptions() {
        return {
          labels:  this.report.keys,
          chart: {
            type: 'donut',
            height: '300',
            fontFamily: "Inter, sans-serif",
            animations: {
              show: false
            },
            toolbar: {
              show: false
            },
          },
          noData: {
            text: 'There is no data for this question'
          },
          dataLabels: {
            enabled: true,
            distributed: true,
            style: {
              fontWeight: 500,
            },
            background: {
              enabled: true,
              foreColor: "#000",
              borderRadius: 2,
              opacity: 1,
              dropShadow: {
                enabled: true,
              },
            },
            dropShadow: {
              enabled: false,
            },
          },
          tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: false,
            style: {
              fontSize: '12px',
            },
            marker: {
              show: false
            },
            onDatasetHover: {
              highlightDataSeries: false,
            },                 
            y: {
              formatter: function(value) {
                return value + '%'
              },
            title: {
              show: false,
                formatter: (seriesName) => seriesName,
              },
            }
          },        
          legend: {
            fontSize: '13px',
            height: "250",
            itemMargin: {
              vertical: 3
            },
            markers: {
              offsetX: -5,
              offsetY: 1,
              radius: 0,
              width: 12
            },
            position: "left",
            showForSingleSeries: false,
            //showForNullSeries: false,
            //showForZeroSeries: false,
            formatter: function(seriesName,opts) {
                return [seriesName, "-", opts.w.globals.series[opts.seriesIndex]]
            },          
            width: "300",
          },
          theme: {
            palette: 'palette10',
            monochrome: {
              enabled: false,
              color: '#0B2559',
              shadeTo: 'light',
              shadeIntensity: 0.85
          },                
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            dataLabels: {
              offset: 20
            },
            donut: {
              size: "65%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#000",
                  formatter: function () {
                    return "Percentage";
                  },
                },
                value: {
                  show: true,
                  fontSize: "30px",
                  fontWeight: 600,
                  formatter: function (val) {
                    return val + "%";
                  },
                },
              },
            },
          },
        }
      }
    }
  },
  };
  </script>
  
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "./../constants";

  const renderTooltip = context => {
    const { category, value } = context.point || context;
    return (
      <div>
        {category}: {value}%
      </div>
    );
  };
  
  
  // Graph data
  const MostMusicListenedThisMonth= [
    {
      status: "Pop",
      value: 40,
      color: COLORS.Pop,
    },
    {
      status: "Country ",
      value: 25,
      color: COLORS.Country,
    },
    {
      status: "Rap",
      value: 10,
      color: COLORS.Rap,
    },
    {
      status: "Altrnative",
      value: 20,
      color: COLORS.Alternative,
    },
    
  ];
  
  // Show category label for each item in the donut graph
  const labelContent = e => e.category;
  
  const Charts = props => {
    return (
      <Chart>
        <ChartTitle text="Most music listened to  - this month" />
        <ChartLegend visible={false} />
        <ChartTooltip render={renderTooltip} />
        <ChartSeries>
          <ChartSeriesItem
            type="donut"
            data={MostMusicListenedThisMonth}
            categoryField="status"
            field="value"
          >
            <ChartSeriesLabels
              color="#fff"
              background="none"
              content={labelContent}
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    );
  };
  
  export default Charts;
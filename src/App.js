import "./styles.css";
import BubbleChart from "./BubbleCharts";
import MyBarChart from "./MyBarChart";
import HorizontalBarChart from "./HorizontalBarChart";
import RadialChart from "./RadialChart";
import RadarChartComponent from "./RadarChartComponent";
import LineChartComponent from "./LineChartComponent";
import StackedBarChartWithClick from "./StackedBarChartWithClick";
import StackedBarChart from "./BarHorizontal";
import BarVertical from "./BarVertical";
import StudentPerformanceChart from "./DognutChart";
import BarGapChart from "./BarGapChart";
export default function App() {
  return (
    <div className="App">
      {/* <BubbleChart />
       */}
      {/* <MyBarChart /> */}
      {/* <HorizontalBarChart /> */}
      {/* <RadialChart /> */}
      {/* <RadarChartComponent /> */}
      {/* < /> */}
      {/* <StackedBarChartWithClick /> */}

      {/*  Final Charts */}

      {/* Horizontal Bar Chart */}
      <StackedBarChart />

      {/* Vertical Bar Chart */}
      <BarVertical />

      {/* Dognut Chart */}
      <StudentPerformanceChart />

      {/* Radial Chart */}
      <RadialChart />

      {/* BAr Gap Chart */}
      <BarGapChart />
    </div>
  );
}

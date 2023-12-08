import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const EarningsChart = ({ chartData }) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: chartData || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };

  return (
    <View className="w-full flex items-end">
      <LineChart
        data={data}
        width={Dimensions.get("window").width}
        height={200}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          fillShadowGradientOpacity: 1,
          fillShadowGradientToOpacity: 0.5,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(120, 82, 243, ${opacity})`, // Line color
          labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
          propsForLabels: {
            fontSize: 11,
            fontWeight: 500,
          },
          propsForBackgroundLines: {
            strokeDasharray: 0,
            stroke: "rgba(0, 0, 0, 0.1)",
            strokeWidth: 0.8,
            strokeOpacity: 0.5,
          },
          style: {
            borderRadius: 16,
          },
        }}
        bezier
      />
    </View>
  );
};

export default EarningsChart;

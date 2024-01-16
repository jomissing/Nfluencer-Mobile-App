import React from "react";
import { View, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const PriceHistory = ({ isDarkMode }) => {
  // Sample data for demonstration
  const data = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        data: [0.0001, 0.0002, 0.0003],
        color: (opacity = 1) => `rgba(120, 82, 243, ${opacity})`, // Bar color
      },
    ],
  };

  return (
    <View>
      <BarChart
        data={data}
        width={Dimensions.get("window").width}
        height={200}
        // yAxisLabel="$"
        // yAxisSuffix=" ETH"
        chartConfig={{
          showGrid: false,
          backgroundGradientFrom: isDarkMode ? "#24293e" : "#fff",
          backgroundGradientTo: isDarkMode ? "#24293e" : "#fff",
          fillShadowGradientOpacity: 1,
          fillShadowGradientToOpacity: 0.5,
          barRadius: 3,
          decimalPlaces: 5,
          fillShadowGradient: "rgba(120, 82, 243, 1)",
          color: (opacity = 1) => `rgba(120, 82, 243, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
          propsForLabels: {
            fontSize: 11,
            fontWeight: "500",
          },
          propsForBackgroundLines: {
            strokeDasharray: "0",
            stroke: "rgba(120, 82, 243, 0.3)",
            strokeWidth: 0.8,
            strokeOpacity: 0.5,
          },
          style: {
            borderRadius: 16,
          },
        }}
      />
    </View>
  );
};

export default PriceHistory;

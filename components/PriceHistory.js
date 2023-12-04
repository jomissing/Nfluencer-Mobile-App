import React from "react";
import { View, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const PriceHistory = () => {
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
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          fillShadowGradientOpacity: 1,
          fillShadowGradientToOpacity: 0.5,
          barRadius: 3,
          decimalPlaces: 2,
          fillShadowGradient: "rgba(120, 82, 243, 1)", // Solid fill color
          color: (opacity = 1) => `rgba(120, 82, 243, ${opacity})`, // Border color
          labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`, // Label color
          propsForLabels: {
            fontSize: 12,
            fontWeight: "500",
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

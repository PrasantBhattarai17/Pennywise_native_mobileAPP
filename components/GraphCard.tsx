import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export default function ChartScreen() {

  const data = {
    labels: ["1st week", "2nd week", "3rd week", "4th week"],
    datasets: [
      {
        data: [0, 45, 28, 80]
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff", // White background
    backgroundGradientTo: "#ffffff", // White background
    color: (opacity = 1) => `rgba(138, 43, 226, ${opacity})`, // Blue-violet color
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
    strokeWidth: 3,
    barPercentage: 0.5,
    useShadowColorFromDataset: false 
  };

  const graphStyle = styles.graphStyle;

  return (
    <View style={styles.container}>
      <BarChart
        style={graphStyle}
        data={data}
        width={320}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="" 
        chartConfig={chartConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
 },
});

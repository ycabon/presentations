
interface StatisticsResponse {
   timeOfDay: "Morning" | "Afternoon" | "Evening" | "Night" | string,
   season: "Winter" | "Spring" | "Summer" | "Fall" | string,
   value: number
 } 
  
interface ChartData {
  row: number,
  col: number,
  value: number
}

interface CellHighlight {
  row: number,
  col: number
}
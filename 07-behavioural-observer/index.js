import { Chart } from "./chart.js";
import { DataSourceSubject } from "./dataSourceSubject.js";
import { SpreadSheet } from "./spreadSheet.js";

const spreadSheet = new SpreadSheet();
const chart = new Chart();

const dataSource = new DataSourceSubject();
dataSource.addObserver(spreadSheet);
dataSource.addObserver(chart);

dataSource.setValue(5); // notify observer

dataSource.removeObserver(chart);
dataSource.setValue(5); // notify observer

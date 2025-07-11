import { GenerateReportTask } from "./generateReportTask.js";
import { TransferMoneyTask } from "./transferMoneyTask.js";

const transferMoney = new TransferMoneyTask();
transferMoney.execute();

const generateReport = new GenerateReportTask();
generateReport.execute();

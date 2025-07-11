import { CustomerService } from "./customerService.js";
import { AddCustomerCommand } from "./addCustomerCommand.js";
import { Button } from "./framework/button.js";

const customerService = new CustomerService();

const command = new AddCustomerCommand(customerService);

const button = new Button(command);
button.click();

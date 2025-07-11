import { CommandInterface } from "./framework/commandInterface.js";

export class AddCustomerCommand extends CommandInterface {
  constructor(customerService) {
    super();
    this.customerService = customerService;
  }

  execute() {
    this.customerService.addCustomer();
  }
}

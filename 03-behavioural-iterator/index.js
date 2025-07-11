import { BrowsrHistory } from "./browserHistory.js";

const history = new BrowsrHistory();
history.push("url-1");
history.push("url-2");
history.push("url-3");

const iterator = history.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.current());
  iterator.next();
}

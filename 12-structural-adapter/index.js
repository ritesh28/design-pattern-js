import { CaramelFilterAdapter } from "./caramelFilterAdapter.js";
import { Image } from "./image.js";
import { ImageView } from "./imageView.js";
import { VividFilter } from "./vividFilter.js";

const imageView = new ImageView(new Image());
imageView.applyFilter(new VividFilter());
imageView.applyFilter(new CaramelFilterAdapter());

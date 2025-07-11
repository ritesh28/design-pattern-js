import FilterInterface from "./filterInterface.js";

export class CinematicFilter extends FilterInterface {
  apply(fileName) {
    console.log("Applying Cinematic filter");
  }
}

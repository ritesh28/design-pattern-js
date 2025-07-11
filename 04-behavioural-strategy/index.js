import { BwFitler } from "./bwFilter.js";
import { CinematicFilter } from "./cinematicFilter.js";
import { ImageStorage } from "./imageStorage.js";
import { JpegCompressor } from "./jpegCompressor.js";
import { PngCompressor } from "./pngCompressor.js";

// compressor
const jpegCompressor = new JpegCompressor();
const pngCompressor = new PngCompressor();

// filter
const bwFilter = new BwFitler();
const cinematicFilter = new CinematicFilter();

const imageStorage1 = new ImageStorage(jpegCompressor, bwFilter);
imageStorage1.store("file-1");

const imageStorage2 = new ImageStorage(pngCompressor, cinematicFilter);
imageStorage2.store("file-2");

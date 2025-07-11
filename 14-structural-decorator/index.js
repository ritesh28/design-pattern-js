import { CloudStream } from "./cloudStream.js";
import { CompressedCloudStream } from "./compressedCloudStream.js";
import { EncryptedCloudStream } from "./encryptedCloudStream.js";

const stream = new CloudStream();
stream.write("Hey!!");

const compressedStream = new CompressedCloudStream(new CloudStream());
compressedStream.write("Hey!!");

const encryptedCompressedStream = new EncryptedCloudStream(
  new CompressedCloudStream(new CloudStream())
);
encryptedCompressedStream.write("Hey!!");

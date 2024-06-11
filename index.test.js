import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { isUtf8 } from "buffer";

const htmlFile = fs.readFileSync(
  path.resolve(__dirname, "./index.html"),
  "utf-8"
);

const cssFile = fs.readFileSync(
  path.resolve(__dirname, "./styles.css"),
  "utf-8"
);

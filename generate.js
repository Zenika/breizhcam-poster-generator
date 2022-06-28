import cliProgress from "cli-progress";
import { promises as fs } from "fs";
import pkg from 'github-slugger';
import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import path from "path";
import puppeteer from "puppeteer";
import list from "./talks.json" assert { type: 'json' };
const { slug } = pkg;

const __dirname = path.resolve(path.dirname(''));

const httpPort = 3000;

const totalLength = list.length + 4;
const increment = 100 / totalLength;

let generated = 0;

const progressBar = new cliProgress.SingleBar(
  {
    format: `{state} | {bar} | ETA : {eta}s | Logo {nbFiles} / ${totalLength}`,
  },
  cliProgress.Presets.shades_classic
);

async function init() {
  progressBar.start(100, 0, {
    eta: "20s",
    nbFiles: 0,
    state: "Generating logos",
  });

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-web-security", `--user-data-dir=data`],
  });

  await fs.rmdir(path.join(__dirname, "/images"), { recursive: true });
  await fs.mkdir(path.join(__dirname, "/images"));

  await Promise.all([
    ...list.map((talk) => generate(browser, slug(talk.name), `talks/${talk.id}`)),
    generate(browser, "liste", ""),
    generate(browser, "mercredi", "days/mercredi"),
    generate(browser, "jeudi", "days/jeudi"),
    generate(browser, "vendredi", "days/vendredi"),
  ]);

  progressBar.stop();

  await browser.close();

  await imagemin([`${path.join(__dirname, "/images")}/*.png`], {
    destination: path.join(__dirname, "/images"),
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });

  console.log(`🚀 - Successfully generate ${totalLength} images! 🤘`);
}

async function generate(browser, fileName, url) {
  const page = await browser.newPage();

  await page.goto(`http://localhost:${httpPort}/${url}`, {
    waitUntil: "networkidle2",
  });

  await page.setViewport({
    width: 4961,
    height: 3508,
  });

  await page.screenshot({
    path: `./images/${fileName}.png`,
    type: "png",
    omitBackground: false,
  });

  await page.emulateMediaType("screen");

  await page.pdf({
    path: `./images/${fileName}.pdf`,
    width: 4961,
    height: 3508,
    printBackground: true,
  });

  generated++;

  progressBar.increment(increment, {
    eta: "40s",
    nbFiles: generated,
  });

  return {
    fileName,
  };
}

init();

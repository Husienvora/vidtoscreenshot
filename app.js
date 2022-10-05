const { strict } = require("assert");
const { DownloaderHelper } = require("node-downloader-helper");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
const ss = async () => {
  const file =
    "https://storage.googleapis.com/magitt-bkp-storage-buk/Web-Windows-Project-Bkp/webcams.webm";
  // Path at which image will be downloaded
  const filePath = `./videos`;

  const dl = new DownloaderHelper(file, filePath);
  console.log(dl);
  dl.on("end", () => console.log("Download Completed"));
  await dl.start();
  ffmpeg.setFfmpegPath(ffmpegPath);
  ffmpeg("./videos/webcams.webm")
    .on("filenames", (filenames) => {
      console.log("Created file names", filenames);
    })
    .on("end", () => {
      console.log("Job done");
    })
    .on("error", (err) => {
      console.log("Error", err);
    })
    .takeScreenshots(
      {
        filename: "screenshot.jpg",
        timemarks: [15, 30, 60, 120, 300],
      },
      "webcams"
    );
};
ss();

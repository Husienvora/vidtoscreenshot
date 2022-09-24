const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg("./Avicii.True.Stories.2017.1080p.WEBRip.x264-[YTS.AM].mp4")
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
      filename: "example.jpg",
      timemarks: [15, 30, 60, 120, 300],
    },
    "images"
  );

const { strict } = require("assert");

const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg("./videos/webcams.webm")
  .setStartTime("00:00:03")
  .setDuration("5")
  .output("video_out.mp4")
  .on("end", function (err) {
    if (!err) {
      console.log("conversion Done");
    }
  })
  .on("error", (err) => console.log("error: ", err))
  .run();

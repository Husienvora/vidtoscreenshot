# vidtoscreenshot
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;\n
const ffmpeg = require("fluent-ffmpeg");\n
ffmpeg.setFfmpegPath(ffmpegPath);\n
ffmpeg("./Avicii.True.Stories.2017.1080p.WEBRip.x264-[YTS.AM].mp4")\n
  .on("filenames", (filenames) => {\n
    console.log("Created file names", filenames);\n
  })\n
  .on("end", () => {\n
    console.log("Job done");\n
  })\n
  .on("error", (err) => {\n
    console.log("Error", err);\n
  })\n
  .takeScreenshots(\n
    {\n
      filename: "example.jpg",\n
      timemarks: [15, 30, 60, 120, 300],\n
    },\n
    "images"\n
  );\n
  

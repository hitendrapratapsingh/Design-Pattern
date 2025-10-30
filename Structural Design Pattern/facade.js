class VideoProcessingFacade {
  constructor() {
    this.loader = new VideoLoader();
    this.compressor = new VideoCompressor();
    this.uploader = new VideoUploader();
  }

  processVideo(file) {
    this.loader.load(file);
    this.compressor.compress(file);
    this.uploader.upload(file);
    console.log("Video processing completed successfully!");
  }
}

class VideoLoader {
  load(file) {
    console.log(`Loading video file: ${file}`);
  }
}

class VideoCompressor {
  compress(file) {
    console.log(`Compressing video file: ${file}`);
  }
}

class VideoUploader {
  upload(file) {
    console.log(`Uploading video file: ${file}`);
  }
}

// Client code
const facade = new VideoProcessingFacade();
facade.processVideo("movie.mp4");

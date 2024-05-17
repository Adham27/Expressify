import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const App = () => {
  const [videoFile, setVideoFile] = useState(null);

  const props = {
    name: "file",
    multiple: false,
    beforeUpload: (file) => {
      setVideoFile(file);
      return false; // Prevent upload action
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const videoInputItem = () => {
    if (videoFile)
      return (
        <video controls width={"100%"} height={"300"}>
          <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    else
      return (
        <Dragger className="dragger" {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag video to this area to upload
          </p>
        </Dragger>
      );
  };

  return (
    <div className="container model-lap-container">
      <div className="text-center mt-4">
        <div>
          <h4 className="header">Model App</h4>
          <p className="sub-header">Upload your video to extract the emotions!</p>
        </div>
      </div>

      <div className="row mt-4 justify-content-between video-files-container">
        <div className="col-md-12 mb-4 mb-md-0">
          <h3>Original Video</h3>
          {videoInputItem()}
        </div>
      </div>
    </div>
  );
};

export default App;

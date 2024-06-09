import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Button } from "antd";

import Cookies from 'js-cookie';
const { Dragger } = Upload;

const App = () => {
   const getAccessToken = () => {
    return Cookies.get('access_token_cookie') || localStorage.getItem('Token');
  };
  const token = getAccessToken();
  const userId = localStorage.getItem('user_id');

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

  const handleUpload = async () => {
    if (!videoFile) {
      message.error('No video file selected');
      return;
    }

    const formData = new FormData();
    formData.append('video', videoFile);

    try {
      
      const response = await fetch(`/api/users/${userId}/app/analyzeVideo`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Accept': 'application/pdf'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to process the video');
      }

      const blob = await response.blob();
      message.success('Video processed successfully. Report will be downloaded.');

      // Automatically download the report
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.pdf'); // Modify the file name as necessary
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error uploading video:', error);
      message.error('Failed to process the video');
    }
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
          {videoFile ? (
            <video controls width={"100%"} height={"300"}>
              <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Dragger className="dragger" {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag video to this area to upload
              </p>
            </Dragger>
          )}
          <Button
            type="primary"
            onClick={handleUpload}
            disabled={!videoFile}
            className="upload-button"
          >
            Upload and Analyze
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;

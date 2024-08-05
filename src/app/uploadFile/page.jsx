"use client";
import axios from "axios";
import React from "react";

const uploadFile = () => {
  const uploadToCloud = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "msd5007");
    fd.append("cloud_name", "dqxnkd8jq");

    axios
      .post('https://api.cloudinary.com/v1_1/dqxnkd8jq/image/upload', fd, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold">
        upload yourFile to cloud
      </h1>
      <input type="file" accept="image/*" onChange={uploadToCloud} />
    </div>
  );
};

export default uploadFile;

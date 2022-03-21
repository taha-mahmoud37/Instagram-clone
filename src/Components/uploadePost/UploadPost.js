import React, { useState } from "react";
import "./upload.css";
import { storage, db } from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function UploadPost() {
  const [caption, setCaption] = useState("");
  const [username, setUsername] = useState("");
  const [progress, setProgress] = useState(0);
  const [img, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleUpload = () => {
    const storageRef = ref(storage, `/public/images/${img.name}`);
    const uploadTask = uploadBytesResumable(storageRef, img);
    console.log(img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        
        setProgress(prog);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          addDoc(collection(db, "posts"), {
            timestamp: serverTimestamp(),
            caption: caption,
            imgUrl: url,
            username: username,
          });
          setCaption("");
          setProgress(0);
          setUsername("");
          setImage(null);
          navigate("/posts");
        });
      }
    );
  };

  return (
    <div
      className="img-upload py-5 container-fluid"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <input
        className="form-control mb-3"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter useranme..."
      />
      <textarea
        rows={3}
        cols={20}
        className="form-control mb-3"
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
      >
        {" "}
      </textarea>
      <input
        className="form-control mb-3"
        type="file"
        onChange={handleChange}
      />
      <h3 className="text-center">upload {progress} %</h3>
      <button onClick={handleUpload} className="upload">
        Upload
      </button>
    </div>
  );
}

export default UploadPost;

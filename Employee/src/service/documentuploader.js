import React, { useEffect, useRef, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Avatar } from "@mui/material";
import { liveApi } from "./Config_Shift_service";

const DocumentUploader = ({ title, onVideoUploaded }) => {
  const fileChoose1 = useRef(null);
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("init");
  const [fileError, setFileError] = useState(false);
  const [message, setMessage] = useState("");
  const api = liveApi();

  const [success, setSuccess] = useState(false);
  const useStyles = makeStyles((theme) =>
    createStyles({
      fabProgress: {
        color: green[500],
        position: "absolute",
        width: "35px",
        height: "35px",
        top: "-10px",
        left: "0",
        right: "0",
        margin: "0 auto",
        zIndex: 1,
      },
    })
  );
  const classes = useStyles();

  const validateImageFile = (file) => {
    const fileExtension = file.name.split(".").pop().toLowerCase();
    const acceptedFormats = ["png", "jpg", "jpeg"];

    if (!acceptedFormats.includes(fileExtension)) {
      setLoading(false);
      setFileError(true);
      setMessage(
        "File format not accepted. Please upload .png, .jpg, or .jpeg file."
      );
      return false;
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = function (e) {
        if (e.target.readyState === FileReader.DONE) {
          const arr = new Uint8Array(e.target.result).subarray(0, 4);
          const header = Array.from(arr)
            .map((byte) => byte.toString(16))
            .join("")
            .toUpperCase();

          const isValidImage =
            header.startsWith("89504E47") || // PNG
            header.startsWith("FFD8") || // JPEG
            header.startsWith("47494638"); // GIF (optional if needed)

          if (!isValidImage) {
            setLoading(false);
            setFileError(true);
            setMessage(
              "Uploaded file is not a valid image. Please upload a valid PNG or JPEG file."
            );
            reject(false);
          } else {
            resolve(true);
          }
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const onFileChoose = async () => {
    setLoading(true);
    setStage("uploading");

    if (fileChoose1.current?.files && fileChoose1.current.files[0]) {
      const file = fileChoose1.current.files[0];

      try {
        const isValidFile = await validateImageFile(file);

        if (isValidFile) {
          let data = await uploadImage(file);
          if (data !== null && data.media_id) {
            onVideoUploaded({
              media_id: data.media_id,
              media_key: data.media_key,
            });

            setStage("uploaded");
            setLoading(false);
            setFileError(false);
          }
        }
      } catch (err) {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setFileError(true);
      setMessage("No file selected. Please choose an image.");
    }
  };

  const uploadImage = async (file) => {
    return new Promise(async (resolve, reject) => {
      api
        .post("/doc_upload/", {
          content_type: file.type,
        })
        .then((res) => {
          const formData = new FormData();
          Object.keys(res.data.data.fields).forEach((key) => {
            formData.append(key, res.data.data.fields[key]);
          });
          formData.append("file", file);

          const xhr = new XMLHttpRequest();
          xhr.open("POST", res.data.data.url + "/", true);
          xhr.onload = function () {
            if (this.status === 204) {
              setSuccess(true);
              resolve(res.data);
            } else {
              reject(null);
            }
          };
          xhr.send(formData);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return (
    <>
      <div className="docu_uploader" style={{ marginLeft: "25px" }}>
        <div>
          <Button
            disabled={loading}
            style={{ textTransform: "capitalize" }}
            onClick={() => fileChoose1.current?.click()}
            className="iIHpkQ"
            variant="contained"
            color="primary"
            component="span"
          >
            {loading ? (
              <CircularProgress size={24} className={classes.fabProgress} />
            ) : (
              "Upload"
            )}
          </Button>
        </div>
      </div>

      {fileError && <p className="error-message">{message}</p>}

      <input
        type="file"
        ref={fileChoose1}
        onChange={onFileChoose}
        accept=".png,.jpg,.jpeg"
        style={{ display: "none" }}
      />
    </>
  );
};

export default DocumentUploader;

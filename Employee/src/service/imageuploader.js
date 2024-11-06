import React, { useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { getApi, liveApi } from "./Config_Shift_service";
import { IconButton, Button } from "@material-ui/core";

import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";

export const defaultS3Data = {
  media_id: "",
  media_key: "",
};
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  margin_2: {
    margin: theme.spacing(0),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 330,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

export default function ImportCSV({ title, onVideoUploaded }) {
  const fileChoose1 = useRef(null);
  const api = liveApi();
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("init");
  const [media_id, setMediaId] = useState("");
  const [media_key, setMediaKey] = useState("");
  const [s3_url, setS3Url] = useState("");
  const [reset, setReset] = useState(false);
  const [file_error, setError] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();
  const [csv_file, setCSV] = useState(defaultS3Data);
  const [success, setSuccess] = React.useState(false);
  const onFileChoose = async () => {
    setProgress(0);
    setLoading(true);
    setStage("uploading");
    setSuccess(false);
    if (fileChoose1.current?.files) {
      console.log("upload file data hehehe");
      console.log(fileChoose1.current?.files[0].type);
      const tt = fileChoose1.current?.files[0].type;

      switch (tt) {
        case "image/png":
        case "image/jpeg":
        case "image/jpg":
          try {
            let data = await uploadImage(fileChoose1.current?.files[0]);
            if (data !== null && data.media_id) {
              onVideoUploaded({
                media_id: data.media_id,
                media_key: data.media_key,
              });
              setS3Url(data.s3_url + data.media_key);
              setMediaId(data.media_id);
              setMediaKey(data.media_key);
              setStage("uploaded");
              setLoading(false);
              setSuccess(true);
            }
          } catch (err) {
            console.log(err);
            setLoading(false);
            setSuccess(false);
          }

          break;
        default:
          if (stage !== "uploaded") {
            setStage("init");
          }
          setError(true);
          setTimeout(() => setError(false), 5000);
          return;
      }
    }
  };

  const uploadImage = async (file) => {
    let api = await liveApi();
    return new Promise(async (resolve, reject) => {
      api
        .post("/events/admin/eventUploadData", {
          content_type: file.type,
          uuid: localStorage.getItem("uuid"),
        })
        .then((res) => {
          console.log("upload======>", JSON.stringify(res));
          const formData = new FormData();
          Object.keys(res.data.data.fields).forEach((key) => {
            formData.append(key, res.data.data.fields[key]);
          });
          formData.append("file", file);
          const xhr = new XMLHttpRequest();
          xhr.open("POST", res.data.data.url, true);
          xhr.onload = function () {
            console.log(this.status);
            if (this.status === 204) {
              console.log("upload success", res.data.data.media_key);
              resolve(res.data);
            } else {
              console.log("upload failed");
              reject(null);
            }
          };
          xhr.upload.onprogress = function (evt) {
            setProgress(Math.round((evt.loaded / evt.total) * 100));
          };
          // xhr.setRequestHeader('Content-type', 'multipart/form-data');
          xhr.send(formData);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  return (
    <div>
      <div className="in" style={{ marginTop: 10 }}>
        <label htmlFor="contained-button-file">
          <Button
            onClick={() => fileChoose1.current?.click()}
            className="iIHpkQ"
            variant="contained"
            color="primary"
            component="span"
          >
            Attach
          </Button>
        </label>

        {file_error && (
          <p className="errr">
            {" "}
            Invalid file format. Only “.png, .jpeg,.jpg” formats allowed.
          </p>
        )}

        <div style={{ textAlign: "center" }}>
          <IconButton
            onClick={() => fileChoose1.current?.click()}
            color="primary"
            aria-label="add to shopping cart"
          >
            {stage === "uploaded" ? <CheckIcon color="green" /> : ""}
          </IconButton>
          {loading && (
            <CircularProgress size={35} className={classes.fabProgress} />
          )}
        </div>
        <div style={{ visibility: "hidden" }}>
          <input
            accept=".png,image/jpeg,image/png,.jpeg,.jpg"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            autocomplete="off"
          />
        </div>

        {stage === "uploaded" && (
          <div style={{ textAlign: "center" }}>
            <label color="danger">Document Uploaded</label>
          </div>
        )}
      </div>
    </div>
  );
}

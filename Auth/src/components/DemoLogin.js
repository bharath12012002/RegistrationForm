import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DemoLogin({ open, handleClose, handleSubmit, data }) {
  //

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent>
          <table>
            {!data || data.length < 1 ? (
              <i style={{ display: "flex", justifyContent: "center" }}>
                There is no demo login for you
              </i>
            ) : (
              data.map((row, i) => (
                <tr
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleSubmit(row.login_id);
                  }}
                >
                  <td>
                    <b
                      style={{ color: "#00308F" }}
                    >{`${row.username}(${row.user_role})`}</b>
                  </td>
                  <td>
                    <i>{row.description ? `- ${row.description}` : ""}</i>
                  </td>
                </tr>
              ))
            )}
          </table>
        </DialogContent>
      </Dialog>
    </>
  );
}

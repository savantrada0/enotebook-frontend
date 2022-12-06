import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title ">{note.title}</h5>
            <i
              className="bi bi-pencil-square mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <i
              className="bi bi-trash3 "
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Note Deleted Successfully", "success");
              }}
            ></i>
          </div>

          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;

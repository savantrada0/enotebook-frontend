import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note Added Successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            name="title"
            required
            minLength={5}
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="description"
            name="description"
            required
            minLength={5}
            value={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            required
            minLength={5}
            value={note.tag}
          />
        </div>
        <button
          type="submit"
          disabled={note.title.length < 5 || note.description.length < 5}
          className="btn btn-primary"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;

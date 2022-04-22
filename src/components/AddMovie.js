import React, { useState } from "react";
import Modal from 'react-modal';
import "./addMovie.css";

Modal.setAppElement("#root");
const AddMovie = ({ addNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const openModal = () => {setIsOpen(true);};
  const closeModal = () => {setIsOpen(false);};
  const handleSubmit = () => {
    let newMovie = {
      name,
      description,
      date,
      type,
      image
    };
    addNewMovie(newMovie);
    setName("");
    setdescription("");
    setDate("");
    setType("");
    setImage("");
  };
  return (
    <div>
      <div className="Add-btn-container">
        <div className="btn-play" onClick={openModal}>
          <span>
            {" "}
            <ion-icon className="icon" name="play"></ion-icon>{" "}
          </span>
          <button className="addmoviie">+ Add new movie +</button>
        </div>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>MOvie Release Date</label>
            <input
              type="number"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Image</label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label>Movie Type</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <label>Movie Summary</label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </form>
          <button onClick={handleSubmit} className="Modal-btn">
            submit
          </button>
          <button className="Modal-btn">close</button>
        </Modal>
      </div>
    </div>
  );
};
export default AddMovie;

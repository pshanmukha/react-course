import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
    console.log(props.color);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
    console.log(props.color);
  }
  return (
    <div className="card">
      <h2>TITLE {props.color}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler} /> : null}
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;

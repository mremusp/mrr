import ReactDOM from "react-dom";
import Button from "./Button";

function Modal({ handleClose }) {
    return ReactDOM.createPortal(
        <div>
            <div className="absolute inset-0 bg-gray-300 opacity-80" onClick={handleClose}></div>
            <div className="absolute inset-40 p-10 bg-white">Je suis un modal<Button onClick={handleClose} secondary className="float-right">Close modal</Button></div>

        </div>,

        document.getElementById("modal-container")
    );
}

export default Modal;
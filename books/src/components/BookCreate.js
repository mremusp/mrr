import { useState, useContext } from "react";
import BooksContext from '../context/books';

function BookCreate() {
    const [bookName, setBookName] = useState("");
    const { createBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setBookName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(bookName);
        setBookName("");
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" onChange={handleChange} value={bookName}></input>
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;
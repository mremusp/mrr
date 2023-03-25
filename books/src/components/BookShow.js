import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBooksContext();

    const handleDelete = () => {
        deleteBookById(book.id);
    };

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit === true) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return (
        <div className="book-show">
            <img alt="image" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEdit}>
                    edit
                </button>
                <button className="delete" onClick={handleDelete}>
                    delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
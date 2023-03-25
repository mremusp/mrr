import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter search term</label>
                <input onChange={handleChange} value={term} />
            </form>
        </div>
    );
}

export default SearchBar;
import React, {useState} from 'react';
import {Book} from '../models/book';

export default function BookInputs(props) {

const [bookName, setBookName] = useState('');
const [authorName, setAuthorName] = useState('');
const [ISBN, setISBN] = useState('');

function onFormSubmitted(event) {
    event.preventDefault();
    // Creating a new book
    const book = new Book( 
        (new Date()).getTime(), bookName, authorName, ISBN,
    );
    props.onBookCreated(book);
    setBookName('');
    setAuthorName('');
    setISBN('');

}


return (
    <div className='mt-4'>
        <form onSubmit = {onFormSubmitted}>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title</label>
                <input 
                    value={bookName}
                    onChange = {(e) => setBookName(e.target.value)}
                    type="text" 
                    className="form-control" 
                />
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Author</label>
                <input 
                    value={authorName}
                    type="text" 
                    className="form-control"
                    onChange = {(e) => setAuthorName(e.target.value)}  
                />
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">ISBN#</label>
                <input 
                    value={ISBN}
                    onChange = {(e) => setISBN(e.target.value)}  
                    type="text" 
                    className="form-control"  
                />
            </div>

                <div className="d-grid gap-2">
                    <button 
                        onClick={onFormSubmitted}
                        className="btn btn-primary" 
                        type="submit">
                    Submit</button>
                </div>
        </form>
    </div>
)
}

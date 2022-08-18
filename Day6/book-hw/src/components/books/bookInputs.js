import React, {useState} from 'react';
import {Book} from '../../models/book';
import Spinner from '../common/Spinner';

export default function BookInputs(props) {

const [bookName, setBookName] = useState('');
const [authorName, setAuthorName] = useState('');
const [ISBN, setISBN] = useState('');
const [saving, setSaving] = useState(false);

async function onFormSubmitted(event) {
    event.preventDefault();
    // Creating a new book
    const book = new Book( 
        null, bookName, authorName, ISBN, props.user.uid
    );

    setSaving(true);
    try {
        props.onBookCreated(book);
        setBookName('');
        setAuthorName('');
        setISBN('');
    } catch (err) {
        console.log(err);
    }
    setSaving(false);
     
    

}


return (
    <div className='mt-4'>
        <form onSubmit = {onFormSubmitted}>

            <div className="mb-3">
                <label  className="form-label">Title</label>
                <input 
                    value={bookName}
                    onChange = {(e) => setBookName(e.target.value)}
                    type="text" 
                    className="form-control" 
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Author</label>
                <input 
                    value={authorName}
                    type="text" 
                    className="form-control"
                    onChange = {(e) => setAuthorName(e.target.value)}  
                />
            </div>

            <div className="mb-3">
                <label className="form-label">ISBN#</label>
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
                            {
                                saving ?
                                <Spinner variant= "info"/>
                                :
                                "+"

                            }
                    </button>
                </div>
        </form>
    </div>
)
}

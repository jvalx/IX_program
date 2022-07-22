import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import BookInputs from './components/bookInputs';
import BookTable from './components/bookTable';

export default function App() {

  const [books, setBooks] = useState([]);
  
  function onBookCreated(book) {
    // console.log('onBookCreated',book);
    setBooks([...books,book]);
  }
  function toRemoveBook(book) {
      const filteredBooks = books.filter((t) => {
        return t.id !== book.id;
      });
      setBooks(filteredBooks);
  }

  return (
    <div className=' container mt-4'>
      <div className= 'card card-body text-center'>
        <h1>Add Book</h1>
        <BookInputs onBookCreated = {onBookCreated}> </BookInputs>
        <BookTable> books={books} toRemoveBook={toRemoveBook}</BookTable>
        
      </div>
    </div>
  )
}


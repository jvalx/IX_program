import React, {useState, useEffect} from 'react'
import BookInputs from './bookInputs';
import BookTable from './bookTable';
import bookService from '../../services/book.service';
import Spinner from '../common/Spinner';

export default function BookPage({user}) {
    useEffect( () => {
        fetchBooks();
    }, []);
  
    const [books, setBooks] = useState([]);
    const [fetching, setFetching] = useState(false);
    
    async function fetchBooks() {
        try {
          const books = await bookService.readBooks(user);
          setBooks(books);
        } catch (err) {
          console.log(err);
        }
    }
    async function onBookCreated(book) {
      
      try {
        
        book = await bookService.createBook(book);
        // console.log('onBookCreated',book);
        setBooks([...books,book]);
        
      } catch (err) {
        console.log(err);
      }
      
    }
    async function toRemoveBook(book) {
        try {
          await bookService.removeBook(book);
          const filteredBooks = books.filter((t) => {
            return t.id !== book.id;
          });
          setBooks(filteredBooks);
        } catch(err) {
          console.log(err);
        }
    }
  
    return (
      <div className=' container mt-4'>
        <div className= 'card card-body text-center'>
          <h1>Add Book</h1>
          <BookInputs onBookCreated = {onBookCreated} user={user}> </BookInputs>
          {
            
            fetching ?
            <div className = 'text-center mt-4'>
            <Spinner/>
            </div>
            : 
            <BookTable books={books} toRemoveBook={toRemoveBook}> </BookTable>
          }
          
        </div>

      </div>
    )
}

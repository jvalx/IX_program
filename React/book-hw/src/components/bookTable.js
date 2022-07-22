import React from 'react'

export default function BookTable(props) {

    function toRemoveBook(book) {
        props.toRemoveBook(book);
    }

    return (
        <div className='mt-4'>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    
                    </tr>
                </thead>
                <tbody>
                {
                    props.books.map((book) =>
                    <tr key={book.id}>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{book.ISBN}</td>
                        <button onClick={(e) => toRemoveBook(book)}  className='btn btn-primary btn-sm'>Remove Task</button>
                    </tr>
                )}

                </tbody>
            </table>
        </div>
    )
}

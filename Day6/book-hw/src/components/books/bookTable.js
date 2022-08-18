import React from 'react'

export default function BookTable(props) {

    function toRemoveBook(book) {
        props.toRemoveBook(book);
    }

    return (
        <div className='mt-4'>
            <table className="table ">
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
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.ISBN}</td>
                        <td>
                            <button onClick={(e) => toRemoveBook(book)}  className='btn btn-info btn-sm'>Remove Task</button>
                        </td>
                    </tr>
                )}

                </tbody>
            </table>
        </div>
    )
}

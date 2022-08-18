
import {
    collection, 
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    query, 
    getDocs, 
    where
} from 'firebase/firestore';

import {firestore} from "../firebase/firebase";
import {Book} from '../models/book';

class BookService {
    async createBook(book) {
        const collectionReference = collection(firestore, this.collection);
        const docRef = await addDoc(collectionReference, book.toJson());
        book.id = docRef.id;
        return book;
    }

    async readBooks(user) {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference, where('userID', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const books = [];
        querySnapshot.forEach((doc)=> {
            const book = Book.fromFirebase(doc);
            books.push(book);

        });
        return books;

    }
    // async updateBook(book) {
    //     const docRef = doc(firestore, 'tasks', book.id);
    //     await updateDoc(docRef, {
    //         title: book.title,
    //         author: book.author,
    //         ISBN: book.ISBN
    //     });
    //     return book;
    // }

    async removeBook(book) {
        const docRef = doc(firestore, 'tasks', book.id);
        await deleteDoc(docRef);

    }
}
const service = new BookService();
export default service;
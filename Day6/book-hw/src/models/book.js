

export class Book {
    constructor(id, title, author, ISBN, userID) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.userId = userID;
    }
    toJson() {
        return {
          title: this.title,
          author: this.author,
          ISBN: this.ISBN,
          userID: this.userID
        };
      }
    
      static fromFirebase(docSnap) {
        const data = docSnap.data();
        return new Book({
          id: docSnap.id,
          title: data.title,
          author: data.author,
          ISBN: data.ISBN,
          userId: data.userId,
        })
      }
}



const library =
{

    libraryName : "Kaushtub library",

    books :
    [
        {
            title : "Atomic Habits",
            author : "James Clear",
            isAvailable : true
        }, 
        {
            title : "The Alchemist", author : "Paulo Coelho", 
            isAvailable : true
        },
        {
            title : "Deep work", 
            author : "Cal Newport", 
            isAvailable : true
        }
    ],


    borrowBook(title)
    {
        const book = this.books.find(book => book.title === title);

        if(!book)
        {
            console.log("Book not found")
            return
        }

        if(!book.isAvailable)
        {
            console.log("Book is already borrowed")
            return
        }

        book.isAvailable = false;
        console.log(`${title} has been borrowed`)
    },


    returnBook(title)
    {
        const book = this.books.find(book => book.title === title)

        if(!book)
        {
            console.log("Book not found")
            return 
        }

        if(book.isAvailable)
        {
            console.log("book was not borrowed")
            return
        }

        book.isAvailable = true;
        console.log(`${title} has been returned.`)
    }

}

library.borrowBook("Atomic Habits")

library.borrowBook("Atomic Habits")

library.returnBook("Atomic Habits")

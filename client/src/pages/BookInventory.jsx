import React from 'react'
import { useState, useEffect } from 'react';
import { fetchBooks } from '../services/bookService';
import BookItem from '../components/BookItem';
export default function BookInventory() {
    const [groupedBooks, setGroupedBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetchBooks();
        console.log(response)
        const grouped = groupBooksByBookId(response);
        setGroupedBooks(grouped);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllBooks();

  }, []);

  const groupBooksByBookId = (books) => {
    const bookMap = {};
    books.forEach(book => {
      if (book.bookid) {
        if (!bookMap[book.bookid]) {
          bookMap[book.bookid] = { 
            ...book,
            availableCount: 0  // Initialize available count
          };
        }
        if (book.available) {
          bookMap[book.bookid].availableCount += 1;
        }
      }
    });
    return Object.values(bookMap);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Books Inventory</h1>
      {groupedBooks.map(book => (
        <BookItem key={book.bookid} book={book}/>
      ))}
    </div>
  )
}

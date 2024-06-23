import React from "react";

export default function BookItem({book}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h5 className="text-lg font-semibold">{book.title}</h5>
      <p className="text-gray-700">Author: {book.author}</p>
      <p className="text-gray-600">Genre: {book.genre}</p>
      <p className="text-gray-600">Level: {book.level}</p>
      <p className="text-gray-600">Quantity: {book.availableCount}</p>
      <p
        className={`text-sm ${
          book.available ? "text-green-500" : "text-red-500"
        }`}
      >
        {book.available ? "Available" : "Unavailable"}
      </p>
    </div>
  );
}

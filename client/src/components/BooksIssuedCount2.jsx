import React from 'react';

const BooksIssuedCount2 = ({ bookIds }) => {
  return (
    <div className="w-[20%] bg-green-500 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">Books Issued</h2>
              <p className="text-2xl">{bookIds.length}</p>
            </div>
  );
};

export default BooksIssuedCount2;
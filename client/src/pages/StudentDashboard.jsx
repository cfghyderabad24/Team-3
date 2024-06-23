import React from "react";
import { useState, useEffect } from "react";
import { fetchAllTransactions } from "../services/transactionService";
import BooksIssuedCount from "../components/BooksIssuedCount";
import BooksIssuedCount2 from "../components/BooksIssuedCount2";
import ReadingLevelProgress from "../components/ReadingLevelProgress";
import { fetchBooks } from "../services/bookService";
import BookLevelBarGraph from "../components/BookLevelBarGraph";
import GenreAnalysis from "../components/GenreAnalysis";
export default function StudentDashboard() {
  const [transactionData, setTransactionData] = useState([]);
  const [allBookIds, setAllBookIds] = useState([]);
  const [currIssued, setCurrIssued] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [level, setLevel] = useState([]);
  const [counts, setCounts] = useState(0);
  const [avg, setAvg] = useState(0);

  let url = window.location.href;
  // console.log(url.split('/').pop());
  let stid = url.split("/").pop().toString();
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchAllTransactions(stid);
        console.log("All trans ", response);

        let bookids1 = [];
        response.forEach((transaction) => {
          bookids1.push(
            transaction.studentId._id === stid ? transaction.bookId._id : null
          );
        });
        setAllBookIds(bookids1);

        const bookDataSet = await fetchBooks();
        setAllBooks(bookDataSet);
        // console.log(bookids1);

        // setTransactionData(transactions_); //this is transaction data for particular student;
        // console.log('Filtered by stu id',transactionData); //filtered transactions by id

        //  from transactions get the bookids of the books that have checked out date as null (not returned yet)
        let bookids2 = [];
        allBookIds.forEach((transaction) => {
          if (transaction.checkOutDate == null) {
            bookids2.push(transaction.bookId);
          }
          //  console.log(allBookIds);
          setCurrIssued(bookids2);

          let levels = [];
          allBookIds.forEach((bookid) => {
            //finding the level of the books that have been returned
            let level = allBooks.find((x) => x._id === bookid).level;
            levels.push(level);
          });

          setLevel(levels);
          console.log(level);

          //count the number of books at each level
          let count = []; //counting the number of books at each level
          for (let i = 0; i < 6; i++) {
            count.push({ name: i, count: 0 });
          }
          level.forEach((level_) => {
            count[level_].count++;
          });
          setCounts(count);
          console.log("counts is", counts);
          count.shift();

          ///
          let sum = 0;
          let total = 0;
          level.forEach((level) => {
            sum += level;
            total++;
          });
          let avg = sum / total;
          setAvg(avg);
        });
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  return (
    // <div>
    //   <div className="flex justify-between gap-10">
    //     <BooksIssuedCount bookIds={allBookIds} />
    //     <BooksIssuedCount2 bookIds={currIssued} />
    //   </div>
    //   <div>
    //     <BookLevelBarGraph data={count} />
    //   </div>
    //   <div>
    //     <ReadingLevelProgress />
    //   </div>
    //   <div>
    //     <GenreAnalysis />
    //   </div>
    //   <div>
    //   <a
    //     href="#"
    //     className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-default"
    //   >
    //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //       The average level of books read by the student
    //     </h5>
    //     <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">
    //       {avg}
    //     </p>
    //   </a>
    //   </div>
    // </div>
    <div className="container mx-auto p-4">
      <h2 className="text-center text-3xl font-semibold my-5">Student Dashboard</h2>
      <div className="flex justify-center gap-10 mb-4">
        <BooksIssuedCount bookIds={allBookIds} title="Total Books Issued" />
        <BooksIssuedCount2 bookIds={currIssued} title="Currently Issued Books" />
      </div>
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-xl font-semibold mb-2">Reading Level Progress</h3>
        <ReadingLevelProgress/>
      </div>
      <div className="flex flex-col items-center mb-4">
      <h3 className="text-xl font-semibold mb-2">Number of Books for each Level read by the student</h3>
        <BookLevelBarGraph data={counts} />
      </div>

      <div className="flex flex-col items-center mb-[-100px]">
        <h3 className="text-xl font-semibold mb-2">Genre Analysis</h3>
        <GenreAnalysis />
      </div>
      <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h5 className="text-2xl font-bold mb-2">Average Reading Level</h5>
        <p className="text-xl">{avg}</p>
      </div>
    </div>
  );
}

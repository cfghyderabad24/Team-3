import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell, Text } from "recharts";
import { fetchBooks } from "../services/bookService";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const sampleBookData = [
  {name: 'Childrens Adventure', value: 1},
  {name: 'Childrens Mystery', value: 1}
];


export default function GenreAnalysis({data}) {

  const groupBooksByGenre = (books) => {
    const counts = books.reduce((acc, book) => {
        acc[book.genre] = acc[book.genre] ? acc[book.genre] + 1 : 1;
        return acc;
    }, {});

    // Transform the counts object into an array suitable for charting
    return Object.keys(counts).map(genre => ({
        name: genre,
        value: counts[genre]
    }));
};

  const [genreData, setGenreData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
        const books = await fetchBooks();
        const groupedData = groupBooksByGenre(books);
        setGenreData(groupedData);
        console.log(groupedData);
    };

    loadData();
}, []);



  const [activeIndex, setActiveIndex] = useState(-1);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1);
  };

  return (
    <div style={{textAlign: 'center'}}>
    
    <PieChart width={1000} height={600} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={sampleBookData}
          cx={500}
          cy={200}
          outerRadius={160}
        //   innerRadius={110}
          label={({ name }) => name}
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        >
        {genreData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            style={{
              opacity: index === activeIndex ? 0.5 : 1
            }}
          />
        ))}

        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
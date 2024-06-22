import React from "react";
import BookLevelBarGraph from "../components/BookLevelBarGraph";
import GenreAnalysis from "../components/GenreAnalysis";
import ReadingLevelProgress from "../components/ReadingLevelProgress";

export default function StudentDashboard() {
  return (
    <div>
      <BookLevelBarGraph />
      {/* <GenreAnalysis /> */}
      <ReadingLevelProgress />
    </div>
  );
}

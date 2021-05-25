import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import { useSelector } from "react-redux";
import Book from "../components/Book/Book";

const ReadingList = () => {
  const selectedBooks = useSelector((state) => state.books.readingList);
  return (
    <PageLayout>
      {selectedBooks?.length ? (
        selectedBooks.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <p>
          Looks like you've finished all your books! Check them out in your{" "}
          <Link to="finish">finished books</Link> or{" "}
          <Link to="/">discover more</Link>.
        </p>
      )}
    </PageLayout>
  );
};

export default ReadingList;

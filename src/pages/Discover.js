import React from "react";
import Book from "../components/Book/Book";

import PageLayout from "../components/PageLayout/PageLayout";

import { useSelector } from "react-redux";

const Discover = () => {
  const allBooks = useSelector((state) => state.books.discoverList);

  return (
    <PageLayout>
      {allBooks?.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  );
};

export default Discover;

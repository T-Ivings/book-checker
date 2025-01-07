import { GoogleBooksAPI } from "google-books-js";

const googleBooksApi = new GoogleBooksAPI();

async function fetchBooks(): Promise<void> {
  const books = await googleBooksApi.search({
    filters: {
      title: "Bartleby",
    },
  });

  console.log(books);
}

fetchBooks();
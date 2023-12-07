import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedBooks = useLoaderData();
  const [books, setBooks] = useState(loadedBooks);
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast('Deleted Successfully')
          const remaining = books.filter((book) => book._id !== id);
          setBooks(remaining);
        }
      });
  };

  return (
    <div className="ml-8 col-span-10">
      <h2 className="text-2xl font-bold">All Books</h2>
      <div className="mt-4">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="text-lg">Book Name</th>
                <th className="text-lg">Author</th>
                <th className="text-lg">Genre</th>
                <th className="text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr className="text-md hover" key={book._id}>
                  <td>{book.bookName}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>
                    <Link to={`/update/${book._id}`}>
                      <button
                        className="btn bg-base-200 hover:bg-base-300 p-2 rounded mr-3"
                      >
                        Update
                      </button>
                      <Toaster />
                    </Link>
                    <button
                      className="btn btn-primary p-2 rounded"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

import toast, { Toaster } from "react-hot-toast";
import { Navigate, useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedBook = useLoaderData();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookName = form.bookName.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const updatedBook = {
      bookName,
      author,
      genre,
    };
    fetch(`http://localhost:3000/books/${loadedBook?._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
    .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount>0) {
            toast('Update Successful')
            Navigate('/')
        }
      });
  };
  return (
    <div className="ml-8 col-span-10">
      <h2 className="text-2xl font-bold">Update Book Information</h2>
      <div className="hero bg-base-200 mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Toaster/>
          <form onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-lg">Book Name</span>
              </div>
              <input
                type="text"
                placeholder="Enter a book name"
                name="bookName"
                defaultValue={loadedBook?.bookName}
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-lg">Author</span>
              </div>
              <input
                type="text"
                placeholder="Enter author"
                name="author"
                defaultValue={loadedBook?.author}
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-lg">Genre</span>
              </div>
              <input
                type="text"
                placeholder="Enter genre"
                name="genre"
                defaultValue={loadedBook?.genre}
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <label className="form-control w-full max-w-xs mt-6 bg-base-200">
              <input
                type="submit"
                value="Add A Book"
                className="input input-bordered w-full max-w-xs cursor-pointer hover:bg-base-300"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;

import toast, { Toaster } from "react-hot-toast";

const AddBook = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookName = form.bookName.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const book = {
      bookName,
      author,
      genre,
    }
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId) {
            toast('Book has been created successfully')
        }
    })
    form.reset()
};

  return (
    <div className="ml-8 col-span-10">
      <h2 className="text-2xl font-bold">Add A New Book</h2>
    <div className="card w-96 bg-base-200 shadow-xl mx-auto p-8 mt-8 rounded-3xl">
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
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <label className="form-control w-full max-w-xs mt-6 bg-base-200">
              <input
                type="submit"
                value="Add A Book"
                className="input input-bordered w-full max-w-xs cursor-pointer btn btn-primary"
              />
            </label>
          </form>
        </div>
    </div>
  );
};

export default AddBook;

import uploadImage from "../Utils/uploadImage";

export default function Admin() {
  uploadImage("dropzone-file");

  return (
    <section className="container m-auto min-h-screen pt-10">
      <div className="text-4xl my-8 pb-2 text-center border-2 border-t-0 border-r-0 border-l-0 border-b-black border-dashed">
        Article Upload
      </div>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-white-900"
            >
              Title
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg block w-full  p-2.5 white"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-white-900"
            >
              Short Description
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg block w-full  p-2.5 white"
              placeholder="Doe"
              required
            />
          </div>

          <section className="col-span-2">
            <label
              htmlFor="articleSection"
              className="block mb-2 text-sm font-medium"
            >
              Full Description
            </label>
            <textarea
              id="articleSection"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Write your article`s Section"
            />
          </section>
          <section className="col-span-2">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </section>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

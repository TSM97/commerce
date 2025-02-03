import getPaginationRange from "../utils/getPaginationRange";
import useScreenSize from "../../../hooks/useScreenSize";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) {
  const { isTablet } = useScreenSize();
  const handlePrev = () => {
    if (currentPage > 1) {
      if (isTablet) document.getElementById("News")?.scrollIntoView();
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      if (isTablet) document.getElementById("News")?.scrollIntoView();
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (isTablet) document.getElementById("News")?.scrollIntoView();
    setCurrentPage(page);
  };

  return (
    <div>
      <>
        <div className="container mx-auto px-4">
          <nav
            className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
            aria-label="Pagination"
          >
            <button
              className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
              onClick={() => {
                handlePrev();
              }}
              disabled={currentPage === 1}
              title="Previous Page"
            >
              <span className="sr-only">Prev</span>
              <svg
                className="block w-4 h-4 fill-current"
                viewBox="0 0 256 512"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
              </svg>
            </button>
            <span className="flex">
              {getPaginationRange(currentPage, totalPages).map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    className={`flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 ${
                      currentPage === page
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }  hover:border-gray-300`}
                    title={`page ${currentPage}`}
                    key={page}
                    onClick={() => handlePageClick(page as number)}
                    disabled={currentPage === page}
                  >
                    {page}
                  </button>
                )
              )}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
              title="Next Page"
            >
              <span className="sr-only">Next Page</span>
              <svg
                className="block w-4 h-4 fill-current"
                viewBox="0 0 256 512"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
              </svg>
            </button>
          </nav>
        </div>
      </>
    </div>
  );
}

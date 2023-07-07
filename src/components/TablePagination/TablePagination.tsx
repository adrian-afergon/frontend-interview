interface Props {
  currentPage: number;
  totalPages: number;
  onPage: (page: number) => void;
}

export const TablePagination = ({ currentPage, totalPages, onPage }: Props) => {
  const handleClick = (page: number) => {
    if (currentPage !== page && page <= totalPages) onPage(page);
  };

  return (
    <div className="text-span border-blue-dark-100 text-blue-dark-700 mt-10 flex justify-between border-t">
      <button
        onClick={() => handleClick(currentPage - 1)}
        className="disabled:cursor-not-allowed flex cursor-pointer items-center gap-3 p-4"
        disabled={currentPage === 1}
      >
        <span>Previous</span>
      </button>
      <div className="flex">
        {Array.from({ length: totalPages })
          .map((_, index) => index + 1)
          .map((page) => (
            <div
              onClick={() => handleClick(page)}
              data-active={currentPage === page}
              className="is-active:cursor-default is-active:border-t-blue-900 is-active:text-blue-900 -mt-px cursor-pointer border-t-2 border-t-transparent p-4"
              key={"table-pagination-" + page}
            >
              {page}
            </div>
          ))}
      </div>
      <button
        onClick={() => handleClick(currentPage + 1)}
        className="is-not-active:cursor-not-allowed flex cursor-pointer items-center gap-3 p-4"
        data-active={currentPage !== totalPages}
      >
        <span>Next</span>
      </button>
    </div>
  );
};

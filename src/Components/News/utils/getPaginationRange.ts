const getPaginationRange = (currentPage: number, totalPages: number) => {
  const range = 1;
  const rangeWithDots: (number | string)[] = [];

  let leftIndex = currentPage - range;
  let rightIndex = currentPage + range;

  if (leftIndex < 1) {
    leftIndex = 1;
    rightIndex = Math.min(2 * range + 1, totalPages);
  }

  if (rightIndex > totalPages) {
    leftIndex = Math.max(totalPages - 2 * range, 1);
    rightIndex = totalPages;
  }

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= leftIndex && i <= rightIndex)) {
      rangeWithDots.push(i);
    } else if (i === leftIndex - 1 || i === rightIndex + 1) {
      rangeWithDots.push("...");
    }
  }

  return rangeWithDots;
};

export default getPaginationRange;

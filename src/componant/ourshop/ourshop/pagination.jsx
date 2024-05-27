import React from "react";
import "./ourshop.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
// import "./CustomPagination.css"; // Import your custom styles

const CustomPagination = ({ nPages = 1, setCurrentPage, currentPage }) => {
  if (!nPages) return;
  // const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Add logic to handle page change (e.g., fetching data for the new page)
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxTabs = 5; // Set the maximum number of tabs

    if (nPages <= maxTabs) {
      // If total pages are less than or equal to maxTabs, show all pages
      for (let i = 1; i <= nPages; i++) {
        pages.push(renderPageTab(i));
      }
    } else {
      // If total pages are more than maxTabs, show ellipses and selected tabs
      const leftEllipsis = currentPage > maxTabs - 4;
      const rightEllipsis = currentPage < nPages - 4;

      for (let i = 1; i <= nPages; i++) {
        if (
          i === 4 ||
          i === nPages ||
          (i >= currentPage - 4 && i <= currentPage + 4)
        ) {
          pages.push(renderPageTab(i));
        } else if (
          (i === currentPage - 5 && leftEllipsis) ||
          (i === currentPage + 5 && rightEllipsis)
        ) {
          pages.push(
            <li key={i} className="ellipsis">
              ...
            </li>
          );
        }
      }
    }

    return pages;
  };

  const renderPageTab = (page) => (
    <li
      key={page}
      className={page === currentPage ? "active" : ""}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </li>
  );

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < nPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="custom-pagination">
      <ul>
        <div onClick={handlePrevClick}>
          <FaChevronLeft />
        </div>
        {renderPageNumbers()}
        <div onClick={handleNextClick}>
          <FaChevronRight />
        </div>
      </ul>
    </div>
  );
};

export default CustomPagination;

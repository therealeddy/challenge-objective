import React from 'react';
import { MdPlayArrow } from 'react-icons/md';
import { Container, ButtonPage } from './styles';

const Pagination = ({ currentPage, totalPosts, postsPerPage, setPaged }) => {
  const pageNumbers = [];

  let cont = 0;
  let paged = 0;
  const totalPages = totalPosts / postsPerPage;

  if (currentPage === 1) {
    paged = currentPage;
  } else if (currentPage === 2) {
    paged = 1;
  } else {
    paged = currentPage - 2;
  }

  for (let i = paged; i <= totalPages; i++) {
    if (cont < 5) {
      pageNumbers.push(i);
    }

    cont++;
  }

  return (
    <Container
      prevDesable={currentPage === 1}
      nextDesable={currentPage === totalPages}
    >
      <button
        type="button"
        className="prev"
        disabled={currentPage === 1}
        onClick={() => setPaged(currentPage - 1)}
      >
        <MdPlayArrow color="#d42026" size={30} />
      </button>
      <div className="pages">
        {pageNumbers.map(number => (
          <ButtonPage
            key={String(number)}
            type="button"
            onClick={() => setPaged(number)}
            active={currentPage === number}
          >
            {number}
          </ButtonPage>
        ))}
      </div>
      <button
        type="button"
        className="next"
        onClick={() => setPaged(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdPlayArrow color="#d42026" size={30} />
      </button>
    </Container>
  );
};

export default Pagination;

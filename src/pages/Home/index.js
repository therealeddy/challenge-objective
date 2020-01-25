import React from 'react';

import { Link } from 'react-router-dom';
import { MdPlayArrow } from 'react-icons/md';
import { Container } from './styles';

import { avatar } from '~/images';

export default function Home() {
  const pages = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
  ];

  return (
    <Container>
      <form>
        <label htmlFor="search">Nome do Personagem</label>
        <input type="text" id="search" />
      </form>
      <div className="table">
        <div className="thead">
          <span>Personagem</span>
          <span>Descricao</span>
        </div>
        <div className="tbody">
          <div className="row">
            <span>
              <img src={avatar} alt="avatar" className="avatar" />
              <Link to="/profile">Tony Stark</Link>
            </span>
            <span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="area-pagination">
        <div className="pagination">
          <button type="button" className="prev">
            <MdPlayArrow color="#d42026" size={30} />
          </button>
          <div className="pages">
            {pages.map((item, index) => (
              <button key={String(index)} type="button" className="paged">
                {item.number}
              </button>
            ))}
          </div>
          <button type="button" className="next">
            <MdPlayArrow color="#d42026" size={30} />
          </button>
        </div>
      </div>
    </Container>
  );
}

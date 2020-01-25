import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Pagination } from '~/components';

import api from '~/services/api';
import { formatTrim } from '~/utils/formatTrim';

export default function Home() {
  const [postsPerPage] = useState(10);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/characters');

      const { data } = response.data;
      const { count } = response.data.meta;

      const dataDraft = data.map(item => ({
        id: item.id,
        name: item.attributes.name,
        description: formatTrim(item.attributes.description, 300),
        avatar: item.attributes.image.original,
      }));

      setCharacters(dataDraft);
      setTotalPosts(count);
    }

    getData();
  }, []);

  async function onClickPage(number) {
    setCurrentPage(number);

    let offset = number - 1;

    if (!(offset === 0)) {
      offset *= 10;
    }

    const response = await api.get('/characters', {
      params: {
        'page[offset]': offset,
      },
    });

    const { data } = response.data;

    const dataDraft = data.map(item => ({
      id: item.id,
      name: item.attributes.name,
      description: formatTrim(item.attributes.description, 300),
      avatar: item.attributes.image.original,
    }));

    setCharacters(dataDraft);
  }

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
          {characters.map(character => (
            <div className="row" key={String(character.id)}>
              <span>
                <img src={character.avatar} alt="avatar" className="avatar" />
                <Link to="/profile">{character.name}</Link>
              </span>
              <span>
                <p>{character.description}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="area-pagination">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          setPaged={onClickPage}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
}

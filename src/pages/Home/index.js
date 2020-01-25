import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { Pagination, Table, Loading, Search } from '~/components';

import api from '~/services/api';
import { formatTrim } from '~/utils/formatTrim';

export default function Home() {
  const [postsPerPage] = useState(10);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(null);

  const [characters, setCharacters] = useState([]);

  const [loading, setLoading] = useState(true);

  const dataDraft = data => {
    return data.map(item => ({
      id: item.id,
      name: item.attributes.name,
      description: formatTrim(item.attributes.description, 300),
      avatar: item.attributes.image ? item.attributes.image.original : null,
    }));
  };

  const getCharacters = async () => {
    const response = await api.get('/characters');
    const { data } = response.data;
    const { count } = response.data.meta;
    const newData = dataDraft(data);

    setCurrentPage(1);
    setCharacters(newData);
    setTotalPosts(count);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/characters');
      const { data } = response.data;
      const { count } = response.data.meta;
      const newData = dataDraft(data);

      setCharacters(newData);
      setTotalPosts(count);
    };

    getData();
    setLoading(false);
  }, []);

  const onClickPage = async number => {
    setLoading(true);
    setCurrentPage(number);

    let offset = number - 1;

    if (!(offset === 0)) offset *= 10;

    let params = {
      'page[offset]': offset,
    };

    if (search) {
      params = {
        'page[offset]': offset,
        'filter[name]': search,
      };
    }

    const response = await api.get('/characters', {
      params,
    });

    const { data } = response.data;
    const newData = dataDraft(data);

    setCharacters(newData);
    setLoading(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);

    if (search !== '') {
      const response = await api.get('characters', {
        params: {
          'filter[name]': search,
        },
      });

      const { data } = response.data;
      const { count } = response.data.meta;

      const newData = dataDraft(data);

      setTotalPosts(count);
      setCurrentPage(1);
      setCharacters(newData);
    } else {
      getCharacters();
      setSearch(null);
    }

    setLoading(false);
  };

  return (
    <Container>
      <Search
        onSubmit={handleSubmit}
        onChangeInput={e => setSearch(e.target.value)}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Table characters={characters} />
          <div className="area-pagination">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={totalPosts}
              setPaged={onClickPage}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </Container>
  );
}

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from './styles';
import { Pagination, Table, Loading, Search } from '~/components';

import api from '~/services/api';
import { formatTrim } from '~/utils/formatTrim';

export default function Home() {
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
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
      setLoading(false);
    };

    getData();
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
    const newData = await dataDraft(data);

    setCharacters(newData);
    setLoading(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);

    if (search) {
      const response = await api.get('characters', {
        params: {
          'filter[name]': search,
        },
      });

      const { data } = response.data;
      if (data.length > 0) {
        const { count } = response.data.meta;

        const newData = await dataDraft(data);

        setTotalPosts(count);
        setCurrentPage(1);
        setCharacters(newData);
      } else {
        toast.error('Nenhum personagem com esse nome foi encontrado!');
        await getCharacters();
        setSearch('');
      }
    } else {
      await getCharacters();
      setSearch('');
    }

    setLoading(false);
  };

  return (
    <Container>
      <Search
        onSubmit={handleSubmit}
        valueInput={search}
        onChangeInput={e => setSearch(e.target.value)}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Table characters={characters} />
          <div className="area-pagination">
            <Pagination
              postsPerPage={10}
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

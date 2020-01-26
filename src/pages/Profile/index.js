import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Container } from './styles';
import history from '~/services/history';
import { Loading } from '~/components';
import api from '~/services/api';

export default function Profile({ match }) {
  const { id } = match.params;
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/characters/${id}`);

        const { attributes } = response.data.data;

        const dataDraft = {
          name: attributes.name,
          description: attributes.description,
          avatar: attributes.image ? attributes.image.original : null,
          otherNames: attributes.otherNames,
        };

        setCharacter(dataDraft);
        setLoading(false);
      } catch (e) {
        toast.error('Personagem nao encontrado!');
        history.push('/');
      }
    };

    getData();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <div
            className="avatar"
            style={{ backgroundImage: `url(${character.avatar})` }}
          />
          <h1>{character.name}</h1>
          {character.otherNames.length > 0 && (
            <>
              <h2>Outros Nomes</h2>
              {character.otherNames.map((name, index) => (
                <p key={String(index)}>{name}</p>
              ))}
            </>
          )}
          <br />
          {character.description && (
            <>
              <h2>Descricao</h2>
              <p>{character.description}</p>
            </>
          )}
        </Container>
      )}
    </>
  );
}

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

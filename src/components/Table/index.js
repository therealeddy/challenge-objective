import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Table({ characters }) {
  return (
    <Container>
      <div className="thead">
        <span>Personagem</span>
        <span>Descricao</span>
      </div>
      <div className="tbody">
        {characters.map(character => (
          <Link
            to={`/profile/${character.id}`}
            className="row"
            key={String(character.id)}
          >
            <span>
              <div
                className="avatar"
                style={{ backgroundImage: `url(${character.avatar})` }}
              />
              <p>{character.name}</p>
            </span>
            <span>
              <p>{character.description}</p>
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}

Table.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

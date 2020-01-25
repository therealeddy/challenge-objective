import React from 'react';

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
              <img src={character.avatar} alt="avatar" className="avatar" />
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

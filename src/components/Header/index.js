import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <div className="text">
          <strong>BUSCA Kitsu</strong> TESTE FRONT-END
        </div>
      </Link>
      <div className="text name">Eduardo Mauricio Fonseca</div>
    </Container>
  );
}

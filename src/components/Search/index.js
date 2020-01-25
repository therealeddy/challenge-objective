import React from 'react';

import { Form } from './styles';

export default function Search({ onSubmit, onChangeInput }) {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="search">Nome do Personagem</label>
      <input type="text" id="search" onChange={onChangeInput} />
    </Form>
  );
}

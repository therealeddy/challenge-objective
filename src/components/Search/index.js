import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './styles';

export default function Search({ onSubmit, onChangeInput, valueInput }) {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="search">Nome do Personagem</label>
      <input
        type="text"
        id="search"
        onChange={onChangeInput}
        value={valueInput}
      />
    </Form>
  );
}

Search.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  valueInput: PropTypes.string.isRequired,
};

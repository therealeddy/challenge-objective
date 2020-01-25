import React from 'react';
import { loadingImg } from '~/images';
import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <img src={loadingImg} alt="loading" />
    </Container>
  );
}

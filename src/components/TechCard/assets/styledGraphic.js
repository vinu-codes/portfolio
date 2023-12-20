import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  img {
    width: 100%;
  }
`;

const styledComponentLogo = () => {
  return (
    <Container>
      <img src={require('./styled.png')} />
    </Container>
  );
};

export default styledComponentLogo;

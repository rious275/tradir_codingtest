import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory();

  const pushBeerList = () => {
    history.push('/beerlist')
  }

  return (
    <HomeWrap>
      <BtnContainer onClick={pushBeerList}>
        <i class="fas fa-beer fa-6x"></i>
        <h2>맥주 리스트 보러가기</h2>
      </BtnContainer>
    </HomeWrap>
  )
}

export default Home

const HomeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const BtnContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-style: none;
  background-color: #fff;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: .5s;
  }

  p {
    font-size: 16px;
    font-weight: 800;
  }
`;
import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
`;

export const MenuToggle = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: ${({ toggle }) => (toggle ? '2rem' : '3rem')};
  color: ${({ toggle }) => (toggle ? 'crimson' : '#ffffff')};
  z-index: 999;
  cursor: pointer;
  transition: color 0.3s ease, font-size 0.3s ease;
`;

export const CityName = styled.h1`
  color: red;
  z-index: 999;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

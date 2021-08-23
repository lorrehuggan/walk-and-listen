import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const Wrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 30rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primaryColor};
  z-index: 1;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const Location = styled.div`
  width: 100%;

  border-radius: 12px;
  overflow: hidden;
`;

export const LocationHeaderContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.spaceCadet};
  height: 2rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  ${flex}
`;

export const LocationHeader = styled.p`
  font-size: 1rem;
  color: #ffffff;
`;

export const LocationCities = styled.div`
  height: 100%;
  width: 100;
  ${flex}
  flex-wrap: wrap;
`;

export const City = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0rem 0.5rem;
  margin-bottom: 1rem;
  padding: 0.25rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.spaceCadet};
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.heliotropeGray};
  }
`;

export const Controls = styled.div`
  width: 100%;
  height: 10rem;
  padding: 1rem;
  ${flex};
  border: 0.25px solid grey;
  border-radius: 8px;
`;

export const Icon = styled.div`
  cursor: pointer;

  ${flex}
`;

export const ButtonContainer = styled.div`
  width: 50%;
  ${flex}
  color: #ffffff;
  font-size: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Volume = styled.input``;

export const Audio = styled.audio``;

import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const Wrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  height: 30vh;
  width: 30rem;
  padding: 1rem;
  border-radius: 0px 0px 24px 24px;
  background-color: #000000b3;
  z-index: 1;
  transform: translateY(${({ toggle }) => (toggle ? '0' : '-98%')});
  transition: transform 0.5s ease;
`;

export const Heading = styled.h1`
  font-size: 2rem;
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
  border: 2px solid gray;
  height: 2rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  padding: 2rem;
  ${flex}
`;

export const LocationHeader = styled.p`
  font-size: 1.25rem;
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
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.spaceCadet};
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease-out;
  text-transform: uppercase;
  &:hover {
    background-color: ${({ theme }) => theme.heliotropeGray};
  }
  &:active {
    transform: scale(0.95);
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
  width: 45%;
  ${flex}
  color: #ffffff;
  font-size: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Volume = styled.input``;

export const Audio = styled.audio`
  width: 100%;
  height: 5rem;
`;

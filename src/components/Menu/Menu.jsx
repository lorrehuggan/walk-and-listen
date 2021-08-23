import React from 'react';
import { data } from '../../data/data';
import {
  BiRewindCircle,
  BiPlayCircle,
  BiFastForwardCircle,
} from 'react-icons/bi';
import {
  ButtonContainer,
  City,
  Icon,
  Controls,
  Heading,
  Location,
  LocationCities,
  LocationHeader,
  LocationHeaderContainer,
  Volume,
  Wrapper,
  Audio,
} from './Menu.styled';

function Menu() {
  console.log(data[0].music.day);
  return (
    <Wrapper>
      <Heading>Walk and Listen</Heading>
      <Location>
        <LocationHeaderContainer>
          <LocationHeader>
            Find a city to take a virtual stroll through
          </LocationHeader>
        </LocationHeaderContainer>
        <LocationCities direction="row" align="left" justify="center">
          {data.map((d) => {
            return <City>{d.city}</City>;
          })}
        </LocationCities>
      </Location>
      <Controls justify="left">
        <LocationHeader>Play</LocationHeader>
        <ButtonContainer direction="row" justify="space-between">
          <Icon>
            <BiRewindCircle />
          </Icon>
          <Icon>
            <BiPlayCircle />
          </Icon>
          <Icon>
            <BiFastForwardCircle />
          </Icon>
        </ButtonContainer>
        <Volume type="range" min="1" max="100" value="25" />
        <audio src={data[0].music.day} crossorigin autoplay></audio>
      </Controls>
    </Wrapper>
  );
}

export default Menu;

import React, { useState } from 'react';
import { data, music } from '../../data/data';

import { Howl, Howler } from 'howler';
import {
  BiRewindCircle,
  BiPlayCircle,
  BiFastForwardCircle,
  BiPauseCircle,
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

function Menu({ currentCity, toggle }) {
  const [play, setPlay] = useState(true);
  const [station, setStation] = useState(0);

  const radio = new Howl({
    src: [music[station]],
    html5: true,
    volume: 0.3,
  });
  const audioHandler = () => {
    if (play === true) {
      setPlay(false);
      radio.play();
    } else {
      setPlay(true);
      Howler.stop();
    }
  };

  return (
    <Wrapper toggle={toggle}>
      <Heading>City: {data[currentCity].city}</Heading>
      <Location>
        <LocationHeaderContainer>
          <LocationHeader>Find a city to take a virtual stroll</LocationHeader>
        </LocationHeaderContainer>
        <LocationCities direction="row" align="left" justify="center">
          {data.map((d) => {
            return <City key={d.city}>{d.city}</City>;
          })}
        </LocationCities>
      </Location>
      <Controls justify="left">
        <LocationHeader>Play</LocationHeader>
        <ButtonContainer direction="row" justify="space-between">
          <Icon>
            <BiRewindCircle />
          </Icon>
          <Icon onClick={audioHandler}>
            {play ? <BiPlayCircle /> : <BiPauseCircle />}
          </Icon>
          <Icon>
            <BiFastForwardCircle />
          </Icon>
        </ButtonContainer>
        <Volume type="range" min="1" max="100" value="25" />
        {/* <Audio src={data[currentCity].music.day} controller autoplay>
          hello
        </Audio> */}
      </Controls>
    </Wrapper>
  );
}

export default Menu;

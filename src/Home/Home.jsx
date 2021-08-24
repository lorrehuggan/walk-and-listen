import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import ReactYouTube from '../components/YouTube/YouTube';
import { CityName, Main, MenuToggle } from './Home.styled';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { data } from '../data/data';

function Home() {
  const [videoId, setVideoId] = useState('__Eo-dvEH7g');
  const [toggle, setToggle] = useState(true);
  const [city, setCity] = useState(0);
  const [audio, setAudio] = useState('');

  //set random number to select random city from data array
  useEffect(() => {
    setCity(Math.floor(Math.random() * (0 - data.length) + data.length));
  }, []);
  //set current video playing to random city useing number created above
  useEffect(() => {
    setVideoId(data[city].videos.night);
  }, [city]);
  useEffect(() => {
    setAudio(data[city].music.day);
  }, [city]);
  //menu visibility toggle
  const toggleHandler = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <Main>
      <MenuToggle onClick={toggleHandler} toggle={toggle}>
        {toggle ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </MenuToggle>
      <Menu toggle={toggle} currentCity={city} />
      <ReactYouTube videoId={videoId} />
    </Main>
  );
}

export default Home;

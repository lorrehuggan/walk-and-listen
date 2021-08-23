import React, { useState } from 'react';
import Menu from '../components/Menu/Menu';
import ReactYouTube from '../components/YouTube/YouTube';
import { Main } from './Home.styled';

function Home() {
  const [videoId, setVideoId] = useState('__Eo-dvEH7g');
  return (
    <Main>
      <Menu />
      <ReactYouTube videoId={videoId} />
    </Main>
  );
}

export default Home;

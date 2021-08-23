import React, { useState } from 'react';
import ReactYouTube from '../components/YouTube/YouTube';

function Home() {
  const [videoId, setVideoId] = useState('_nBlN9yp9R8');
  return (
    <div>
      <ReactYouTube videoId={videoId} />
    </div>
  );
}

export default Home;

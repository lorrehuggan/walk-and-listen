import React from 'react';
import YouTube from 'react-youtube';
import { YouTubeContainer } from './Youtube.styled';
import { data } from '../../data/data';
class ReactYouTube extends React.Component {
  render() {
    const opts = {
      height: window.innerHeight * 1.2,
      width: window.innerHeight * 1.2 * (16 / 9),
      playerVars: {
        autoplay: 1,
        controls: 0,
        mute: 1,
        showinfo: 0,
        modestbranding: 1,
        enablejsapi: 1,
        disablekb: 1,
        origin: window.location.origin,
        widget_referrer: window.location.href,
      },
    };
    const { videoId } = this.props;
    return (
      <YouTubeContainer>
        <YouTube videoId={videoId} opts={opts} onReady={this.VideoOnReady} />
      </YouTubeContainer>
    );
  }

  VideOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default ReactYouTube;

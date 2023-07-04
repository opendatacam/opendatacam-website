import React, { Component } from 'react';

import PlayButton from '@site/static/icons/play-button.svg';


export default class LandingpageDemo extends Component {
    player = null;

    componentDidMount() {
        const VimeoPlayer = require('@vimeo/player').default;
        const iframe = document.getElementById('demovideo');
        this.player = new VimeoPlayer(iframe);
        this.player.on('play', function() {
            document.getElementById('demoplaybutton').style.display = 'none';
            iframe.style.opacity = '1';
        });
    }

    onClickPlay = e => {
        this.player.play();
    };

    render() {return <div className="container mx-auto" id="appdemo">
    <h2 className="section-title">App demo</h2>
    <div className="p-4 m-4 border border-gray-400 border-solid rounded-lg sm:p-8 sm:pl-12 sm:pr-12">
      <div className="video-responsive">
        <iframe
          src="https://player.vimeo.com/video/346340651"
          width="640"
          height="332"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          id='demovideo'
        />
        <PlayButton title="Play Video" onClick={this.onClickPlay} id="demoplaybutton" />
      </div>
    </div>
    <style jsx="true">{`
            .video-responsive svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                -webkit-ransform: translate(-50%, -50%);
                -moz-ransform: translate(-50%, -50%);
                -ms-ransform: translate(-50%, -50%);
                -o-ransform: translate(-50%, -50%);
                transition: 0.1s;
                width: 130px;
            }
            .video-responsive svg:hover {
                cursor: pointer;
                opacity: 0.8;
            }
            @media (max-width: 640px) {
                .video-responsive svg {
                    width: 80px;
                }
            }
            .video-responsive {
                overflow: hidden;
                padding-bottom: 56.25%;
                position: relative;
                height: 0;
                background-color: #1d1d1d;
            }
            .video-responsive iframe {
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                position: absolute;
                opacity: 0.2;
            }
        `}</style>
  </div>
  }
}
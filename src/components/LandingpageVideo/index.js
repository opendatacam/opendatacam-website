import React from 'react';
import Player from '@vimeo/player';

import PlayButton from '@site/static/icons/play-button.svg';

const onClickPlay = e => {
    const parent = e.currentTarget.parentElement;
    const iframe = parent.getElementsByTagName('iframe')[0];
    const player = new Player(iframe);

    e.currentTarget.style.display = 'none';
    iframe.style.opacity = '1';

    player.play();
};

export default function LandingpageVideo() {
    return <div className="video-responsive">
        <iframe
            src="https://player.vimeo.com/video/351143472"
            width="640"
            height="332"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
        />
        <PlayButton title="Play Video" onClick={onClickPlay} />;
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
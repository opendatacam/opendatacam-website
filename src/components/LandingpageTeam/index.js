import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

export default function LandingpageTeam() {
    return <>
        <div className="container mx-auto mt-32" id="team" style={{maxWidth: "1050px"}}>
            <h2 className="section-title">Team</h2>
            <div className="section-content text-center">
                <div className="container">
                    <div className="row">
                        <div className="col"><div className="avatar avatar--vertical">
                            <img
                                className="avatar__photo avatar__photo--xl"
                                src="https://avatars.githubusercontent.com/u/829308?v=4" />
                            <div className="avatar__intro">
                                <div className="avatar__name">Valentin Sawadski</div>
                                <div className="avatar__subtitle">
                                    Project Lead<br />
                                    <a href="https://github.com/vsaw" target="_blank" style={{ margin: '0.5em', borderWidth: 0 }}>
                                        <ThemedImage
                                            alt="GitHub Icon"
                                            width={20}
                                            height={20}
                                            sources={{
                                                light: useBaseUrl('/icons/github.svg'),
                                                dark: useBaseUrl('/icons/github-mark-white.svg'),
                                            }}
                                        />
                                    </a>
                                    <a href="https://mastodon.social/@vsaw" target="_blank" rel="me" style={{ margin: '0.5em' }}>
                                        <ThemedImage
                                            alt="Mastodon Icon"
                                            width={20}
                                            height={20}
                                            sources={{
                                                light: useBaseUrl('icons/mastodon-black.svg'),
                                                dark: useBaseUrl('icons/mastodon-white.svg'),
                                            }}
                                        />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sawadski/" target="_blank" style={{ margin: '0.5em' }}>
                                        <ThemedImage
                                            className={styles.linkedIn}
                                            alt="LinkedIn Icon"
                                            width={20}
                                            height={20}
                                            sources={{
                                                light: useBaseUrl('icons/linkedin-white.png'),
                                                dark: useBaseUrl('icons/linkedin-white.png'),
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="section-content-text margin-top--lg">
                    OpenDataCam was initiated by move lab
                    (<i><a href="https://benedikt-gross.de" target="_blank">Benedikt Groß</a>,&nbsp;
                        <a href="https://markuskreutzer.com" target="_blank">Markus Kreutzer</a>,&nbsp;
                        <a href="https://twitter.com/whatsuprapha" target="_blank">Raphael Reimann</a>,&nbsp;
                        <a href="https://florianporada.com/" target="_blank">Florian Porada</a>,&nbsp;Neele Rittmeister
                    </i>) and <i><a href="https://thibault-durand.fr" target="_blank">Thibault Durand</a></i>. It is developed by a small team of volunteers now.
                    <br />
                    <br />
                    See complete list of <a href="https://github.com/opendatacam/opendatacam/graphs/contributors">contributors</a> on GitHub
                </div>
            </div>
        </div>
    </>
}
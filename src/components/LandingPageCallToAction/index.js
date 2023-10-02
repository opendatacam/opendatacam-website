import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

export default function LandingpageCallToAction() {
    return <>
        <div className="container relative mx-auto mt-32" id="about" style={{ maxWidth: "1050px" }}>
            <h2 className="section-title">1, 2, 3, Go!</h2>

            <div className="section-content" >
                <div className="section-content-box">
                    <div className="section-content-title text-center md:px-8">Start counting with OpenDataCam today!</div>
                    <div className="section-content-text text-center">
                        <p>
                            <a
                                href="https://github.com/opendatacam/opendatacam"
                                target="_blank"
                                className={`flex inline-flex items-center justify-center ${styles.btn}`}
                            >
                                Installation guide
                            </a>
                        </p>
                    </div>
                </div>
                <div className="section-content-box">
                    <p>
                        Or reach out to us for more information!
                    </p>
                    <div className="avatar">
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
                                <a href="mailto:info@opendata.cam" target="_blank" style={{ margin: '0.5em' }}>
                                    <ThemedImage
                                        className={styles.email}
                                        alt="EMail Icon"
                                        width={20}
                                        height={20}
                                        sources={{
                                            light: useBaseUrl('icons/email.svg'),
                                            dark: useBaseUrl('icons/email.svg'),
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}
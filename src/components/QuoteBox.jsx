import React from 'react'
import './styles/QuoteBox.css'


export const QuoteBox = ({ handleChangeQuote, quote }) => {
    return (
        <section className='quoteBox'>
            <h1 className='title'>Space Curiosities</h1>

            <section>
                <article>
                    <p className='phrase'>
                        {quote.phrase}
                    </p>
                </article>
                <button className='btn__next' onClick={handleChangeQuote}>
                    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_171_1428)">
                            <path d="M33.5 5C20.0598 5 9.125 15.9359 9.125 29.375C9.125 42.8352 20.0398 53.75 33.5 53.75C46.9402 53.75 57.875 42.8152 57.875 29.375C57.875 15.9137 46.9613 5 33.5 5ZM33.5 41.6797C30.5785 41.6797 27.7766 40.5191 25.7108 38.4533C23.6449 36.3875 22.4844 33.5856 22.4844 30.6641C22.4844 27.7425 23.6449 24.9407 25.7108 22.8748C27.7766 20.809 30.5785 19.6484 33.5 19.6484H33.9934L32.3398 17.9961C32.0322 17.6884 31.8593 17.2711 31.8593 16.8359C31.8593 16.4008 32.0322 15.9835 32.3398 15.6758C32.6475 15.3681 33.0649 15.1952 33.5 15.1952C33.9351 15.1952 34.3525 15.3681 34.6602 15.6758L39.3477 20.3633C39.5 20.5156 39.6209 20.6965 39.7033 20.8956C39.7858 21.0946 39.8282 21.308 39.8282 21.5234C39.8282 21.7389 39.7858 21.9523 39.7033 22.1513C39.6209 22.3504 39.5 22.5312 39.3477 22.6836L34.6602 27.3711C34.3525 27.6788 33.9351 27.8516 33.5 27.8516C33.0649 27.8516 32.6475 27.6788 32.3398 27.3711C32.0322 27.0634 31.8593 26.6461 31.8593 26.2109C31.8593 25.7758 32.0322 25.3585 32.3398 25.0508L34.4492 22.9414C34.1703 22.9297 33.8516 22.9297 33.5 22.9297C31.9703 22.9297 30.4749 23.3833 29.203 24.2332C27.9311 25.083 26.9398 26.291 26.3544 27.7042C25.769 29.1175 25.6158 30.6726 25.9142 32.173C26.2127 33.6733 26.9493 35.0514 28.031 36.1331C29.1126 37.2148 30.4908 37.9514 31.9911 38.2498C33.4914 38.5483 35.0465 38.3951 36.4598 37.8097C37.8731 37.2243 39.081 36.233 39.9309 34.9611C40.7808 33.6891 41.2344 32.1938 41.2344 30.6641C41.2344 30.2289 41.4072 29.8116 41.7149 29.504C42.0226 29.1963 42.4399 29.0234 42.875 29.0234C43.3101 29.0234 43.7274 29.1963 44.0351 29.504C44.3428 29.8116 44.5156 30.2289 44.5156 30.6641C44.5122 33.5845 43.3505 36.3844 41.2855 38.4495C39.2204 40.5146 36.4205 41.6763 33.5 41.6797Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_171_1428" x="0.125" y="0" width="66.75" height="66.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="4.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_1428" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_1428" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </button>
            </section>

            <footer className='footer'>
                <h4 className='author'>Fuente: {quote.author}</h4>
            </footer>
            <svg className='vector' width="301" height="118" viewBox="0 0 301 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M150.523 300.982C233.585 300.982 300.921 233.719 300.921 150.745C300.921 67.7716 233.585 0.508301 150.523 0.508301C67.4612 0.508301 0.125977 67.7716 0.125977 150.745C0.125977 233.719 67.4612 300.982 150.523 300.982Z" fill="url(#paint0_radial_171_1558)" />
                    <defs>
                        <radialGradient id="paint0_radial_171_1558" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(96.0431 -13.4187) rotate(-50.1262) scale(315.575 315.635)">
                            <stop stop-color="#ffffff" />
                            <stop offset="0.9947" stop-color="#ffffff" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
        </section>        
    );
};

import React from 'react'
import { Link} from 'gatsby'

const IndexPage = (props) => {
  return (
    <div className="splash">
        <div className="splash__background">
        <h1 className="splash__header">Perfectly Salted</h1>
            <div className="splash__container">
            <div>
                <div className="splash__content">
                    <div className="splash__svg-header">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                            width="290.43px" height="125.15px" viewBox="0 0 290.43 125.15"
                           >
                        <defs>
                        </defs>
                        <g>
                            <g>
                                <path class="st0" d="M21.13,108.95l-2.57,8.76l6.18,4.1l-0.98,3.33L0,108.99l0.82-2.79l28.68-0.64l-0.97,3.32L21.13,108.95z
                                    M15.92,115.96l2.04-6.98l-12.41,0.12L15.92,115.96z"/>
                                <path class="st0" d="M43.75,74.68l8.4-10.41l2.29,1.85L43.86,79.23L22.58,62.06l2.18-2.7L43.75,74.68z"/>
                                <path class="st0" d="M41.77,40.28l12.68-10.6L56.39,32l-5.03,4.2l13.67,16.36l5.03-4.21l1.93,2.31l-12.68,10.6l-1.93-2.31
                                    l4.91-4.11L48.62,38.5l-4.91,4.11L41.77,40.28z"/>
                                <path class="st0" d="M82.75,16.15l-7.42,4.05l11.69,21.39l-2.97,1.62L72.36,21.83l-7.42,4.05l-1.42-2.6l17.8-9.73L82.75,16.15z"/>
                                <path class="st0" d="M110.11,6.71l-8.07,2.52l7.26,23.27l-3.23,1.01l-7.26-23.27l-8.07,2.52l-0.88-2.83l19.36-6.04L110.11,6.71z"
                                    />
                                <path class="st0" d="M126.58,25.68l13.3-1.4l0.31,2.93l-16.75,1.77l-2.87-27.2l3.46-0.36L126.58,25.68z"/>
                                <path class="st0" d="M163.15,15.97l-11.37-1.02l-0.86,9.65l13.26,1.19l-0.26,2.94l-16.72-1.5L149.62,0l16.56,1.48l-0.26,2.96
                                    l-13.09-1.17l-0.78,8.75l11.37,1.02L163.15,15.97z"/>
                                <path class="st0" d="M209.76,38.18c0.39-0.74,0.55-1.46,0.48-2.14c-0.07-0.69-0.28-1.35-0.63-1.97s-0.78-1.23-1.29-1.79
                                    c-0.51-0.57-1.02-1.1-1.5-1.6c-0.71-0.73-1.4-1.51-2.08-2.37c-0.68-0.85-1.23-1.75-1.66-2.7s-0.67-1.93-0.72-2.94
                                    c-0.06-1.01,0.19-2.04,0.74-3.08c0.55-1.04,1.27-1.85,2.16-2.43c0.89-0.58,1.86-0.95,2.9-1.13c1.04-0.17,2.11-0.16,3.21,0.04
                                    c1.1,0.2,2.12,0.55,3.07,1.05c1.05,0.55,1.97,1.26,2.77,2.12c0.79,0.86,1.4,1.81,1.82,2.83c0.42,1.03,0.62,2.11,0.61,3.25
                                    c-0.02,1.14-0.31,2.27-0.87,3.38l-3.16-1.66c0.28-0.74,0.44-1.47,0.49-2.17c0.05-0.71-0.03-1.37-0.24-2
                                    c-0.21-0.63-0.54-1.21-1-1.75c-0.46-0.53-1.06-0.99-1.79-1.38c-0.59-0.31-1.21-0.53-1.85-0.66c-0.65-0.13-1.28-0.14-1.89-0.04
                                    c-0.61,0.1-1.18,0.33-1.69,0.68c-0.52,0.35-0.94,0.85-1.28,1.49c-0.36,0.7-0.49,1.39-0.4,2.05c0.09,0.66,0.31,1.3,0.66,1.91
                                    c0.35,0.61,0.78,1.19,1.27,1.73c0.5,0.54,0.98,1.04,1.43,1.5c0.5,0.5,0.99,1.03,1.48,1.59c0.48,0.56,0.93,1.14,1.33,1.75
                                    c0.4,0.61,0.74,1.23,1.03,1.88c0.28,0.64,0.48,1.31,0.58,2s0.11,1.38,0,2.08c-0.11,0.7-0.35,1.41-0.73,2.13
                                    c-0.57,1.09-1.31,1.91-2.22,2.46c-0.91,0.56-1.88,0.9-2.93,1.04c-1.05,0.14-2.12,0.09-3.23-0.15c-1.11-0.24-2.14-0.61-3.11-1.11
                                    c-1.08-0.57-2.04-1.29-2.9-2.16c-0.86-0.87-1.53-1.84-2.01-2.89c-0.49-1.05-0.75-2.17-0.78-3.34c-0.04-1.17,0.23-2.34,0.81-3.51
                                    l3.14,1.65c-0.3,0.81-0.44,1.58-0.44,2.33c0,0.75,0.14,1.45,0.42,2.11c0.27,0.66,0.68,1.26,1.21,1.8s1.17,1.01,1.92,1.4
                                    c0.6,0.32,1.23,0.55,1.89,0.71c0.66,0.16,1.3,0.2,1.92,0.12c0.62-0.08,1.2-0.28,1.74-0.61C208.96,39.34,209.41,38.85,209.76,38.18
                                    z"/>
                                <path class="st0" d="M230.04,52.29l14.17-14.19l2.56,2.07l-19.79,19.17l-2.76-2.23l10.23-18.22l-15.72,13.78l-2.77-2.25
                                    l14.62-23.35l2.57,2.08l-10.93,16.82l15.28-13.29l2.35,1.9L230.04,52.29z"/>
                                <path class="st0" d="M252.47,68.72l-7.31-8.77l-7.44,6.21l8.53,10.23l-2.27,1.89l-10.75-12.9l21.01-17.51l10.64,12.77l-2.28,1.9
                                    l-8.42-10.1l-6.75,5.63l7.31,8.77L252.47,68.72z"/>
                                <path class="st0" d="M266.28,91.41l-5.46-10.03l-8.51,4.63l6.37,11.7l-2.59,1.41l-8.03-14.75l24.02-13.08l7.95,14.6l-2.61,1.42
                                    l-6.29-11.55l-7.72,4.2L268.87,90L266.28,91.41z"/>
                                <path class="st0" d="M287.6,116.14l-2.5-8.07l-23.28,7.23l-1-3.23l23.28-7.23l-2.51-8.07l2.83-0.88l6.01,19.37L287.6,116.14z"/>
                            </g>
                        </g>
                        </svg>

                    </div>
                    
                        <ul className="nav__links">
                            <li><Link className="" to="recipes">Recipes</Link></li>
                            <li><Link className="" to="about">About</Link></li>
                            <li><Link className="" to="contact">Contact</Link></li>
                        </ul>
                        <div className="splash__svg-footer">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                width="290.53px" height="118.32px" viewBox="0 0 290.53 118.32" 
                                >

                            <defs>
                            </defs>
                            <g>
                                <path class="st0" d="M11.82,20.82l-3.2-8.55l-7.4,0.42L0,9.45l28.71-1.32l1.02,2.73L7.16,28.56l-1.21-3.24L11.82,20.82z
                                    M11.78,12.09l2.55,6.81l9.85-7.54L11.78,12.09z"/>
                                <path class="st0" d="M32.24,62.13l8.93,9.95l-2.19,1.97L27.72,61.52l20.35-18.27l2.32,2.59L32.24,62.13z"/>
                                <path class="st0" d="M63.91,59.93l13.12,10.05l-1.84,2.4l-5.2-3.99L57.02,85.32l5.2,3.99l-1.83,2.39L47.28,81.64l1.83-2.39
                                    l5.08,3.9l12.97-16.92l-5.08-3.9L63.91,59.93z"/>
                                <path class="st0" d="M98.03,84.64l-7.54-3.81L79.5,102.6l-3.02-1.52l10.99-21.76l-7.54-3.81l1.34-2.65l18.11,9.14L98.03,84.64z"/>
                                <path class="st0" d="M121,91.6l-8.12-2.33l-6.73,23.43l-3.25-0.93l6.73-23.43L101.51,86l0.82-2.85l19.5,5.6L121,91.6z"/>
                                <path class="st0" d="M128.46,114.15l13.32,1.23l-0.27,2.94l-16.78-1.55l2.52-27.23l3.46,0.32L128.46,114.15z"/>
                                <path class="st0" d="M166.54,104.29l-11.37,1.04l0.89,9.65l13.26-1.22l0.27,2.94l-16.72,1.54l-2.5-27.23l16.55-1.52l0.27,2.96
                                    l-13.09,1.2l0.8,8.75l11.37-1.04L166.54,104.29z"/>
                                <path class="st0" d="M217.81,92.98c-0.38-0.75-0.87-1.29-1.47-1.64c-0.6-0.34-1.26-0.55-1.97-0.64c-0.71-0.08-1.45-0.08-2.21,0.01
                                    c-0.76,0.09-1.49,0.19-2.17,0.3c-1,0.16-2.05,0.26-3.13,0.32c-1.09,0.06-2.14-0.02-3.16-0.22s-1.96-0.57-2.81-1.12
                                    c-0.86-0.54-1.55-1.34-2.08-2.39c-0.53-1.05-0.77-2.11-0.72-3.17c0.05-1.06,0.3-2.07,0.76-3.01c0.46-0.95,1.09-1.81,1.89-2.58
                                    c0.8-0.77,1.68-1.41,2.64-1.89c1.06-0.54,2.17-0.87,3.34-1.02s2.28-0.09,3.36,0.17c1.08,0.25,2.08,0.72,3,1.39s1.67,1.57,2.25,2.67
                                    l-3.19,1.61c-0.44-0.66-0.94-1.21-1.49-1.66s-1.14-0.77-1.77-0.97c-0.63-0.2-1.3-0.27-2-0.2c-0.7,0.07-1.42,0.29-2.16,0.66
                                    c-0.59,0.3-1.13,0.67-1.61,1.13c-0.48,0.45-0.86,0.96-1.13,1.52c-0.27,0.56-0.42,1.15-0.43,1.77c-0.01,0.62,0.14,1.26,0.47,1.91
                                    c0.37,0.7,0.84,1.21,1.44,1.52s1.24,0.5,1.94,0.57c0.7,0.07,1.42,0.06,2.15-0.03c0.73-0.09,1.42-0.19,2.05-0.3
                                    c0.7-0.11,1.42-0.21,2.15-0.28s1.47-0.09,2.2-0.07c0.73,0.03,1.44,0.11,2.13,0.25s1.34,0.37,1.96,0.68
                                    c0.62,0.31,1.18,0.71,1.69,1.21c0.51,0.49,0.95,1.1,1.31,1.83c0.55,1.1,0.79,2.17,0.71,3.24c-0.08,1.06-0.36,2.06-0.86,2.99
                                    c-0.5,0.93-1.16,1.78-2,2.54c-0.83,0.76-1.74,1.39-2.71,1.88c-1.08,0.55-2.23,0.91-3.44,1.1s-2.38,0.17-3.52-0.04
                                    c-1.14-0.22-2.2-0.65-3.17-1.3s-1.77-1.55-2.39-2.7l3.17-1.6c0.48,0.71,1.03,1.28,1.64,1.71c0.61,0.43,1.26,0.72,1.96,0.88
                                    c0.7,0.16,1.42,0.18,2.17,0.06s1.5-0.37,2.26-0.75c0.6-0.3,1.16-0.68,1.67-1.13c0.51-0.45,0.92-0.94,1.21-1.49s0.47-1.14,0.52-1.77
                                    S218.14,93.65,217.81,92.98z"/>
                                <path class="st0" d="M239.15,78.21l-7.25,5.55l2.56,6.96l-2.76,2.11l-9.61-27.08l2.31-1.77l23.51,16.44l-2.74,2.1L239.15,78.21z
                                    M230.81,80.79l5.77-4.42l-10.08-7.24L230.81,80.79z"/>
                                <path class="st0" d="M255.47,68.68l8.94-9.94l2.19,1.97l-11.26,12.53L235,54.96l2.32-2.58L255.47,68.68z"/>
                                <path class="st0" d="M262.02,23.22l-4.39,7.22l20.83,12.67L276.69,46l-20.83-12.67l-4.39,7.22l-2.54-1.54l10.54-17.33L262.02,23.22
                                    z"/>
                                <path class="st0" d="M277.21,14.35L266.55,3.69L267.94,0L281,13.99l9.53,3.64l-1.14,3.02l-9.57-3.53l-19.04,1.94l1.39-3.71
                                    L277.21,14.35z"/>
                            </g>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndexPage;
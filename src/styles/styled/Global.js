import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reapply the pointer cursor for anchor tags */
  a, button {
    cursor: revert;
  }

  /* Remove list styles (bullets/numbers) */
  ol, ul, menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
  input, textarea {
    -webkit-user-select: auto;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* fix the feature of 'hidden' attribute.
     display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
     - fix for the content editable attribute will work properly.
     - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  ::selection {
    background: rgb(100,255,218, 3%);
  }
  /* For Mozilla Firefox */
  ::-moz-selection {
    background: rgb(100,255,218, 3%);
  }

  body {
    background: #0d1017;
    color: rgb(204, 214, 246);
    font-family: 'League Spartan', sans-serif;
    font-size: 1rem;
    overflow-x: hidden;
    cursor: context-menu;
  }
  
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border: 0 none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border: 0 none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-track:active {
    background: #ffffff;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const colors = {
    white: '#FFFFFF',

    bodyBg: '#0d1017',
    mainBg: '#0B0E18',
    mobileBg: '#05101B',
    headerBg: '#0d101b',

    mainColorAccent: '#64FFDA',
    mainFont: '#CCD6F6',

    headerShadow: 'rgba(66, 68, 90, .25)',

    buttonHover: '#64ffda40',
    placeholder: '#dbe2f8',

    alert: '#D0342C',
    alertTrue: '#18BB9C'
}
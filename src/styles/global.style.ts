import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --aspect-ratio-width: 52.5rem;
    --side-panel-width: 175px;
    --aspect-ratio-height: calc(((var(--aspect-ratio-width) - var(--side-panel-width)) / 16) * 9);
  }

  * {
    font-family: 'Montserrat', 'Courier New', Courier, monospace;
    color: var(--color-primary);
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: var(--color-bg-primary);
  }

  /* gatsby specific css */
  body > *, /* #__gatsby */
  #gatsby-focus-wrapper  {
    min-height: 100%;
  }

  #gatsby-focus-wrapper  {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  a {
    color: var(--link-color)!important;
    transition: none;
    border-bottom: 1px solid var(--link-color);
    text-decoration: none;
  }

  a:hover {
    border-bottom: 1px solid transparent;
  }

  hr {
    width: 100%;
    height: 4px;
    margin: .6rem 0;

    border: none;
    border-top: 1px dashed var(--color-primary);
    border-bottom: 1px dashed var(--color-primary);
  }

  /* scrollbar */
  ::-webkit-scrollbar { width: .3rem; }

  /* scrollbar container */
  ::-webkit-scrollbar-track { display: none; }

  /* scroller */
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: var(--color-primary);
  }

  ::-webkit-scrollbar-thumb:hover { background: var(--color-secondary); }

  .disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`;


export const Container = styled.div`
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  max-width: var(--aspect-ratio-width);

  @media (max-width: 576px) { width: 90%; }
  @media (min-width: 576px) { width: 540px; }
  @media (min-width: 768px) { width: 730px; }
  @media (min-width: 992px) { width: 970px; }
  @media (min-width: 1200px) { width: 1170px; }
`;

export const BlockCursor = styled.span`
  position: relative;

  ::before {
    content: '\u2588';
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;


export default GlobalStyle;

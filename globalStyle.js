import { injectGlobal } from 'styled-components';
import pixel from './assets/pixel.ttf';

export default () => {

  console.log('global test')

  return injectGlobal`
    @font-face {
      font-family: "Pixel";
      src: url(${pixel}) format('truetype');
    }

    body {
      font-family: Pixel;
      background-color: black;
    }
  `
}

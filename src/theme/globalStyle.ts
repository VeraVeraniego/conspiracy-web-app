import { createGlobalStyle } from 'styled-components'

export type Palette = typeof theme.palette

export const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
	html{
		/* font-size: 12px;
    line-height: 14px; */
		font-weight: 700;
		font-family: 'Lato', sans-serif;
	}
  h1{
    font-size: 28px;
    line-height: 32px;
  }
  h2{
    font-size: 22px;
    line-height: 24px;
  }
  h3{
    font-size: 18px;
    line-height: 20px;
  }
  h4{
    font-size: 16px;
    line-height: 18px;
  }
  h5{
    font-size: 12;
    line-height: 16px;
  }
  p{
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
  }
	p, span {
		letter-spacing: .75px
	}
`

export const theme = {
  palette: {
    primary: {
      minus2: '#FAF8F5',
      minus1: '#D9C8B0',
      zero: '#B7986A',
      plus1: '#7F653E',
      plus2: '#3A2E1C',
    },
    info: {
      minus2: '#E5ECFF',
      minus1: '#295BE5',
      zero: '#183585',
      plus1: '#0E1E4D',
    },
    success: {
      minus2: '#E5FFED',
      minus1: '#12B23F',
      zero: '#0D822E',
      plus1: '#084D1B',
    },
    critical: {
      minus2: '#FFE6E5',
      minus1: '#CC1D1A',
      zero: '#851311',
      plus1: '#4D0B0A',
    },
    warning: {
      minus2: '#FFE5CC',
      minus1: '#FF881A',
      zero: '#CF6400',
      plus1: '#994A00',
    },
    gray: {
      minus3: '#F1F2F4',
      minus2: '#DDE0E4',
      minus1: '#C6CCD2',
      zero: '#ADB5BD',
    },
    black: {
      minus4: '#262626',
      minus3: '#212121',
      minus2: '#1F1F1F',
      minus1: '#1C1C1C',
      zero: '#161616',
    },
    text: {
      white: '#FFFFFF',
      gray: '#979696',
      grayPlusOne: '#4A4A4A',
      black: '#161616',
    },
  },
}

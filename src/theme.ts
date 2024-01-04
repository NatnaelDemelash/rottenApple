import { extendTheme } from "@chakra-ui/react";

// const config:ThemeConfig = {
//   initialColorMode: "dark"
// }

// const theme = extendTheme({config});

export const myNewThem = extendTheme({
  color: {
    dark: '#273746',
    primary: '#138D75',
    secondary: '#48C9B0',
    orange:'#DC7633'
  },
   fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Rajdhani', sans-serif`,
  },
})


// export default theme;

import { extendTheme } from '@chakra-ui/react';

const AppTheme = extendTheme({
    colors: {
      black: {
        100: "#000",
        // ...
        900: "#1a202c",
      },
      white: {
        100: "#fff",
      },
    },
});

export default AppTheme;
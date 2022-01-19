import { createTheme } from '@mui/material/styles';

export const BaseMuiTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999
        }
      }
    }
  }
});

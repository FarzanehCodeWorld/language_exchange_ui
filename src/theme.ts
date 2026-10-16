import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#0F766E', contrastText: '#FFFFFF' },
    secondary: { main: '#F97316', contrastText: '#1F2933' },
    background: { default: '#FAFAF7', paper: '#FFFFFF' },
    text: { primary: '#1F2933', secondary: '#52606D' },
    divider: '#E4E7EB',
    success: { main: '#15803D', contrastText: '#FFFFFF' },
    error: { main: '#B91C1C', contrastText: '#FFFFFF' },
    warning: { main: '#B45309', contrastText: '#FFFFFF' },
  },
});

export default theme;
import { alpha } from '@mui/material/styles';

const GREY = {
   0: '#FFFFFF',
   100: '#F9FAFB',
   200: '#F4F6F8',
   300: '#DFE3E8',
   400: '#C4CDD5',
   500: '#919EAB',
   600: '#637381',
   700: '#454F5B',
   800: '#212B36',
   900: '#161C24',
};

const SECONDARY = {
   lighter: '#D1E9FC',
   light: '#76B0F1',
   main: '#2065D1',
   dark: '#103996',
   darker: '#061B64',
   contrastText: '#fff',
};

const PRIMARY = {
   lighter: '#a1dec0',
   light: '#7bd1a7',
   main: '#55c38e',
   dark: '#3caa73',
   darker: '#2e8459',
   contrastText: '#fff',
};

const INFO = {
   lighter: '#b3ffd9',
   light: '#00e673',
   main: '#00AB55',
   dark: '#00994d',
   darker: '#008040',
   contrastText: '#fff',
};

const SUCCESS = {
   lighter: '#E9FCD4',
   light: '#AAF27F',
   main: '#54D62C',
   dark: '#229A16',
   darker: '#08660D',
   contrastText: GREY[800],
};

const WARNING = {
   lighter: '#FFF7CD',
   light: '#FFE16A',
   main: '#FFC107',
   dark: '#B78103',
   darker: '#7A4F01',
   contrastText: GREY[800],
};

const ERROR = {
   lighter: '#FFE7D9',
   light: '#FFA48D',
   main: '#FF4842',
   dark: '#B72136',
   darker: '#7A0C2E',
   contrastText: '#fff',
};

const palette = {
   common: { black: '#000', white: '#fff' },
   primary: PRIMARY,
   secondary: SECONDARY,
   info: INFO,
   success: SUCCESS,
   warning: WARNING,
   error: ERROR,
   grey: GREY,
   divider: alpha(GREY[500], 0.24),
   text: {
      primary: GREY[700],
      secondary: GREY[600],
      disabled: GREY[500],
   },
   background: {
      paper: '#fff',
      default: '#F9FAFB',
      neutral: GREY[200],
   },
   action: {
      active: GREY[600],
      hover: alpha(GREY[500], 0.08),
      selected: alpha(GREY[500], 0.16),
      disabled: alpha(GREY[500], 0.8),
      disabledBackground: alpha(GREY[500], 0.24),
      focus: alpha(GREY[500], 0.24),
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
   },
};

export default palette;

import { makeStyles } from '@material-ui/core/styles';
import {
  blue,
  purple,
  green,
  red,
  yellow,
  cyan,
  grey,
} from '@material-ui/core/colors';

const contained = makeStyles((theme) => ({
  primary: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
  secondary: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
  success: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  danger: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  warning: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[700],
    },
  },
  info: {
    color: theme.palette.getContrastText(cyan[500]),
    backgroundColor: cyan[500],
    '&:hover': {
      backgroundColor: cyan[700],
    },
  },
  light: {
    color: theme.palette.getContrastText(grey[100]),
    backgroundColor: grey[100],
    '&:hover': {
      backgroundColor: grey[200],
    },
  },
  dark: {
    color: theme.palette.getContrastText(grey[700]),
    backgroundColor: grey[700],
    '&:hover': {
      backgroundColor: grey[900],
    },
  },
}));

const outlined = makeStyles((theme) => ({
  primary: {
    color: blue[500],
    border: `1px solid ${blue[500]}`,
    '&:hover': {
      backgroundColor: blue[50],
      border: `1px solid ${blue[700]}`,
    },
  },
  secondary: {
    color: purple[500],
    border: `1px solid ${purple[500]}`,
    '&:hover': {
      backgroundColor: purple[50],
      border: `1px solid ${purple[700]}`,
    },
  },
  success: {
    color: green[500],
    border: `1px solid ${green[500]}`,
    '&:hover': {
      backgroundColor: green[50],
      border: `1px solid ${green[700]}`,
    },
  },
  danger: {
    color: red[500],
    border: `1px solid ${red[500]}`,
    '&:hover': {
      backgroundColor: red[50],
      border: `1px solid ${red[700]}`,
    },
  },
  warning: {
    color: yellow[500],
    border: `1px solid ${yellow[500]}`,
    '&:hover': {
      backgroundColor: yellow[50],
      border: `1px solid ${yellow[700]}`,
    },
  },
  info: {
    color: cyan[500],
    border: `1px solid ${cyan[500]}`,
    '&:hover': {
      backgroundColor: cyan[50],
      border: `1px solid ${cyan[700]}`,
    },
  },
  light: {
    color: grey[500],
    border: `1px solid ${grey[500]}`,
    '&:hover': {
      backgroundColor: grey[50],
      border: `1px solid ${grey[700]}`,
    },
  },
  dark: {
    color: grey[700],
    border: `1px solid ${grey[700]}`,
    '&:hover': {
      backgroundColor: grey[50],
      border: `1px solid ${grey[900]}`,
    },
  },
}));

const text = makeStyles((theme) => ({
  primary: {
    color: blue[500],
    '&:hover': {
      backgroundColor: blue[50],
    },
  },
  secondary: {
    color: purple[500],
    '&:hover': {
      backgroundColor: purple[50],
    },
  },
  success: {
    color: green[500],
    '&:hover': {
      backgroundColor: green[50],
    },
  },
  danger: {
    color: red[500],
    '&:hover': {
      backgroundColor: red[50],
    },
  },
  warning: {
    color: yellow[500],
    '&:hover': {
      backgroundColor: yellow[50],
    },
  },
  info: {
    color: cyan[500],
    '&:hover': {
      backgroundColor: cyan[50],
    },
  },
  light: {
    color: grey[500],
    '&:hover': {
      backgroundColor: grey[50],
    },
  },
  dark: {
    color: grey[700],
    '&:hover': {
      backgroundColor: grey[50],
    },
  },
}));

export default {
  contained,
  outlined,
  text,
};

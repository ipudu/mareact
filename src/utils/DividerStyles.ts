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

const styles = makeStyles((theme) => ({
  root: {
    borderWidth: '1px',
    borderRadius: '1px',
  },
  default: {
    borderColor: grey[500],
  },
  primary: {
    borderColor: blue[500],
  },
  secondary: {
    borderColor: purple[500],
  },
  success: {
    borderColor: green[500],
  },
  danger: {
    borderColor: red[500],
  },
  warning: {
    borderColor: yellow[500],
  },
  info: {
    borderColor: cyan[500],
  },
  solid: {
    borderStyle: 'solid',
  },
  dotted: {
    borderStyle: 'dotted',
  },
  dashed: {
    borderStyle: 'dashed',
  },
}));

export default styles;

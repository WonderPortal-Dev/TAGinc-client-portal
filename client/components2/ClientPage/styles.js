import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    margin: '30px auto',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
  },
  box: {
    border: 1,
    borderColor: 'black',
  },
}));

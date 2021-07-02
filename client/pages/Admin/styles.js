import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    margin: '5px auto',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: '20px',
  },
  box: {
    border: 1,
    borderColor: 'black',
  },
}));

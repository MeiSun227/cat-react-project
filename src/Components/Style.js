
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        objectFit: 'auto',
        display: 'flex',
        maxHeight: 600,
        maxWidth: 600
    },
}));

export default useStyles
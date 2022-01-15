import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',

        [theme.breakpoints.down('sm')]: {
            display: 'grid',
        }
    },
}));

export default useStyles;
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'grid',
        width: '50%',
        marginTop: '2%',
        alignItems: 'center',

        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },

        [theme.breakpoints.down('md')]: {
            width: '100%'
        }

    },
    form: {
        backgroundColor: 'lightblue',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'green',
        width: '100%',
        color: 'white'
    }

}));

export default useStyles;
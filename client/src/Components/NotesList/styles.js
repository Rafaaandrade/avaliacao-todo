import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        width: '100%',
        backgroundColor: 'lightblue',
        margin: '2rem',


        [theme.breakpoints.down('xs')]: {
            margin: '0',
            marginTop: '2rem'
        },
        [theme.breakpoints.down('md')]: {
            margin: '0',
        },

    },
    listItem: {
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    listButtons: {
        backgroundColor: 'white',

    }
}));

export default useStyles;
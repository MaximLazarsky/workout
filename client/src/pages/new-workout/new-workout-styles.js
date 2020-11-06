import { makeStyles } from '@material-ui/core/styles'

  const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60vh",
        marginTop: "150px"
    },
    form: {
        border: "solid 2px #d1d1d1",
        width: '90%',
        height: '500px',
        overflowY: 'scroll',
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "borderBox"
    },
    exerItem : {
        display: 'flex',
        margin: '10px 0 50px'
    },
    textField : {
        width: "150px",
        marginLeft: "50px"
    },
    inputLabel: {
        fontSize: "12px",
        width: "20px",
        marginRight: "70px"
    },
    select: {
        width: "200px"
    },
    button: {
        marginRight: "15px"
    },
    buttonOrder: {
        background: "#ffb74d",
        color: "#fff"
    }
  }))

  export default useStyles
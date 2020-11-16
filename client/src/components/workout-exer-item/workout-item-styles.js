import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
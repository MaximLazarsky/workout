import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    form: {
      border: "solid 2px #d1d1d1",
      width: '400px',
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      boxSizing: "borderBox"
    },
    input: {
      marginTop: "20px"
    }
  }))

  export default useStyles
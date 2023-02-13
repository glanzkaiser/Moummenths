import { createMuiTheme } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#52c7b8',
      main: '#d2881e',
      dark: '#00675b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#992a21',
      dark: '#c77800',
      contrastText: '#000',
    },
      openTitle: '#6f3c43',
      protectedTitle: orange['700'],
      type: 'light'
    } 
  })

  export default theme  
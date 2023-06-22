import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(255, 192, 31)'
        },
        secondary: {
            main: 'rgb(104, 104, 104)',
            light: "rgb(176, 173, 173)"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    textTransform: 'capitalize',
                    color: 'black',
                    borderColor: 'black',
                    minWidth: 150,
                    "&:hover": {
                        backgroundColor: 'rgb(255, 192, 31)'
                    }
                }
            }
        }
    }
})
export default theme;

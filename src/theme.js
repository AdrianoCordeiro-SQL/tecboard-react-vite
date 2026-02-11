import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Orbitron, Arial, sans-serif',
    h1: {
      fontSize: '48px',
      lineHeight: '60px',
      fontWeight: 500,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#17D9B1',
          color: '#212121',
          fontFamily: 'Work Sans, Arial, sans-serif',
          fontSize: '16px',
          fontWeight: 400,
          padding: '8px 16px',
          borderRadius: '8px',
          textTransform: 'none'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#fff',
        }
      }
    },
   
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '36px',
          color: '#fff', 
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#33353F',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#17D9B1',
          },
        },
        input: {
          height: '36px',
          padding: '0 14px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '16px',
          color: '#fff', 
          '&::placeholder': {
            color: '#33353F', 
            opacity: 1,
            fontSize: '16px',
          },
        },
      },
    },
  
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': { 
             color: '#fff' 
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#33353F',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#17D9B1',
            borderWidth: '2px',
          },
          '&.MuiSelect-select.MuiSelect-outlined': {
            color: '#fff', 
            fontSize: '16px',
          },
        },
        select: {
          '&[aria-expanded="false"]': {
             color: '#fff', 
             fontSize: '16px',
          },
        },
      
        icon: {
            color: '#fff' 
        }
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-focused': {
            color: '#fff',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          border: 'none',
        },
      },
    },

    MuiMenu: {
        styleOverrides: {
            paper: {
                backgroundColor: '#212121', 
                color: '#fff' 
            }
        }
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                },
                '&.Mui-selected': {
                    backgroundColor: 'rgba(23, 217, 177, 0.2)', 
                    '&:hover': {
                        backgroundColor: 'rgba(23, 217, 177, 0.3)'
                    }
                }
            }
        }
    }
  },
  palette: {
    textSecondary: '#33353F'
  }
})

export default theme
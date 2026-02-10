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
            color: '#33353F',
            fontSize: '16px',
          },
        },
        select: {
          '&[aria-expanded="false"]': {
            color: '#33353F',
            fontSize: '16px',
          },
        },
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
  },
  palette: {
    textSecondary: '#33353F'
  }
})

export default theme
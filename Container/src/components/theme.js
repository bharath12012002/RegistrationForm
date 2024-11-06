import { createTheme }  from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
      primary: {
        main: '#11cb5f',
      },
    },
    overrides: {

        MuiOutlinedInput:{
            root: {
                fontSize:'15px',
                position: 'relative',
                   '& $notchedOutline': {
                    borderColor: 'white',
                },
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                    borderColor: '#0a4fbe',
                    // Reset on touch devices, it doesn't add specificity
                    '@media (hover: none)': {
                        borderColor: '#white',
                    },
                },
                '&$focused $notchedOutline': {
                    borderColor: 'white',
                    borderWidth: 2,
                },
            input: {
                padding:'15.5px 14px',
            },
            },
        },

        MuiInputLabel: {
            shrink: {
              fontSize: '15px',
            },
            root: {
              fontSize: '15px',
              color:'rgba(0, 0, 0, 0.3)',
            },
        },
          
        MuiButton: {
            root: {
               '&:hover': {
                  backgroundColor: '#888',
                  color: '#999',
                         },
             fontWeight: 500,
             textTransform: 'capitalize',
             borderRadius: '4px',
             background: '#0a4fbe',
             color: '#fff',
             padding:'11px 60px',
                 fontSize:'15px',
                 boxShadow:'0 2px 6px 0 rgba(0,0,0,.2)',
               
                },
           
            textPrimary: {
               '&:hover': {
                   backgroundColor: '#3874ff    ',
                   color: '#fff',
                         },
            background: '#0a4fbe',
            color: '#fff',
            padding:'11px 60px',
                },
            textSecondary: {
                    '&:hover': {
                        backgroundColor: '#3874ff    ',
                        color: '#fff',
                              },
                 background: '#3874ff    ',
                 color: '#fff',
             
                },
                text : {
                    '&:hover': {
                        backgroundColor: '#0a4fbe',
                        color: '#fff',
                              }, 
                 background: '#0a4fbe',
                 color: '#fff',
                 
                    },
            outlined:{
                '&:hover': {
                    backgroundColor: '#fff',
                    color: '#3874ff    ',
                          },
             background: 'rgba(0,0,0,0)',
             color: '#fff',
             borderColor: '#fff',
             fontSize: '15px',
                },
                label:{
                    textShadow: '0px 0px 4px rgba(0,0,0,0.3)',
                },
                outlinedPrimary:{
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#3874ff    ',
                        border:'1px solid #3874ff    ',
                              },
                 background: 'transparent',
                 fontSize: '14px',
                 border:'1px solid #0a4fbe',
                 color:'#0a4fbe',
                 padding:'2px 10px',

                },
                outlinedSecondary:{
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#3874ff    ',
                        border:'1px solid #3874ff    ',
                              },
                 background: 'transparent',
                 fontSize: '14px',
                 border:'1px solid #3874ff    ',
                 color:'#3874ff    ',
                 padding:'2px 10px',

                },

        },

        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: '#0a4fbe',
                },
            },
        },

      },
      
  })
  
  export default theme

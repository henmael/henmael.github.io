import { Typography, Paper, Stack, Button, Box, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import christmas from '../assets/image.png'

export function Calender(){
    const navigate = useNavigate();
    const buttons = Array.from({ length: 24 }, (_, index) => index + 1);

    const date = new Date();
    const matches = useMediaQuery('(min-width:600px)');
    const sizeCol = matches ? 4 : 2; // Columns change based on screen size

    function handleClick (doorId: number){
      navigate('/door/' + doorId);
    }




    const theme = createTheme({
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              "&.Mui-disabled": {
                opacity: 0.6, 
                backgroundColor: "rgba(255, 255, 255, 0.2)", 
                color: "black", 
              },
            },
          },
        },
      },
    });
    

    return (
        <Box height='100vh' display="flex" flexDirection="column">
          <Typography variant="h2" textAlign='center'>
            Simple christmas calender
          </Typography>
              <Box display='flex' 
                  flexDirection='column' 
                  justifyContent='center' 
                  alignItems='center' 
                  flexGrow={1}>
                <Paper sx={{backgroundImage: `url(${christmas})`,backgroundPosition: 'center', paddingTop: '0.5rem', paddingLeft: '0.2rem', paddingRight: '0.2rem', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                            position: 'relative', margin: 'auto', }}>
                {Array.from({ length: Math.ceil(buttons.length / sizeCol) }, (_, rowIndex) => (
                        <Stack key={rowIndex} direction="row" spacing={30} mb={2} justifyContent="center">
                        {buttons.slice(rowIndex * sizeCol, (rowIndex + 1) * sizeCol).map((buttonNumber, colIndex) => (
                          <ThemeProvider key={colIndex} theme={theme}>
                                <Button disabled={date.getDate() < buttonNumber} key={colIndex} onClick={() => handleClick(buttonNumber)}
                                  sx={{fontSize: 40,
                                    border: 3, margin: '0',
                                    textAlign: 'center', 
                                    color: 'white', fontWeight: 'bold', 
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                                    width: matches ? '5rem' : '3rem'}}>
                                {buttonNumber}
                              </Button>
                          </ThemeProvider>
                        ))}
                      </Stack>
                  ))}
                
                </Paper>
              </Box>
    </Box>
    );
}
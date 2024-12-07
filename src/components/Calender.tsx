import { Typography, Paper, Stack, Button, Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import christmas from '../assets/image.png'

export function Calender(){
    const navigate = useNavigate();
    const buttons = Array.from({ length: 24 }, (_, index) => index + 1);
    const [calendarZoomed, setCalendarZoomed] = useState(false);
    const [clickedNumber, setClickedNumber] = useState<number>(0);

    const date = new Date();

    function handleClick (doorId: number){
      setCalendarZoomed(true);

      setTimeout(() => {
        navigate('/door/' + doorId);
      }, 500); 
      setClickedNumber(doorId);
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
                <Paper sx={{backgroundImage: `url(${christmas})`,backgroundPosition: 'center', padding: 2,  backgroundRepeat: 'no-repeat', backgroundSize: 'cover', transition: 'transform 0.5s',
                            transform: calendarZoomed ? 'scale(3)' : 'scale(1)', 
                            position: 'relative', margin: 'auto', }}>
                {Array.from({ length: 6 }, (_, rowIndex) => (
                        <Stack direction="row" spacing={30} mb={2} justifyContent="center" key={rowIndex}>
                        {buttons.slice(rowIndex * 4, rowIndex * 4 + 4).map((buttonNumber, colIndex) => (
                          <ThemeProvider theme={theme}>
                                <Button disabled={date.getDate() < rowIndex * 4 + colIndex+1} key={colIndex} onClick={() => handleClick(rowIndex * 4 + colIndex+1)}
                                  sx={{fontSize: 40,
                                    opacity: calendarZoomed && clickedNumber !== buttonNumber ? 0 : 1, border: 3, margin: '0',
                                    textAlign: 'center', 
                                    color: 'white', fontWeight: 'bold', 
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                                    width: 2}}>
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
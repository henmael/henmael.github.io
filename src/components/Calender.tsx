import { Typography, Paper, Stack, Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import christmas from '../assets/image.png'

export function Calender(){
    const navigate = useNavigate();
    const buttons = Array.from({ length: 24 }, (_, index) => index + 1);
    const [calendarZoomed, setCalendarZoomed] = useState(false);
    const [clickedNumber, setClickedNumber] = useState<number>(0);

    function handleClick (doorId: number){
      setCalendarZoomed(true);

      setTimeout(() => {
        navigate('/door/' + doorId);
      }, 500); // Adjust the delay as needed
      setClickedNumber(doorId);
    }

    /**
     * transition: 'transform 0.3s',
        transform: calendarZoomed ? 'scale(6) translateZ(100px)' : 'scale(1) translateZ(0)'}}
     */

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
                                <Button key={colIndex} onClick={() => handleClick(rowIndex * 4 + colIndex+1)}
                                  sx={{fontSize: 40,
                                    opacity: calendarZoomed && clickedNumber !== buttonNumber ? 0 : 1, border: 3, margin: '0',
                                    textAlign: 'center', 
                                    color: 'black', fontWeight: 'bold', 
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                                    width: 2}}>
                                {buttonNumber}
                              </Button>
                        ))}
                      </Stack>
                  ))}
                
                </Paper>
              </Box>
    </Box>
    );
}
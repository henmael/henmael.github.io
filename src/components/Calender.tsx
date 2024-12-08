import { Typography, Paper, Stack, Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ZoomedButtons {
  [key: number]: boolean;
}

export function Calender(){
    const navigate = useNavigate();
    const buttons = Array.from({ length: 24 }, (_, index) => index + 1);

    const [zoomedButtons, setZoomedButtons] = useState<ZoomedButtons>({});
    const [calendarZoomed, setCalendarZoomed] = useState(false);
    const [clickedNumber, setClickedNumber] = useState<number>(0);

    function handleClick (doorId: number){
      setCalendarZoomed(true);
        setZoomedButtons(prev => ({
          ...prev,
          [doorId]: !prev[doorId]
        }));

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
                <Paper sx={{padding: 2, transition: 'transform 0.5s',
                            transform: calendarZoomed ? 'scale(2)' : 'scale(1)', 
                            position: 'relative', margin: 'auto', }}>
                {Array.from({ length: 6 }, (_, rowIndex) => (
                      <Stack direction="row" spacing={30} mb={2} justifyContent="center" key={rowIndex}>
                        {buttons.slice(rowIndex * 4, rowIndex * 4 + 4).map((buttonNumber, colIndex) => (
                            <Button onClick={() => handleClick(rowIndex * 4 + colIndex+1)} key={buttonNumber} 
                                sx={{fontSize: 40, transition: 'transform 0.5s',
                                  transform: zoomedButtons[rowIndex * 4 + colIndex+1] ? 'scale(30)' : 'scale(1)',
                                  opacity: calendarZoomed && clickedNumber !== buttonNumber ? 0 : 1,
                                  margin: '0 auto', textAlign: 'center'}}>
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
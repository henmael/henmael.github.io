import { Container, Typography, Paper, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Calender(){
    const navigate = useNavigate();
    const buttons = Array.from({ length: 24 }, (_, index) => index + 1);

    function handleClick (doorId: number){
      navigate('/door/'+doorId);
    }

    return (
        <Container>
        <Typography variant="h2" textAlign='center'>
          Simple christmas calender
        </Typography>
        <Paper sx={{width: '60%', margin: '0 auto', padding: 2}}>
        {Array.from({ length: 6 }, (_, rowIndex) => (
            <Stack direction="row" spacing={10} justifyContent="center" key={rowIndex}>
              {buttons.slice(rowIndex * 4, rowIndex * 4 + 4).map((buttonNumber, colIndex) => (
                <Button onClick={() => handleClick(rowIndex * 4 + colIndex+1)} key={buttonNumber} sx={{ width: '50px' }}>
                  {buttonNumber}
                </Button>
              ))}
            </Stack>
          ))}
        </Paper>
    </Container>
    );
}

import { Button, Container, Paper, Stack, Typography } from '@mui/material'

function App() {

  const buttons = Array.from({ length: 24 }, (_, index) => index + 1);

  return (
    <Container>
      <Typography variant="h2" textAlign='center'>
        Simple christmas calender
      </Typography>
      <Paper sx={{width: '60%', margin: '0 auto', padding: 2}}>
      {Array.from({ length: 6 }, (_, rowIndex) => (
          <Stack direction="row" spacing={10} justifyContent="center" key={rowIndex}>
            {buttons.slice(rowIndex * 4, rowIndex * 4 + 4).map((buttonNumber) => (
              <Button key={buttonNumber} sx={{ width: '50px' }}>
                {buttonNumber}
              </Button>
            ))}
          </Stack>
        ))}
      </Paper>
  </Container>
  )
}

export default App

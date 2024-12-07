import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom"
import snow from '../assets/snow.gif'

export function CalenderDoor(){
    const {id} = useParams();
    const text = 'Door ';
    const christmasSong = [
        'Musevisa',
        'Do You Hear What I Hear?',
        'Christmas Time Is Here',
        'Last Christmas',
        'All I Want for Christmas Is You',
        'White Christmas',
        'Going Home for Christmas',
        'Fairytale of New York',
        'Merry Christmas Everyone',
        'Do They Know Its Christmas',
        'Rocking Around the Christmas Tree',
        'Driving Home for Christmas',
        'Underneath the Tree',
        'Its the Most Wonderful Time of the Year',
        'Holly Jolly Christmas',
        'Jingle Bell Rock',
        'Sleigh Ride',
        'Let It Snow! Let It Snow! Let It Snow!',
        'Hey Ho! Det tramper oppå taket',
        'Do They Know Its Christmas?',
        'Jul i Svingen',
        'Skomaker-vise',
        'Vi tenner våre lykter',
        'Its Begninning to Look a Lot like Christmas'
    ]

    const song = christmasSong.filter((_, index) => index === Number(id)-1);

    const christmasNorwegianQuotes = [
        'Det finnes ikke dårlig vær, bare dårlige klær',
        'Jeg fryser så mye at jeg vurderer å bli en isbjørn',
        'Snø er bare frostens måte å si "Hei!"',
        'Kaldt ute? Bare en unnskyldning for å drikke mer kakao!',
        'Når det snør, kan man ikke se hvor man går, men kan alltid ser hvor man har vært!',
        'Det er så kaldt at selv snøfnuggene fryser!',
        'Jeg trodde vinteren var over, men den har bare tatt en pause',
        'Å gå på ski er som å danse med fjellet - du må bare huske å ikke tråkke på tærne!',
        'Vinteren er en tid for å være inne og se på Netflix - eller som jeg liker å kalle det, "skisport"',
        'Det er så kaldt jeg vurderer å ta på meg sokker i sengen!',
        'Snøballkrig? Nei takk, jeg foretrekker snøballforhandlinger',
        'Jeg elsker vinteren! Det er som om naturen har lagt seg til for en lang lur',
        'Vinteren er den beste tiden for å finne ut hvor mange tepper du egentlig trenger',
        'Det er så kaldt at jeg vurderer å ta med meg peisen ut på tur!',
        'Å gå på ski er som å flytte til en ny by - det tar tid å venne seg til det!',
        'Kaldt vær? Jeg kaller det "naturlig air conditioning"',
        'Det er så kaldt at jeg har begynt å lage frostkunst på vinduene mine',
        'Hvorfor gå ut i kulden når du kan være inne og være varm og lat?',
        'Snøen er som glitter fra Gud - men jeg skulle ønske han hadde brukt litt mindre av det!',
        'Vinteren er den perfekte tiden for å oppdage hvor mange lag med klær du kan ha på deg samtidig',
        'Jeg elsker vinteren fordi den gir meg muligheten til å bruke alle de morsomme vinterklærne jeg har kjøpt gjennom årene!',
        'Snøen er som et teppe - hvis det teppet var dynket i iskaldt vann',
        'Jeg elsker alle julelysene som lyser vegen for meg ute!',
        'Jeg elsker vinteren i Norge! Man kan sjekke ut klesstilen for dagen hvor en man ser'
    ]

    const quotes = christmasNorwegianQuotes.filter((_, index) => index === Number(id)-1);

    return (
       <Box display='grid' justifyContent='center' textAlign='center' gap={2}>
                         <img
                src={snow}
                alt="Animated GIF - snow"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
                />
            <Box border={2} width={1000} height={1000} sx={{backgroundColor: 'black'}}>
                <Typography variant="h1">{text+id}</Typography>
                <Typography variant='h4'>Christmas song</Typography>
                <Typography variant='body2'>{song}</Typography>
                <Typography variant='h4'>Quotes for the Day</Typography>
                <Typography variant='body2'>{quotes}</Typography>
            </Box>
       </Box>
    )
}
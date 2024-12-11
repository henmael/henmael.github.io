import { Box, CardMedia, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom"
import advent from '../assets/advent.png'
import christmasCozy from '../assets/christmasSunday.png'
import { initSnowAnimation, stopSnowAnimation } from "../components/SnowFlake";
import { useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

export function CalenderDoor(){
    const {id} = useParams();
    const date = new Date(2024, 11, Number(id));
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

    const juleOppskrift = [
        ['Biscotti med mandler og sjokolade', 'https://www.matprat.no/oppskrifter/gjester/biscotti-med-mandler-og-sjokolade/', 
            'Julen er tiden på å bruke mykje mandler i baksten. Så då virker det naturlig å starte med Biscotti med mandler. Biscotti er den nye favorittkakekjeksen. Enkel og rask å lage, og så smaker den så godt -  både med og uten vin.'],
        ['Peppernøtter', 'https://www.matprat.no/oppskrifter/tradisjon/peppernotter/', 'Peppernøtter er sprø og smakfulle små kjeks, og regnes ofte som en av julens favoritter både av liten og stor.'],
        ['Sirupsnipper', 'https://www.matprat.no/oppskrifter/tradisjon/sirupsnipper/', 'Sirupsnipper hører til blant julebaksten, og er for mange et symbol på julen. Sprø og gode julekaker, som har lang holdbarhet. En porsjon av denne oppskriften, gir ca. 100 sirupsnipper.'],
        ['Fattigmann', 'https://www.matprat.no/oppskrifter/tradisjon/fattigmann/', 'Fattigmann hører til blant de tradisjonelle 7 sorter til jul. Eksklusive små julekaker. En porsjon av denne oppskriften, gir ca. 25 fattigmann-kaker.'],
        ['Krumkaker', 'https://www.matprat.no/oppskrifter/tradisjon/krumkaker/', 'Krumkaker er blant våre aller mest populære julekaker. En porsjon av denne oppskriften gir ca. 25 sprø og knasende gode krumkaker.'],
        ['Smultringer', 'https://www.matprat.no/oppskrifter/tradisjon/smultringer/', 'Smultringer hører julen til, og er for mange et av de tradisjonelle sju slag, som må på bordet i jula. Smultringer smaker nydelig ellers i året også, så lag gjerne dobbel porsjon når du først er i gang. Smultringer er fine å fryse. '],
        ['Berlinerkranser', 'https://www.matprat.no/oppskrifter/tradisjon/berlinerkranser/', 'Berlinerkranser, gode og søte småkaker til jul. En favorittkake for mange til jul.'],
        ['Sarah Bernhardt', 'https://www.matprat.no/oppskrifter/gjester/sarah-bernard/', 'Sarah Bernhardt er en klassiker, og en deilig liten kake. Små bunner av kransekakemasse som toppes med sjokoladekrem, og til slutt dekkes kakene med smeltet sjokolade. Mmm!'],
        ['Riskrem', 'https://www.matprat.no/oppskrifter/tradisjon/riskrem/', 'Riskrem med rød saus er nydelig, og et av høydepunktene på julaften for mange. Hvem finner mandelen og hva er premien i år? '],
        ['Fløtekarameller', 'https://www.matprat.no/oppskrifter/kos/flotekarameller/', 'Seige, gode fløtekarameller er julegodt du garantert blir hekta på! Pynt dem med frysetørket bringebær, tyrkisk pepper, flaksalt eller annet godt, og pakk dem inn i cellofan så har du en kjempefin spiselig julegave. Oppskriften gir ca. 50 stk.'],
        ['Hvite kakemenn', 'https://www.matprat.no/oppskrifter/tradisjon/hvite-kakemenn/', 'Lubne, hvite kakemenn er populære julekaker over store deler av landet. De hvite kakefigurene er også kjent som julemenn, julemanna, gøttekæller eller spekulasi. Sprø utenpå og myke inni, og dekorert med rød konditorfarge.'],
        ['Risboller', 'https://www.matprat.no/oppskrifter/familien/risboller/','Risboller er en gjenganger i norske barneselskaper, og de er dessuten en favoritt blant mange voksne i forbindelse med julen.'],
        ['Ribbe','https://www.matprat.no/oppskrifter/tradisjon/ribbe/','Det er ikke mange norske hjem uten ribbe i løpet av jula, og det store samtaleemnet er om svoren på juleribba blir like sprø i år som i fjor. Under finner du noen lure knep for å få den beste ribba.'],
        ['Brente mandler', 'https://www.matprat.no/oppskrifter/kos/brente-mandler/', 'Brente mandler er en av julens klassikere det oser julestemning av! Gi dem bort som en spiselig julegave eller kos deg med den karamelliserte søtsaken selv.'],
        ['Multekrem', 'https://www.matprat.no/oppskrifter/tradisjon/multekrem/', 'Dette er en av de gode, gamle dessertene. Deilige multer sammen med myk, pisket krem, og gjerne servert med en krumkake, andre julekaker eller kjeks - multekrem går aldri av moten.'],
        ['Hjemmelaget iskrem', 'https://www.matprat.no/oppskrifter/familien/hjemmelaget-iskrem/', 'Hjemmelaget iskrem er slett ikke vanskelig å lage. Det er dessuten en super måte å få brukt opp eggeplommer eller kremfløte som du måtte ha fått til overs.'],
        ['Pepperkaker', 'https://www.matprat.no/oppskrifter/tradisjon/pepperkaker/', 'Hjemmelagde pepperkaker med hjemmelaget pepperkakedeig hører julen til! Pepperkakeverksted på kjøkkenet skaper fin julestemning og smaker utrolig godt i en mørk adventstid. Pepperkaker er en av våre mest populære julekaker.'],
        ['Sandnøtter', 'https://www.matprat.no/oppskrifter/tradisjon/sandnotter/', 'Sandnøtter er perfekte å bake sammen med barna til jul.']
    ]

    const julebakst = juleOppskrift.filter((_, index) => index === Number(id)-1);

    useEffect(() => {
        // Start the snow animation
        initSnowAnimation();

        // Cleanup function
        return () => {
            // Stop the snow animation
            stopSnowAnimation();
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    return (
      <Container fixed sx={{position: 'relative'}}>
         <Box  justifyContent='center' pt={10} borderRadius={10} sx={{backgroundColor: '#d31313', overflow: 'hidden'}}  alignItems='center' gap={2}>

            <Box display='grid' color='white' 
                pb={2} 
                gap={0.8}
                alignContent='center' 
                justifyItems='center' 
                alignItems='center' 
                justifyContent='center'
                textAlign='center'>
                <Typography fontWeight='bold' variant="h2">{text+id}</Typography>
                <Typography fontWeight='bold' variant='h4'>Christmas song</Typography>
                <Typography fontWeight='bold'>{song}</Typography>
                <Typography variant='h4' mt={4} fontWeight='bold'>Quote of the Day</Typography>
                <Typography fontWeight='bold'>{quotes}</Typography>
                <Typography fontWeight='bold' variant='h4' mt={4}>Dagens julebakst</Typography>
                {julebakst.map((oppskrift, indeks) => (
                    <Box key={indeks} sx={{ maxWidth: '100%', overflow: 'hidden' }}>
            <MuiLink 
                component={RouterLink} 
                to={oppskrift[1]} 
                color="rgba(255,255,255)" 
                fontWeight='bold' 
                fontFamily='Roboto, Arial'
                sx={{ display: 'block', marginBottom: 1 }}
            >
                {oppskrift[0]}
            </MuiLink>
            <Typography 
                component="div" 
                fontWeight='bold' 
                mt={2}
                sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textAlign: 'center',
                }}
            >
                {oppskrift[2]}
            </Typography>
        </Box>
                        ))}
                        {date.getDay() === 0 ? (
                                <CardMedia
                                component='img'
                                image={advent}
                                style={{
                                    borderRadius: 10,
                                    marginTop: 20
                                }}
                            />
                        ) : (
                            <CardMedia
                            component='img'
                            image={christmasCozy}
                            style={{
                                borderRadius: 10,
                                marginTop: 20
                            }}
                        />
                        )}

                    </Box>
            </Box>
      </Container>
    )
}


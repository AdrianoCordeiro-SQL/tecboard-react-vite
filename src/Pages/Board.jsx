import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";

const eventCategories = [
  {
    name: "Front-end",
    events: [
      {
        id: 1,
        name: "Workshop React",
        theme: "Front-end",
        date: "20/05/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 2,
        name: "Conference JS",
        theme: "Front-end",
        date: "15/06/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 3,
        name: "Vue.js Masterclass",
        theme: "Front-end",
        date: "10/07/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 4,
        name: "Angular Workshop",
        theme: "Front-end",
        date: "25/07/2025",
        image: "https://placehold.co/236x282",
      },
    ],
  },
  {
    name: "Design",
    events: [
      {
        id: 5,
        name: "UX/UI Design",
        theme: "Design",
        date: "05/08/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 6,
        name: "Figma Masterclass",
        theme: "Design",
        date: "12/08/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 7,
        name: "Design Thinking",
        theme: "Design",
        date: "20/08/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 8,
        name: "Adobe Creative",
        theme: "Design",
        date: "30/08/2025",
        image: "https://placehold.co/236x282",
      },
    ],
  },
  {
    name: "Marketing",
    events: [
      {
        id: 9,
        name: "Marketing Digital",
        theme: "Marketing",
        date: "05/09/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 10,
        name: "SEO Avançado",
        theme: "Marketing",
        date: "15/09/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 11,
        name: "Social Media",
        theme: "Marketing",
        date: "25/09/2025",
        image: "https://placehold.co/236x282",
      },
      {
        id: 12,
        name: "Growth Hacking",
        theme: "Marketing",
        date: "05/10/2025",
        image: "https://placehold.co/236x282",
      },
    ],
  },
];

export function Board() {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#06151A" }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center" }}>
          <img
            src="https://placehold.co/150x50/ffffff/1976d2?text=LOGO"
            alt="Logo"
            style={{ height: "50px" }}
          />
        </Toolbar>
      </AppBar>

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box>
            <img src="https://placehold.co/400x200/e3f2fd/1976d2?text=BANNER" />
          </Box>
          <Typography variant="h3" component="h1" color="#fff">
            Seu hub de eventos de tecnologia
          </Typography>
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Formulário */}
        <Box
          sx={{
            backgroundColor: "#ccc",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: '100%',
            maxWidth: '384px'
          }}
        >

          <Typography>Preencha para criar um evento</Typography>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="name"
                sx={{ position: "static", transform: "none", mb: 1 }}
              >
                Qual o nome do evento?
              </InputLabel>
              <OutlinedInput id="name" placeholder="Summer dev hits" />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="date"
                sx={{ position: "static", transform: "none", mb: 1 }}
              >
                Data do evento
              </InputLabel>
              <OutlinedInput id="date" placeholder="XX/XX/XXXX" />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="theme"
                sx={{ position: "static", transform: "none", mb: 1 }}
              >
                Tema do evento
              </InputLabel>
              <OutlinedInput id="theme" placeholder="Selecione uma opção" />
            </FormControl>

          </Stack>
        </Box>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '1200px' }}>
    {eventCategories.map((category) => (
        <Box key={category.name}>
            <Typography>{category.name}</Typography>
            <Grid container spacing={2} sx={{ maxWidth: '1200px', mx: 'auto' }}>
                {category.events.map((event) => (
                    <Grid item xs={12} sm={6} md={4} key={event.id}>
                        <Card>
                            <CardMedia
                                component={'img'} height='140px' image={event.image} alt={event.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography>{event.name}</Typography>
                                <Typography>{event.date}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    ))}
      </Box>
    </Box>
  );
}

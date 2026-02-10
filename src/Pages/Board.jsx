import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import tecboardLogo from '../assets/tecboard.svg'
import bannerImage from '../assets/banner.png'

const eventCategories = [
  {
    name: 'Front-end',
    events: [
      { id: 1, name: 'Workshop React', theme: 'Front-end', date: '20/05/2025', image: 'https://placehold.co/236x282' },
      { id: 2, name: 'Conference JS', theme: 'Front-end', date: '15/06/2025', image: 'https://placehold.co/236x282' },
      { id: 3, name: 'Vue.js Masterclass', theme: 'Front-end', date: '10/07/2025', image: 'https://placehold.co/236x282' },
      { id: 4, name: 'Angular Workshop', theme: 'Front-end', date: '25/07/2025', image: 'https://placehold.co/236x282' },
    ]
  },
  {
    name: 'Design',
    events: [
      { id: 5, name: 'UX/UI Design', theme: 'Design', date: '05/08/2025', image: 'https://placehold.co/236x282' },
      { id: 6, name: 'Figma Masterclass', theme: 'Design', date: '12/08/2025', image: 'https://placehold.co/236x282' },
      { id: 7, name: 'Design Thinking', theme: 'Design', date: '20/08/2025', image: 'https://placehold.co/236x282' },
      { id: 8, name: 'Adobe Creative', theme: 'Design', date: '30/08/2025', image: 'https://placehold.co/236x282' },
    ]
  },
  {
    name: 'Marketing',
    events: [
      { id: 9, name: 'Marketing Digital', theme: 'Marketing', date: '05/09/2025', image: 'https://placehold.co/236x282' },
      { id: 10, name: 'SEO Avançado', theme: 'Marketing', date: '15/09/2025', image: 'https://placehold.co/236x282' },
      { id: 11, name: 'Social Media', theme: 'Marketing', date: '25/09/2025', image: 'https://placehold.co/236x282' },
      { id: 12, name: 'Growth Hacking', theme: 'Marketing', date: '05/10/2025', image: 'https://placehold.co/236x282' },
    ]
  }
]

const Chip = styled(Box)(({theme}) => ({
  display: 'inline-flex',
  backgroundColor: theme.palette.textSecondary,
  padding: '8px',
  borderRadius: '4px',
  mb: 1
}))

export function Board() {
  return (
    <Box sx={{ height: '100vh', backgroundColor: '#06151A' }}>
      {/* Header */}
      <AppBar position='static' sx={{ py: 2, backgroundColor: '#06151A' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <img
            src={tecboardLogo}
            alt="Logo"
            style={{ height: '28px' }}
          />
        </Toolbar>
      </AppBar>

      {/* Seção de Banner */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '600px',
        background: 'linear-gradient(180deg, #17D9B1 0%, #06151A 100%)',
        justifyContent: 'flex-end',
        position: 'relative',
      }}>
        <Box sx={{ position: 'relative' }}>
          <img src={bannerImage} />
          <Typography
            variant='h1'
            component='h1'
            sx={{
              position: 'absolute',
              bottom: '80px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '652px',
              textAlign: 'center',
            }}
          >
            Seu hub de eventos de tecnologia
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#06151A', py: 8 }}>

        {/* Formulário */}
        <Box sx={{ backgroundColor: '#212121', width: '100%', maxWidth: '384px', py: '32px', px: '28px', borderRadius: 2 }}>
          <Typography>Preencha para criar um evento:</Typography>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel shrink htmlFor='name' sx={{ position: 'static', transform: 'none', mb: 1 }}>Qual o nome do evento?</InputLabel>
              <OutlinedInput id='name' placeholder='Summer dev hits' fullWidth sx={{ height: '36px' }} />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel shrink htmlFor='date' sx={{ position: 'static', transform: 'none', mb: 1 }}>Data do evento</InputLabel>
              <OutlinedInput id='date' placeholder='XX/XX/XXXX' fullWidth sx={{ height: '36px' }} />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel shrink htmlFor='theme' sx={{ position: 'static', transform: 'none', mb: 1 }}>Tema do evento</InputLabel>
              <Select
                id='theme'
                defaultValue=''
                displayEmpty
                fullWidth
                sx={{ height: '36px' }}
              >
                <MenuItem value='' disabled>
                  Selecione uma opção
                </MenuItem>
                <MenuItem value='Front-end'>Front-end</MenuItem>
                <MenuItem value='Design'>Design</MenuItem>
                <MenuItem value='Marketing'>Marketing</MenuItem>
              </Select>
            </FormControl>

            <Button sx={{ alignSelf: 'center' }}>Criar evento</Button>
          </Stack>
        </Box>

        {/* Lista de eventos */}
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1200px', mt: '60px', gap: '64px' }}>
          {eventCategories.map((category) => (
            <Box key={category.name}>
              <Typography>{category.name}</Typography>

              <Grid container spacing={3} sx={{ maxWidth: '1200px', mx: 'auto' }}>
                {category.events.map((event) => (
                  <Grid item xs={12} sm={6} md={4} key={event.id}>
                    <Card sx={{ width: '282px' }}>
                      <CardMedia component='img' height='236px' image={event.image} alt={event.name} />
                      <CardContent sx={{ flexGrow: 1, py: 3, px: 2, backgroundColor: '#212121' }}>
                        <Chip>
                          <Typography variant='caption'>{event.theme}</Typography>
                        </Chip>
                        <Typography>{event.date}</Typography>
                        <Typography>{event.name}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
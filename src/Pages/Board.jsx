import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { eventSchema } from "../schema.js";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import tecboardLogo from "../assets/tecboard.svg";
import bannerImage from "../assets/banner.png";
import {
  QueryClient,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";

const Chip = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  backgroundColor: theme.palette.textSecondary,
  padding: "8px",
  borderRadius: "4px",
  mb: 1,
}));

export function Board() {
  const QueryClient = useQueryClient();
  const [page, setPage] = useState(1);

  async function getEvents(page = 0) {
    const response = await fetch(
      `http://localhost:3000/events?_page=${page}&_per_page=4`,
    );
    return response.json();
  }

  const {
    data: eventsData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["getEvents", page],
    queryFn: () => getEvents(page),
    keepPreviousData: true,
  });

  const prevPage = eventsData?.prev ?? null;
  const nextPage = eventsData?.next ?? null;
  const items = eventsData?.data ?? [];

  async function getInfiniteEvents({ pageParam }) {
    const response = await fetch(
      `http://localhost:3000/events?_page=${pageParam}&_per_page=4`,
    );
    return response.json();
  }

  const {
    data: eventsInfiniteData,
    isPending: isInfinitePending,
    isError: isInfiniteError,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["getInfiniteQuery"],
    queryFn: getInfiniteEvents,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });

  async function postEvents(event) {
    const response = await fetch("http://localhost:3000/events", {
      method: "POST",
      body: JSON.stringify(event),
    });
    return response.json();
  }

  const postEventMutation = useMutation({
    mutationKey: ["postEvents"],
    mutationFn: postEvents,
    onSuccess: async () => {
      await QueryClient.invalidateQueries({ queryKey: ["getEvents"] });
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      name: "",
      date: "",
      theme: "",
      speakers: [{ name: "" }],
    },
  });

  function handleOnSubmit(data) {
    postEventMutation.mutate(data);
    console.log({ message: data });
  }

  console.log({ message: errors });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "speakers",
  });

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#06151A" }}>
      {/* Header */}
      <AppBar position="static" sx={{ py: 2, backgroundColor: "#06151A" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <img src={tecboardLogo} alt="Logo" style={{ height: "28px" }} />
        </Toolbar>
      </AppBar>

      {/* Seção de Banner */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          height: "600px",
          background: "linear-gradient(180deg, #17D9B1 0%, #06151A 100%)",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <img src={bannerImage} />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              position: "absolute",
              bottom: "80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "652px",
              textAlign: "center",
            }}
          >
            Seu hub de eventos de tecnologia
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#06151A",
          py: 8,
        }}
      >
        {/* Formulário */}
        <Box
          component="form"
          onSubmit={handleSubmit(handleOnSubmit)}
          sx={{
            backgroundColor: "#212121",
            width: "100%",
            maxWidth: "384px",
            py: "32px",
            px: "28px",
            borderRadius: 2,
          }}
        >
          <Typography>Preencha para criar um evento:</Typography>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="name"
                sx={{ position: "static", transform: "none", mb: 1 }}
              >
                Qual o nome do evento?
              </InputLabel>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <OutlinedInput
                    id="name"
                    placeholder="Summer dev hits"
                    fullWidth
                    sx={{ height: "36px", color: "white" }}
                    {...field}
                  />
                )}
              />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="date"
                sx={{ position: "static", transform: "none", mb: 1 }}
              >
                Data do evento
              </InputLabel>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <OutlinedInput
                    id="date"
                    placeholder="XX/XX/XXXX"
                    fullWidth
                    sx={{ height: "36px", color: "white" }}
                    {...field}
                  />
                )}
              />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="theme"
                sx={{ position: "static", transform: "none", mb: 1 }}
              >
                Tema do evento
              </InputLabel>
              <Controller
                name="theme"
                control={control}
                render={({ field }) => (
                  <Select
                    id="theme"
                    defaultValue=""
                    displayEmpty
                    fullWidth
                    sx={{ height: "36px" }}
                    {...field}
                  >
                    <MenuItem value="" disabled>
                      Selecione uma opção
                    </MenuItem>
                    <MenuItem value="Front-end">Front-end</MenuItem>
                    <MenuItem value="Design">Design</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            <Box>
              <Typography sx={{ mb: 1, color: "rgba(255, 255, 255, 0.7)" }}>
                Palestrantes
              </Typography>

              <Stack spacing={2}>
                {fields.map(
                  (
                    field,
                    index, // Loop para criar os campos
                  ) => (
                    <Stack
                      direction="row"
                      spacing={1}
                      key={field.id}
                      alignItems="center"
                    >
                      <OutlinedInput
                        placeholder="Nome do palestrante"
                        fullWidth
                        sx={{ height: "36px", color: "white" }}
                        {...register(`speakers.${index}.name`)} // Conecta ao formulário
                      />

                      <IconButton
                        onClick={() => remove(index)}
                        aria-label="remover"
                        sx={{ color: "#ef5350" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  ),
                )}
              </Stack>

              <Button
                startIcon={<AddIcon />}
                onClick={() => append({ name: "" })} // Adiciona novo campo
                sx={{ mt: 1, textTransform: "none", color: "#0c0e0d" }}
              >
                Adicionar Palestrante
              </Button>
            </Box>

            <Button type="submit" sx={{ alignSelf: "center" }}>
              Criar evento
            </Button>
          </Stack>
        </Box>

        {/* Lista de eventos */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "1200px",
            mt: "60px",
            gap: "64px",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              type="button"
              onClick={() => prevPage && setPage(prevPage)}
              disabled={isFetching || page === 1 || !prevPage}
            >
              Página anterior
            </Button>

            <Button
              type="button"
              onClick={() => nextPage && setPage(nextPage)}
              disabled={isFetching || !nextPage}
            >
              Próxima página
            </Button>
          </Box>
          <Grid container spacing={3} sx={{ maxWidth: "1200px", mx: "auto" }}>
            {!isLoading &&
              items.map((event) => (
                <Grid item xs={12} sm={6} md={4} key={event.id}>
                  <Card sx={{ width: "282px" }}>
                    <CardMedia
                      component="img"
                      height="236px"
                      image={event.image}
                      alt={event.name}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        py: 3,
                        px: 2,
                        backgroundColor: "#212121",
                      }}
                    >
                      <Chip>
                        <Typography variant="caption">{event.theme}</Typography>
                      </Chip>
                      <Typography>{event.date}</Typography>
                      <Typography>{event.name}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>

          <Grid container spacing={3} sx={{ maxWidth: "1200px", mx: "auto" }}>
            {!isInfiniteError &&
              !isInfinitePending &&
              eventsInfiniteData.pages.map((group, index) => (
                <React.Fragment key={index}>
                  {group.data.map((event) => (
                    <Grid item xs={12} sm={6} md={4} key={event.id}>
                      <Card sx={{ width: "282px" }}>
                        <CardMedia
                          component={"img"}
                          height="236px"
                          image={event.image}
                          alt={event.name}
                        />
                        <CardContent
                          sx={{
                            flexGrow: 1,
                            py: 3,
                            px: 2,
                            backgroundColor: "#212121",
                          }}
                        >
                          <Chip>
                            <Typography variant="caption">
                              {event.theme}
                            </Typography>
                          </Chip>
                          <Typography>{event.date}</Typography>
                          <Typography variant="h6">{event.name}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </React.Fragment>
              ))}
          </Grid>
          <Button onClick={() => fetchNextPage()}>Carregar mais</Button>
        </Box>
      </Box>
    </Box>
  );
}

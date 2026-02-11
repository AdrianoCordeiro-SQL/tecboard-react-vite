import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

export function Form() {
  const { register, handleSubmit, watch } = useForm();

  const nameWatch = watch("name");

  function handleOnSubmit(data) {
    console.log("message:", data);
  }

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#fff" }}>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <input {...register("name")} type="text" placeholder="Nome" />
        <input {...register("lastName")} type="text" placeholder="Sobrenome" />
        <input {...register("age")} type="text" placeholder="Idade" />

        <button type="submit">Submeter</button>
        <span>{nameWatch}</span>
      </form>
    </Box>
  );
}

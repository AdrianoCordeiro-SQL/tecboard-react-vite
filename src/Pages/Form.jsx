import { Box } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";

export function Form() {
  const { register, handleSubmit, watch, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "fruits",
    control,
  });

  const nameWatch = watch("name");

  function handleOnSubmit(data) {
    console.log("message:", data);
  }

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#fff" }}>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <button type="button" onClick={() => append()}>Adicionar</button>

        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <input
                {...register(`fruits.${index}.item`)}
                type="text"
                placeholder="Fruta"
              />
              <button type="button" onClick={() => remove(index)}>Remover</button>
            </li>
          ))}
        </ul>

        <button type="submit">Submeter</button>
        <span>{nameWatch}</span>
      </form>
    </Box>
  );
}

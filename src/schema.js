import * as z from 'zod';

export const eventSchema = z.object({
    name: z.string().trim().min(4, { message: "Nome inválido! Preencha corretamente" }),
    date: z.coerce.date().or(z.string()), 
    theme: z.string().min(1, "Selecione um tema"),
    speakers: z.array(z.object({
        name: z.string().min(1, "Nome do palestrante obrigatório")
    }))
});
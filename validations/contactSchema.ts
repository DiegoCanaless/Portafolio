import * as Yup from "yup";

export const ContactSchema = Yup.object({
    name: Yup.string()
        .min(3, "Mínimo 3 caracteres")
        .required("El nombre es obligatorio"),

    email: Yup.string()
        .email("Email inválido")
        .required("El email es obligatorio"),

    message: Yup.string()
        .min(10, "El mensaje debe tener al menos 10 caracteres")
        .required("El mensaje es obligatorio"),
});
"use client";

import CardContact from "../ui/CardContact";
import { FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactSchema } from "@/validations/contactSchema";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    return (
        <section
            id="Contact"
            className="min-h-screen flex flex-col justify-center items-center px-5"
        >
            {/* TÍTULO */}
            <div className="text-center mb-10">
                <h3 className="text-lg mt-10">¡ Hablemos !</h3>
                <p className="text-slate-400 text-xs mt-2">
                    ¿Tienes un proyecto en mente o solo quieres saludar?
                </p>
            </div>

            {/* CONTENIDO */}
            <div className="w-full max-w-5xl flex flex-col gap-6 lg:flex-row lg:items-center">
                {/* DATOS DE CONTACTO */}
                <div className="w-full flex flex-col gap-3 lg:w-1/3">
                    <CardContact
                        icon={<FaEnvelope size={18} className="text-secondary" />}
                        title="EMAIL"
                        value="diegocanales112@gmail.com"
                    />
                    <CardContact
                        icon={<FaPhone size={18} className="text-sky-400" />}
                        title="WHATSAPP"
                        value="+5492612430088"
                    />
                </div>

                {/* FORMULARIO */}
                <div className="w-full lg:w-2/3">
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            message: "",
                        }}
                        validationSchema={ContactSchema}
                        onSubmit={async (values, { resetForm, setSubmitting }) => {
                            try {
                                await emailjs.send(
                                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                                    {
                                        name: values.name,
                                        email: values.email,
                                        message: values.message,
                                    },
                                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                                );

                                resetForm();
                            } catch (error) {
                                console.error("EmailJS error:", error);
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="flex flex-col gap-4 bg-gray-900 p-5 rounded-xl border border-slate-700">
                                {/* NOMBRE */}
                                <div className="flex flex-col gap-1">
                                    <label className="sr-only">Nombre y Apellido</label>
                                    <Field
                                        name="name"
                                        type="text"
                                        placeholder="Martín Pérez"
                                        className="input-base"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="p"
                                        className="text-red-500 text-xs"
                                    />
                                </div>

                                {/* EMAIL */}
                                <div className="flex flex-col gap-1">
                                    <label className="sr-only">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="martin@email.com"
                                        className="input-base"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="p"
                                        className="text-red-500 text-xs"
                                    />
                                </div>

                                {/* MENSAJE */}
                                <div className="flex flex-col gap-1">
                                    <label className="sr-only">Mensaje</label>
                                    <Field
                                        as="textarea"
                                        name="message"
                                        placeholder="Ingrese su consulta"
                                        rows={4}
                                        className="input-base resize-none"
                                    />
                                    <ErrorMessage
                                        name="message"
                                        component="p"
                                        className="text-red-500 text-xs"
                                    />
                                </div>

                                {/* BOTÓN */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center justify-center gap-2 h-10 w-full rounded-lg bg-secondary transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                                    <FaPaperPlane />
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}

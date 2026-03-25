"use client";

import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactSchema } from "@/validations/contactSchema";
import emailjs from "@emailjs/browser";
import Toast, { ToastType } from "../ui/ToastForm";

export default function ContactForm() {
    const [toast, setToast] = useState<{
        type: ToastType;
        message: string;
    } | null>(null);

    return (
        <>
            {toast && (
                <Toast
                    type={toast.type}
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}

            <section id="Contact" className="min-h-screen flex items-center justify-center px-4" >
                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12">

                    <div className="flex flex-col justify-center">
                        <p className="text-secondary font-medium mb-2">Contacto</p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Tenés un proyecto en mente?</h2>

                        <p className="text-gray-400 max-w-md mb-6">Estoy disponible para trabajar en nuevos proyectos,mejorar productos existentes o colaborar en equipo.</p>

                        <div className="flex flex-col gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-secondary" />
                                <span>diegocanales112@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhone className="text-secondary" />
                                <span>Disponible para contacto</span>
                            </div>
                        </div>
                    </div>

                    {/* 🧾 FORMULARIO */}
                    <div className="w-full">
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                message: "",
                            }}
                            validationSchema={ContactSchema}
                            onSubmit={async (values, { resetForm, setSubmitting }) => {
                                setToast({
                                    type: "loading",
                                    message: "Enviando mensaje...",
                                });

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

                                    setToast({
                                        type: "success",
                                        message: "Mensaje enviado correctamente",
                                    });

                                    resetForm();
                                } catch (error) {
                                    setToast({
                                        type: "error",
                                        message: "Ocurrió un error al enviar el mensaje",
                                    });
                                } finally {
                                    setSubmitting(false);
                                }
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="flex flex-col gap-4 bg-gray-900 p-6 rounded-xl border border-slate-700 shadow-lg">

                                    <Field name="name" type="text" placeholder="Nombre completo" className="input-base" />
                                    <ErrorMessage name="name" component="p" className="text-red-500 text-xs" />

                                    <Field name="email" type="email" placeholder="Email" className="input-base" />
                                    <ErrorMessage name="email" component="p" className="text-red-500 text-xs" />

                                    <Field as="textarea" name="message" placeholder="Contame sobre tu proyecto..." rows={4} className="input-base resize-none" />
                                    <ErrorMessage name="message" component="p" className="text-red-500 text-xs" />

                                    <button type="submit" disabled={isSubmitting} className="flex items-center justify-center gap-2 h-11 w-full rounded-lg bg-secondary hover:scale-[1.02] transition disabled:opacity-50" >
                                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                                        <FaPaperPlane />
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                </div>
            </section>
        </>
    );
}

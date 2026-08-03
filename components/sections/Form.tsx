"use client";

import { useState } from "react";
import { FaCheck, FaEnvelope, FaPaperPlane, FaPhone, FaRegCopy, FaLocationDot } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactSchema } from "@/validations/contactSchema";
import emailjs from "@emailjs/browser";
import Toast, { ToastType } from "../ui/ToastForm";
import Reveal from "../ui/Reveal";

export default function ContactForm() {
    const [toast, setToast] = useState<{
        type: ToastType;
        message: string;
    } | null>(null);

    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        // Email armado en runtime (ofuscado): el string completo no aparece en el
        // HTML ni de forma literal en el bundle, para evitar que bots lo extraigan.
        const email = `${"diegocanales112"}@${"gmail"}.${"com"}`;

        try {
            await navigator.clipboard.writeText(email);
        } catch {
            // Fallback para navegadores sin Clipboard API
            const textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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

                    <Reveal direction="right" className="flex flex-col justify-center">
                        <p className="text-secondary font-medium mb-2">Contacto</p>

                        <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Buscás un desarrollador que aporte desde el primer día?</h2>

                        <p className="text-gray-400 max-w-md mb-6">Busco mi próximo desafío en un equipo. ¿Hablamos?</p>

                        <div className="flex flex-col gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-secondary" />
                                <button
                                    type="button"
                                    onClick={copyEmail}
                                    title="Copiar correo"
                                    className="group flex items-center gap-2 cursor-pointer transition-colors hover:text-secondary"
                                >
                                    <span className="text-white font-medium">Copiar correo</span>
                                    {copied ? (
                                        <FaCheck className="text-secondary" aria-hidden="true" />
                                    ) : (
                                        <FaRegCopy className="text-gray-400 group-hover:text-secondary transition-colors" aria-hidden="true" />
                                    )}
                                </button>
                                {copied && (
                                    <span aria-live="polite" className="text-xs text-secondary">¡Copiado!</span>
                                )}
                            </div>

                            <div className="flex items-center gap-3">
                                <FaLocationDot className="text-secondary" />
                                <span>Mendoza, Argentina — disponible para trabajo remoto</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhone className="text-secondary" />
                                <span>Disponible para entrevistas</span>
                            </div>
                        </div>
                    </Reveal>

                    {/* 🧾 FORMULARIO */}
                    <Reveal direction="left" className="w-full">
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
                                } catch {
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

                                    <Field as="textarea" name="message" placeholder="Hola, te escribo por el puesto de..." rows={4} className="input-base resize-none" />
                                    <ErrorMessage name="message" component="p" className="text-red-500 text-xs" />

                                    <button type="submit" disabled={isSubmitting} className="flex items-center justify-center gap-2 h-11 w-full rounded-lg bg-secondary hover:scale-[1.02] transition disabled:opacity-50" >
                                        {isSubmitting ? "Enviando..." : "Escribime por la posición"}
                                        <FaPaperPlane />
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </Reveal>

                </div>
            </section>
        </>
    );
}

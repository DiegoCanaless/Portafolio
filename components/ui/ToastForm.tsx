"use client";

import { useEffect } from "react";

/* ===== TIPOS ===== */
export type ToastType = "success" | "error" | "loading";

interface ToastProps {
    type?: ToastType;
    message: string;
    onClose: () => void;
}

export default function Toast({
    type = "success",
    message,
    onClose,
}: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const styles: Record<ToastType, string> = {
        success: "bg-emerald-500 text-white",
        error: "bg-red-500 text-white",
        loading: "bg-gray-800 text-white",
    };

    return (
        <div
            role="status"
            aria-live="polite"
            className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg animate-fade-in ${styles[type]}`}
        >
            {type === "loading" && (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            )}

            <span className="text-sm font-medium">{message}</span>
        </div>
    );
}

import { ReactNode } from "react";

interface CardContactProps{
    icon: ReactNode;
    title: string;
    value: string;
}

export default function CardContact({
    icon,
    title,
    value
}: CardContactProps ){
    return(
        <>
            <article className="flex items-center gap-4 w-full border rounded-xl p-4 bg-gray-900 border-slate-700 lg:w-80">
                <div className="p-2 flex justify-center bg-secondary/10 rounded-lg">
                    {icon}
                </div>
                
                <div className="flex flex-col items-start">
                    <span className="font-extralight text-slate-400 text-xs">{title}</span>
                    <p className="text-xs text-white">{value}</p>
                </div>
            </article>
        </>
    )
}
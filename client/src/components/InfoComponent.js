import React from 'react';
import { format } from 'date-fns';

const currentDate = new Date();

export const InfoComponent = ({ folio, nombre, giroActivo, observaciones, fecha_termino, tercera_edad }) => {
    let colorAll = "";

    if (observaciones) {
        colorAll = 'rojo ring-rojo fill-rojo'; // Rojo
    } else if (tercera_edad) {
        colorAll = 'azul ring-azul fill-azul'; // Azul
    } else if (new Date(fecha_termino) >= currentDate) {
        colorAll = 'verde ring-verde fill-verde'; // Verde
    } else {
        colorAll = 'gris ring-gris fill-gris'; // Gris
    }

    const observacionesText = observaciones ? observaciones : 'Sin observaciones';

    const formattedFechaTermino = format(new Date(fecha_termino), 'dd/MM/yyyy');

    return (
        <div className={`mx-5 my-3 rounded-md shadow-lg w-96 ring-1 ${colorAll}`}>
            <div className={`flex justify-end items-end rounded-t-md px-4 py-1 bg-opacity-30 bg-${colorAll} ring-1`}>
                <h4 className="text-lg font-Foco-Corp-Bold">Folio: 000000{folio}</h4>
            </div>
            <div className="px-4 pt-3">
                <p className="text-sm justify-center items-center mb-0.5">
                    <span className="font-Foco-Corp-Bold text-sm uppercase">{nombre}</span>
                </p>
                <p className="text-sm">
                    <span className="font-Foco-Corp-Bold">Giro/Activo:</span>
                </p>
                <p className="text-sm -mt-2">
                    <span className="font-Foco-Corp">{giroActivo}</span>
                </p>
                <p className="text-sm">
                    <span className="font-Foco-Corp-Bold">Observaciones:</span>
                </p>
                <p className="text-sm -mt-2">
                    <span className="font-Foco-Corp">{observacionesText}</span>
                </p>
            </div>
            <div className="flex flex-1 px-4 py-1">
                <p className="text-sm mr-2">
                    <span className="font-Foco-Corp-Bold">Vigencia:</span>
                </p>
                <p className="text-sm mt-0.5 font-Foco-Corp-Bold">{formattedFechaTermino}</p>
                <div className="ml-auto">
                    <button className="text-black font-Foco-Corp-Bold flex items-center hover:opacity-70">
                        VER TODO
                        <svg className={`ml-2  h-5 w-5`} version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.00 32.00" xmlSpace="preserve" transform="matrix(1, 0, 0, -1, 0, 0) rotate(0)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M19.7,16.7l-5,5C14.5,21.9,14.3,22,14,22s-0.5-0.1-0.7-0.3 c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5C20.1,15.7,20.1,16.3,19.7,16.7z"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

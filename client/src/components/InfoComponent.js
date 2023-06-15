import React from 'react';
import { format } from 'date-fns';

const currentDate = new Date();

export const InfoComponent = ({ folio, nombre, giroActivo, observaciones, fecha_termino, tercera_edad }) => {
    let colorAll = "";

    if (observaciones) {
        colorAll = 'rojo'; // Rojo
    } else if (tercera_edad) {
        colorAll = 'azul'; // Azul
    } else if (new Date(fecha_termino) >= currentDate) {
        colorAll = 'verde'; // Verde
    } else {
        colorAll = 'gris'; // Gris
    }

    return (
        <div className={`bg-white rounded-md shadow-md border-2 border-${colorAll} w-96 ring-2 ring-${colorAll}`}>
            <div className={`flex justify-end items-end rounded-t-md px-4 py-1 bg-opacity-30 bg-${colorAll} ring-2 ring-inherit ring-${colorAll}`}>
                <h4 className="text-lg font-semibold">Folio: 000000{folio}</h4>
            </div>
            <div className="p-4">
                <p className="text-sm justify-center items-center">
                    <span className="font-Foco-Corp-Bold text-sm uppercase">{nombre}</span> 
                </p>
                <p className="text-sm">
                    <span className="font-Foco-Corp-Bold">Giro/Activo:</span>
                </p>
                <p className="text-sm">
                    <span className="font-Foco-Corp">{giroActivo}</span> 
                </p>
                <p className="text-sm">
                    <span className="font-Foco-Corp-Bold">Observaciones:</span>
                </p>
                <p className="text-sm">
                    <span className="font-Foco-Corp">{observaciones}</span>
                </p>
            </div>
            <div className="flex flex-1 p-4">
                <p className="text-sm mr-2">
                    <span className="font-Foco-Corp-Bold">Vigencia:</span>
                </p>
                <p className="text-sm">{fecha_termino}</p>
                <div className="ml-auto">
                    <button className="text-black font-Foco-Corp-Bold flex items-center hover:opacity-70">
                        VER TODO
                        <img src={require('../assets/images/circle-arrow.png')} alt="Img" className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};
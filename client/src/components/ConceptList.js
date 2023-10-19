import React from "react";

export const ConceptList = ({importe, unidad, metraje, diasTotalesTrabajados}) => {
  return (
    <tr className="font-Foco-Corp text-sm text-black antialiased text-center">
      <td className="w-2/12 px-2 py-1">{'$' + importe + '.00'}</td>
      <td className="w-1/12 px-2 py-1">1</td>
      <td className="w-1/12 px-2 py-1">
        {metraje}
      </td>
      <td className="w-1/12 px-2 py-1">
        {diasTotalesTrabajados}
      </td>
      <td className="w-1/12 px-2 py-1">{'$' + importe + '.00'}</td>
      <td className="w-6/12 px-2 py-1 text-left">{unidad.toLowerCase()}</td>
    </tr>
  );
};

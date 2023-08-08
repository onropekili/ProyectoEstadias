const Table = ({ data, headers, numColumns }) => {
    return (
      <div className='overflow-auto'>
        <table className='w-full h-full'>
          <thead>
            <tr className='border-b bg-gray-100 font-Foco-Corp text-lg text-morado'>
              {headers.map((header, index) => (
                <th key={index} className='sticky top-0 text-center font-semibold p-2 bg-gray-100'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData, index) => (
              <tr key={index}>
                {rowData.slice(0, numColumns).map((cellData, cellIndex) => (
                  <td key={cellIndex} className='text-center p-2  font-Foco-Corp text-lg border-t-8 border-b-8 border-white bg-gray-50 '>
                    {cellData}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
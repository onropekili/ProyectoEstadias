import React, {useState } from 'react';
import Header from "../../components/Header";
import Sidebar from '../../components/Sidebar';
import TabButton from '../../components/TabButton';
import Table from '../../components/Table';
import BarChart from '../../components/BarChart';
import DatePickerInput from "../../components/DatePickerInput";
import { IoGrid, IoArrowBack} from 'react-icons/io5';

function IncomeView() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [activeTab, setActiveTab] = useState('Dia');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  
  const table1Data = [
    ['08:00', '21/06/2023', '1', '$ 3000'],
    ['09:00', '21/06/2023', '1', '$ 3000'],
    ['10:00', '21/06/2023', '1', '$ 3000'],
    ['10:00', '21/06/2023', '1', '$ 3000'],
    ['10:00', '21/06/2023', '1', '$ 3000'],
    ['10:00', '21/06/2023', '1', '$ 3000'],
    ['10:00', '21/06/2023', '1', '$ 3000'],
  ];

  const table2Data = [
    ['Hace 1 días', '21/06/2023', '8', '$3000'],
    ['Hace 2 días', '21/06/2023', '8', '$3000'],
    ['Hace 3 días', '21/06/2023', '8', '$3000'],
    ['Hace 4 días', '21/06/2023', '8', '$3000'],
    ['Hace 5 días', '21/06/2023', '8', '$3000'],
  ];

  const table3Data = [
    ['Enero', '01/01/2023', '01/01/2023', '20', '$2000'],
    ['Enero', '01/01/2023', '01/01/2023', '20', '$2000'],
    ['Enero', '01/01/2023', '01/01/2023', '20', '$2000'],
    ['Enero', '01/01/2023', '01/01/2023', '20', '$2000'],
    ['Enero', '01/01/2023', '01/01/2023', '20', '$2000'],
  ];

  const table4Data = [
    ['2023', '01/01/2023', '01/01/2023', '6', '$3000'],
    ['2023', '01/01/2023', '01/01/2023', '6', '$3000'],
    ['2023', '01/01/2023', '01/01/2023', '6', '$3000'],
    ['2023', '01/01/2023', '01/01/2023', '6', '$3000'],
    ['2023', '01/01/2023', '01/01/2023', '6', '$3000'],
  ];

  const dataChartDay = {
    labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'],
    datasets: [
      {
        label: 'Ingresos',
        data: [100, 200, 150, 300, 250],
        backgroundColor: 'rgba(155, 80, 192, 0.6)',
        borderColor: 'rgba(155, 80, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const dataChartWeek = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        label: 'Ingresos semanales',
        data: [100, 200, 150, 300],
        backgroundColor: 'rgba(155, 80, 192, 0.6)',
        borderColor: 'rgba(155, 80, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const dataChartMonth = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Ingresos mensuales',
        data: [100, 200, 150, 300, 250, 350],
        backgroundColor: 'rgba(155, 80, 192, 0.6)',
        borderColor: 'rgba(155, 80, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const dataChartYear = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Ingresos mensuales',
        data: [100, 200, 150, 300, 250, 350],
        backgroundColor: 'rgba(155, 80, 192, 0.6)',
        borderColor: 'rgba(155, 80, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Dia':
        return <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4'>
          <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md' style={{ height:'57vh' }}>
            <Table data={table1Data} headers={['Hora', 'Fecha', 'Cédulas', 'Monto Total']} numColumns={4} />
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Ingresos totales de hoy</span>
            <BarChart data={dataChartDay} chartId="chart1" />
          </div>
        </div>
      case 'semana':
        return <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4'>
          <div className='w-full flex flex-col' style={{ height:'57vh' }}>
            <div>
              <span className='text-xl text-left font-Foco-Corp-Bold text-morado'>Filtrar por fecha</span>
              <div className='flex flex-col lg:grid lg:grid-cols-2 gap-5 mt-2 mb-4'>
                <div className="flex flex-col w-full">
                  <label className="font-Foco-Corp-Bold text-gris text-lg mb-1">
                    Fecha Inicio
                  </label>
                  <DatePickerInput
                    setSelectedDate={''}
                    selectedDate={''}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-Foco-Corp-Bold text-gris text-lg mb-1">
                    Fecha Termino
                  </label>
                  <DatePickerInput
                    setSelectedDate={''}
                    selectedDate={''}
                  />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md overflow-auto'>
              <Table data={table2Data} headers={['Día', 'Fecha', 'Cédulas', 'Monto Total']} numColumns={4} />
            </div>
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Ingresos totales de la semana</span>
            <BarChart data={dataChartWeek} chartId="chart1" />
          </div>
        </div>;
      case 'mes':
        return <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4'>
          <div className='w-full flex flex-col' style={{ height:'57vh' }}>
            <div>
              <span className='text-xl text-left font-Foco-Corp-Bold text-morado'>Filtrar por fecha</span>
              <div className='flex flex-col lg:grid lg:grid-cols-2 gap-5 mt-2 mb-4'>
                <div className="w-full ">
                  <div className="flex flex-col w-full">
                    <label className="font-Foco-Corp-Bold text-gris text-lg mb-1">
                      Fecha Inicio
                    </label>
                    <DatePickerInput
                      setSelectedDate={''}
                      selectedDate={''}
                    />
                  </div>
                </div>
              <div className="w-full">
                <div className="flex flex-col">
                  <label className="font-Foco-Corp-Bold text-gris text-lg mb-1">
                    Fecha Termino
                  </label>
                  <DatePickerInput
                    setSelectedDate={''}
                    selectedDate={''}
                  />
                </div>
              </div>
              </div>
            </div>
            <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md overflow-auto'>
              <Table data={table3Data} headers={['Mes', 'Fecha inicio', 'Fecha final', 'Cédulas', 'Monto Total']} numColumns={5} />
            </div>
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Ingresos totales del mes</span>
            <BarChart data={dataChartMonth} chartId="chart1" />
          </div>
        </div>;
      case 'anual':
        return <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4'>
          <div className='w-full flex flex-col' style={{ height:'57vh' }}>
            <div>
              <span className='text-xl text-left font-Foco-Corp-Bold text-morado'>Filtrar por fecha</span>
              <div className='flex flex-col lg:grid lg:grid-cols-2 gap-5 mt-2 mb-4'>
                <div className="w-full ">
                  <div className="flex flex-col w-full">
                    <label className="font-Foco-Corp-Bold text-gris text-lg mb-1">
                      Fecha Inicio
                    </label>
                    <DatePickerInput
                      setSelectedDate={''}
                      selectedDate={''}
                    />
                  </div>
                </div>
              <div className="w-full">
                <div className="flex flex-col">
                  <label className="font-Foco-Corp-Bold text-gris text-lg mb-1">
                    Fecha Termino
                  </label>
                  <DatePickerInput
                    setSelectedDate={''}
                    selectedDate={''}
                  />
                </div>
              </div>
              </div>
            </div>
            <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md overflow-auto'>
              <Table data={table4Data} headers={['Año', 'Fecha inicio', 'Fecha final', 'Cédulas', 'Monto Total']} numColumns={5} />
            </div>
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Ingresos totales del año</span>
            <BarChart data={dataChartYear} chartId="chart1" />
          </div>
        </div>;
      default:
        return null;
    }
  };

  return (
    <>
      <Header/>
      <div className='flex flex-row'>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <div className='w-full bg-white overflow-auto'>
          <div className='px-4 lg:px-8 pt-8 flex flex-row justify-between items-center'>
            <h3 className="flex items-center text-2xl md:text-3xl font-Foco-Corp-Bold text-gris 2xl:text-4xl">
            <IoArrowBack className="text-4xl font-Foco-Corp-Bold mr-2"/>
              Ingresos
            </h3>
            <button className='md:hidden' onClick={toggleSidebar}>
              {isOpen ? <IoGrid className="text-3xl text-verde hover:text-opacity-80" /> : <IoGrid className="text-3xl text-naranja hover:text-opacity-80" />}
            </button>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4 px-4 lg:px-8 pt-6">
            <TabButton
              label={{ count: '$2', text: 'Ingresos del día' }}
              isActive={activeTab === 'Dia'}
              onClick={() => handleTabClick('Dia')}
            />
            <TabButton
              label={{ count: 3000, text: 'Ingresos Semanales' }}
              isActive={activeTab === 'semana'}
              onClick={() => handleTabClick('semana')}
            />
            <TabButton
              label={{ count: 3000, text: 'Ingresos Mensuales' }}
              isActive={activeTab === 'mes'}
              onClick={() => handleTabClick('mes')}
            />
            <TabButton
              label={{ count: 3000, text: 'Ingresos Anuales' }}
              isActive={activeTab === 'anual'}
              onClick={() => handleTabClick('anual')}
            />
          </div>
          <div className='px-4 lg:px-8 pt-6 mb-2'>
            <div>{renderContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomeView;
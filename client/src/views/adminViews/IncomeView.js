import React, {useState } from 'react';
import Header from "../../components/Header";
import Sidebar from '../../components/Sidebar';
import TabButton from '../../components/TabButton';
import Table from '../../components/Table';
import BarChart from '../../components/BarChart';
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
    ['Celda 1,1', 'Celda 1,2', 'Celda 1,3', 'Celda 1,4'],
    ['Celda 2,1', 'Celda 2,2', 'Celda 2,3', 'Celda 2,4'],
    ['Celda 2,1', 'Celda 2,2', 'Celda 2,3', 'Celda 2,4'],
  ];

  const table2Data = [
    ['Celda A,1', 'Celda A,2', 'Celda A,3', 'Celda A,4'],
    ['Celda B,1', 'Celda B,2', 'Celda B,3', 'Celda B,4'],
  ];

  const table3Data = [
    ['Celda X,1', 'Celda X,2', 'Celda X,3', 'Celda X,4', 'Celda X,4'],
    ['Celda X,1', 'Celda X,2', 'Celda X,3', 'Celda X,4', 'Celda X,4'],
    
  ];

  const table4Data = [
    ['Celda Z,1', 'Celda Z,2', 'Celda Z,3', 'Celda Z,4'],
    // Agrega más filas según sea necesario
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
        return <div className='grid grid-cols-2 gap-4'>
          <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md' style={{ height:'57vh' }}>
            <Table data={table1Data} headers={['Hora', 'Fecha', 'Cédulas', 'Monto Total']} numColumns={4} />
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Hace 5 días</span>
            <BarChart data={dataChartDay} chartId="chart1" />
          </div>
        </div>
      case 'semana':
        return <div className='grid grid-cols-2 gap-4'>
          <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md' style={{ height:'57vh' }}>
            <Table data={table2Data} headers={['Hora', 'Fecha', 'Cédulas', 'Monto Total']} numColumns={4} />
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Hace 5 días</span>
            <BarChart data={dataChartWeek} chartId="chart1" />
          </div>
        </div>;
      case 'mes':
        return <div className='grid grid-cols-2 gap-4'>
          <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md' style={{ height:'57vh' }}>
            <Table data={table3Data} headers={['Hora', 'Fecha inicio', 'Fecha final', 'Cédulas', 'Monto Total']} numColumns={5} />
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Hace 5 días</span>
            <BarChart data={dataChartMonth} chartId="chart1" />
          </div>
        </div>;
      case 'anual':
        return <div className='grid grid-cols-2 gap-4'>
          <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md' style={{ height:'57vh' }}>
            <Table data={table4Data} headers={['Hora', 'Fecha', 'Cédulas', 'Monto Total']} numColumns={4} />
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Hace 5 días</span>
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
          <div className='px-8 pt-8 flex flex-row justify-between items-center'>
            <h3 className="flex items-center text-2xl md:text-3xl font-Foco-Corp-Bold text-gris 2xl:text-4xl">
            <IoArrowBack className="text-4xl font-Foco-Corp-Bold mr-2"/>
              Ingresos
            </h3>
            <button className='md:hidden' onClick={toggleSidebar}>
              {isOpen ? <IoGrid className="text-3xl text-verde hover:text-opacity-80" /> : <IoGrid className="text-3xl text-naranja hover:text-opacity-80" />}
            </button>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4 px-8 pt-6">
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
          <div className='px-8 pt-6'>
            <div>{renderContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomeView;
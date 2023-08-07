import React, {useState } from 'react';
import Header from "../../components/Header";
import Sidebar from '../../components/Sidebar';
import TabButton from '../../components/TabButton';
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

  const renderContent = () => {
    switch (activeTab) {
      case 'Dia':
        return <div className='grid grid-cols-2 gap-4'>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
          
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            
          </div>
        </div>
      case 'semana':
        return <div className='grid grid-cols-2 gap-4'>
        <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
        
        </div>
        <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
          
        </div>
      </div>;
      case 'mes':
        return <div className='grid grid-cols-2 gap-4'>
        <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
        
        </div>
        <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
          
        </div>
      </div>;
      case 'anual':
        return <div className='grid grid-cols-2 gap-4'>
        <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
        
        </div>
        <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
          
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
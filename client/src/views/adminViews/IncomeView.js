import React, {useEffect, useState } from 'react';
import Header from "../../components/Header";
import Sidebar from '../../components/Sidebar';
import TabButton from '../../components/TabButton';
import Table from '../../components/Table';
import BarChart from '../../components/BarChart';
import DatePickerInput from "../../components/DatePickerInput";
import { IoGrid, IoArrowBack} from 'react-icons/io5';
import axios from 'axios';

function IncomeView() {

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [table2Data, setTable2Data] = useState([]);
  const [table3Data, setTable3Data] = useState([]);
  const [table4Data, setTable4Data] = useState([]);
  const [dayGraph, setDayGraph] = useState([]);
  const dayLabels = [dayGraph[0]?.dia_semana, dayGraph[1]?.dia_semana, dayGraph[2]?.dia_semana, dayGraph[3]?.dia_semana, dayGraph[4]?.dia_semana];
  const dayIncome = [dayGraph[0]?.total_semana, dayGraph[1]?.total_semana, dayGraph[2]?.total_semana, dayGraph[3]?.total_semana, dayGraph[4]?.total_semana];
  const [weekGraph, setWeekGraph] = useState([]);
  const weekLabels = ['Esta semana', 'Semana pasada', 'Hace 3 semanas', 'Hace 4 semanas'];
  const weekIncome = [weekGraph[0]?.total_semana, weekGraph[1]?.total_semana, weekGraph[2]?.total_semana, weekGraph[3]?.total_semana];
  const [monthGraph, setMonthGraph] = useState([]);
  const monthLabels = ['Mes actual', 'Mes anterior', 'Hace 3 meses', 'Hace 4 meses', 'Hace 5 meses', 'Hace 6 meses'];
  const monthIncome = [monthGraph[6]?.total_mes, monthGraph[5]?.total_mes, monthGraph[4]?.total_mes, monthGraph[3]?.total_mes, monthGraph[2]?.total_mes, monthGraph[1]?.total_mes];
  const [twelveMonthGraph, setTwelveMonthGraph] = useState([]);
  const twelveMonthLabels = ['Mes actual', 'Mes anterior', 'Hace 3 meses', 'Hace 4 meses', 'Hace 5 meses', 'Hace 6 meses', 'Hace 7 meses', 'Hace 8 meses', 'Hace 9 meses', 'Hace 10 meses', 'Hace 11 meses', 'Hace 12 meses'];
  const twelveMonthIncome = [twelveMonthGraph[11]?.total_mes, twelveMonthGraph[10]?.total_mes, twelveMonthGraph[9]?.total_mes, twelveMonthGraph[8]?.total_mes, twelveMonthGraph[7]?.total_mes, twelveMonthGraph[6]?.total_mes, twelveMonthGraph[5]?.total_mes, twelveMonthGraph[4]?.total_mes, twelveMonthGraph[3]?.total_mes, twelveMonthGraph[2]?.total_mes, twelveMonthGraph[1]?.total_mes, twelveMonthGraph[0]?.total_mes];


  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_HOST}:4000/admin/getIncome`)
    .then((res) => {
      setData(res.data);
      setTables(res.data);
      setDayGraph(res.data.graphInfo.dayGraph);
      setWeekGraph(res.data.graphInfo.weekGraph);
      setMonthGraph(res.data.graphInfo.monthGraph);
      setTwelveMonthGraph(res.data.graphInfo.yearGraph);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [activeTab, setActiveTab] = useState('semana');

  const setTables = (data) => {
    console.log(data);

    let { weeklyInfo, monthlyInfo, yearlyInfo } = data;

    weeklyInfo = weeklyInfo || [];
    monthlyInfo = monthlyInfo || [];
    yearlyInfo = yearlyInfo || [];

    for(const period of weeklyInfo) {
      const format = [[period.formato_dias, period.fecha, period.cantidad_ordenes, period.suma_montos]]
      console.log(format)
      setTable2Data(format);
     }
    for(const period of monthlyInfo) {
      const format = [[period.formato_meses, period.fecha_inicio, period.fecha_termino, period.cantidad_ordenes, period.suma_montos]]
      console.log(format)
      setTable3Data(format);
    }
    for(const period of yearlyInfo) {
      const format = [[period.formato_anios, period.fecha_inicio, period.fecha_termino, period.cantidad_ordenes, period.suma_montos]]
      console.log(format)
      setTable4Data(format);
    }
    // Resto de tu código
  };

  const setCharts = (data) => {
    const {weekGraph, month} = data;

  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const dataChart2 = {
    labels: weekLabels,
    datasets: [
      {
        label: 'Ingresos semanales',
        data: weekIncome,
        backgroundColor: 'rgba(155, 80, 192, 0.6)',
        borderColor: 'rgba(155, 80, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const dataChart3 = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Ingresos mensuales',
        data: monthIncome,
        backgroundColor: 'rgba(155, 80, 192, 0.6)',
        borderColor: 'rgba(155, 80, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const dataChartYear = {
    labels: twelveMonthLabels,
    datasets: [
      {
        label: 'Ingresos mensuales',
        data: twelveMonthIncome,
        backgroundColor: 'rgba(155, 80, 192, 0.6)',
        borderColor: 'rgba(155, 80, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'semana':
        return <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4'>
          <div className='w-full flex flex-col' style={{ height:'57vh' }}>
            <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md overflow-auto'>
              <Table data={table2Data} headers={['Día', 'Fecha', 'Cédulas', 'Monto Total']} numColumns={4} />
            </div>
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Ingresos totales de la semana</span>
            <BarChart data={dataChart2} chartId="chart1" />
          </div>
        </div>;
      case 'mes':
        return <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4'>
          <div className='w-full flex flex-col' style={{ height:'57vh' }}>
            <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md overflow-auto'>
              <Table data={table3Data} headers={['Mes', 'Fecha inicio', 'Fecha final', 'Cédulas', 'Monto Total']} numColumns={5} />
            </div>
          </div>
          <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
            <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Ingresos totales del mes</span>
            <BarChart data={dataChart3} chartId="chart1" />
          </div>
        </div>;
      case 'anual':
        return <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4'>
          <div className='w-full flex flex-col' style={{ height:'57vh' }}>
            <div className='w-full flex flex-col border-2 border-gray-200 rounded-md gap-4 shadow-md overflow-auto'>
              <Table data={table4Data} headers={['Fecha inicio', 'Fecha final', 'Cédulas', 'Monto Total']} numColumns={4} />
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
          <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 px-4 lg:px-8 pt-6">
            <TabButton
              label={{ count: `$${data?.topInfo[0].total_pagado_semana_actual || 0}`, text: 'Ingresos Semanales' }}
              isActive={activeTab === 'semana'}
              onClick={() => handleTabClick('semana')}
            />
            <TabButton
              label={{ count: `$${data?.topInfo[0].total_pagado_mes_actual || 0}`, text: 'Ingresos Mensuales' }}
              isActive={activeTab === 'mes'}
              onClick={() => handleTabClick('mes')}
            />
            <TabButton
              label={{ count: `$${data?.topInfo[0].total_pagado_anio_actual || 0}`, text: 'Ingresos Anuales' }}
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
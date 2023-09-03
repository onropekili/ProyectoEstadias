import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Sidebar from '../../components/Sidebar';
import BarChart from '../../components/BarChart';
import { IoGrid, IoPerson, IoChevronForwardCircle, IoPeopleSharp, IoStorefrontSharp} from 'react-icons/io5';
import { GiCash } from 'react-icons/gi';
import axios from 'axios';

function DashBoard_Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [dayGraph, setDayGraph] = useState([]);
  const dayLabels = [dayGraph[0]?.dia_semana, dayGraph[1]?.dia_semana, dayGraph[2]?.dia_semana, dayGraph[3]?.dia_semana, dayGraph[4]?.dia_semana];
  const dayIncome = [dayGraph[0]?.total_semana, dayGraph[1]?.total_semana, dayGraph[2]?.total_semana, dayGraph[3]?.total_semana, dayGraph[4]?.total_semana];
  const [weekGraph, setWeekGraph] = useState([]);
  const weekLabels = ['Esta semana', 'Semana pasada', 'Hace 3 semanas', 'Hace 4 semanas'];
  const weekIncome = [weekGraph[0]?.total_semana, weekGraph[1]?.total_semana, weekGraph[2]?.total_semana, weekGraph[3]?.total_semana];
  const [monthGraph, setMonthGraph] = useState([]);
  const monthLabels = ['Mes actual', 'Mes anterior', 'Hace 3 meses', 'Hace 4 meses', 'Hace 5 meses', 'Hace 6 meses'];
  const monthIncome = [monthGraph[6]?.total_mes, monthGraph[5]?.total_mes, monthGraph[4]?.total_mes, monthGraph[3]?.total_mes, monthGraph[2]?.total_mes, monthGraph[1]?.total_mes];
  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_HOST}:4000/admin/getDashboardInformation`)
    .then((res) => {
      console.log(res.data);
      setData(res.data.topInfo);
      setDayGraph(res.data.dayGraph);
      setWeekGraph(res.data.weekGraph);
      setMonthGraph(res.data.monthGraph);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const dataChart1 = {
    labels: dayLabels,
    datasets: [
      {
        label: 'Ingresos',
        data: dayIncome,
        backgroundColor: 'rgba(155, 80, 192, 0.6)',
        borderColor: 'rgba(155, 80, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const dataChart2 = {
    labels: weekLabels,
    datasets: [
      {
        label: 'Ingresos semanales',
        data: weekIncome,
        backgroundColor: 'rgba(74, 193, 224, 0.6)',
        borderColor: 'rgba(74, 193, 224, 1)',
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
        backgroundColor: 'rgba(112, 212, 75, 0.6)',
        borderColor: 'rgba(112, 212, 75, 1)',
        borderWidth: 2,
      },
    ],
  };


  return (
    <>
      <Header/>
      <div className='flex flex-row'>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <div className='w-full bg-white overflow-auto'>
          <div className='px-4 lg:px-8 pt-8 flex flex-row justify-between items-center'>
            <h3 className="text-2xl md:text-3xl font-Foco-Corp-Bold text-gris 2xl:text-4xl">
              Bienvenido Administrador
            </h3>
            <button className='md:hidden' onClick={toggleSidebar}>
              {isOpen ? <IoGrid className="text-3xl text-verde hover:text-opacity-80" /> : <IoGrid className="text-3xl text-naranja hover:text-opacity-80" />}
            </button>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4 px-4 lg:px-8 pt-6">
            <div className=" bg-naranja bg-opacity-80 border border-naranja text-white font-semibold rounded-md shadow-md">
              <div className='flex flex-row py-4 px-4 justify-between '>
                <div className="w-3/4 flex flex-col gap-2">
                  <span className='text-4xl'>{data?.total_usuarios || 0}</span>
                  <span className='text-sm'>Ejecutivos registrados</span>
                </div>
                <div className="w-1/4 text-center ">
                  <IoPerson className="text-7xl text-naranja"/>
                </div>
              </div>
              <button className="w-full flex justify-center items-center gap-2 py-1 rounded-b-md  bg-naranja hover:bg-opacity-60 text-white font-semibold">
                <span className='text-sm'>Ver todos</span>
                <IoChevronForwardCircle className="text-2xl"/>
              </button>
            </div>
            <div className=" bg-verde bg-opacity-80 border border-verde text-white font-semibold rounded-md shadow-md">
              <div className='flex flex-row py-4 px-4 justify-between '>
                <div className="w-3/4 flex flex-col gap-2">
                    <span className='text-4xl'>{data?.total_comercios || 0}</span>
                    <span className='text-sm'>Comercios registrados</span>
                </div>
                <div className="w-1/4 text-center ">
                  <IoStorefrontSharp className="text-7xl text-verde"/>
                </div>
              </div>
              <button className="w-full flex justify-center items-center gap-2 py-1 rounded-b-md  bg-verde hover:bg-opacity-60 text-white font-semibold">
                <span className='text-sm'>Ver todos</span>
                <IoChevronForwardCircle className="text-2xl"/>
              </button>
            </div>
            <div className=" bg-azul bg-opacity-80 border border-azul text-white font-semibold rounded-md shadow-md">
              <div className='flex flex-row py-4 px-4 justify-between '>
                <div className="w-3/4 flex flex-col gap-2">
                    <span className='text-4xl'>{data?.total_comerciantes || 0}</span>
                    <span className='text-sm'>Comerciantes registrados</span>
                </div>
                <div className="w-1/4 text-center ">
                  <IoPeopleSharp className="text-7xl text-azul"/>
                </div>
              </div>
              <button className="w-full flex justify-center items-center gap-2 py-1 rounded-b-md  bg-azul hover:bg-opacity-60 text-white font-semibold">
                <span className='text-sm'>Ver todos</span>
                <IoChevronForwardCircle className="text-2xl"/>
              </button>
            </div>
            <div className=" bg-morado bg-opacity-80 border border-morado text-white font-semibold rounded-md shadow-md">
              <div className='flex flex-row py-4 px-4 justify-between '>
                <div className="w-3/4 flex flex-col gap-2">
                    <span className='text-4xl'>{data?.total_ventas_hoy || 0}</span>
                    <span className='text-sm'>Ingresos totales</span>
                </div>
                <div className="w-1/4 text-center ">
                  <GiCash className="text-7xl text-morado"/>
                </div>
              </div>
              <button className="w-full flex justify-center items-center gap-2 py-1 rounded-b-md  bg-morado hover:bg-opacity-60 text-white font-semibold">
                <span className='text-sm'>Ver todos</span>
                <IoChevronForwardCircle className="text-2xl"/>
              </button>
            </div>
          </div>
          <div className='px-4 lg:px-8 py-4 2xl:py-8'>
            <h3 className="text-xl font-Foco-Corp-Bold text-gris 2xl:text-2xl">
              Últimos ingresos
            </h3>
          </div>
          <div className='flex flex-col lg:grid lg:grid-cols-3 px-4 lg:px-8 gap-5'>
            <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
              <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Hace 5 días</span>
              <BarChart data={dataChart1} chartId="chart1" />
            </div>
            <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
              <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Últimas 4 semanas</span>
              <BarChart data={dataChart2} chartId="chart2" />
            </div>
            <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
              <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Últimos 6 meses</span>
              <BarChart data={dataChart3} chartId="chart3" />
            </div>
          </div>
          <div className='px-4 lg:px-8 flex flex-row justify-between items-center pt-6 2xl:pt-8 mb-5 2xl:mb-10'>
            <button className="w-full h-10 flex justify-center items-center gap-2 py-1 rounded-b-md  bg-naranja bg-opacity-80 hover:bg-naranja text-white font-semibold">
              <span className='text-sm'>Ver todos los ingresos</span>
              <IoChevronForwardCircle className="text-2xl"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard_Admin;
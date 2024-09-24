import ReactApexChart from "react-apexcharts"

const IndicadorTI = () => {

    const options = {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: ['DIÁRIO', 'SEMANAL', 'MENSAL'],
        },
      };
    
      const series = [
        {
          name: 'Series 1',
          data: [37, 185, 1032],
        },
      ];
    
 
    return (
        <>
        <h1>Indicadores de Serviços T.I</h1>
        <ReactApexChart
        options={options}
        series={series}
        type="bar" // Alterando o tipo para "bar"
        height={400}
      />
        </>
    )
}


 
export default IndicadorTI;
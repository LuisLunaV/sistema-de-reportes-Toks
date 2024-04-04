export const getInformation = async()=>{
    const resp = await fetch('../../json/ejemplo_sucursales.json');
    const { response } = await resp.json();
    return response;
}
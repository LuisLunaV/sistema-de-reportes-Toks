export const getInformation = async()=>{
    const resp = await fetch('../../json/Ejemplo Response Portal.json');
    const data = await resp.json();
    console.log(data)
}
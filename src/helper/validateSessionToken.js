export const validateSessionToken =()=>{
    const token = sessionStorage.getItem('token');

    if( !token ){
        window.location.replace('/login');
    }
};
import { api } from './index.js';

const postAuthentication = async (data) => {
    try {
      const resp = await fetch(`${api.url}${api.auth}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      if (resp.ok) {
        const data = await resp.json();
        return data;
      } else{
        const error = await resp.json();
        throw error;
      } 
    } catch (error) {
      throw error;
    }
  };

  export{
    postAuthentication
  }
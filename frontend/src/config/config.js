const config = {
    API_URL: process.env.REACT_APP_API_URL 
      ? (process.env.REACT_APP_API_URL.endsWith('/') 
          ? `${process.env.REACT_APP_API_URL}api/tasks` 
          : `${process.env.REACT_APP_API_URL}/api/tasks`)
      : "http://localhost:5000/api/tasks"
  };
  
  export default config;  
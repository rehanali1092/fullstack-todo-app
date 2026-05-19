const config = {
<<<<<<< HEAD
    API_URL: process.env.REACT_APP_API_URL 
      ? (process.env.REACT_APP_API_URL.endsWith('/') 
          ? `${process.env.REACT_APP_API_URL}api/tasks` 
          : `${process.env.REACT_APP_API_URL}/api/tasks`)
      : "http://localhost:5000/api/tasks"
=======
    API_URL: "http://localhost:5000/api/tasks"
>>>>>>> 14ce64eb513b29b3c7ef325765c59590c858231b
  };
  
  export default config;  
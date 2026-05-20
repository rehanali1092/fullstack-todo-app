const config = {
  API_URL: process.env.REACT_APP_API_URL
    ? 
      `${process.env.REACT_APP_API_URL.replace(/\/$/, "")}/api/tasks`
    : 
      "http://localhost:3001/api/tasks",
};

export default config;


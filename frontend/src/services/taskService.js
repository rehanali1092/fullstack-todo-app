

import axios from "axios";
import config from "../config/config";

const API_URL = config.API_URL;

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching tasks:", error.message);
    throw new Error("Error fetching tasks");
  }
};

export const addTask = async (title, description) => {
  try {
    const response = await axios.post(API_URL, { title, description });
    return response.status === 201 ? response.data : null;
  } catch (error) {
    console.error("❌ Error adding task:", error.message);
    throw new Error("Error adding task");
  }
};

export const markTaskAsDone = async (id) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`);
    return response.status === 200;
  } catch (error) {
    console.error("❌ Error marking task as done:", error.message);
    throw new Error("Error marking task as done");
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.status === 200;
  } catch (error) {
    console.error("❌ Error deleting task:", error.message);
    throw new Error("Error deleting task");
  }
};
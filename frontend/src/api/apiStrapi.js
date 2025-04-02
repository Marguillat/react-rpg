import axios from "axios";

const api = axios.create({
  // ajoute en mode env
  baseURL: "http://localhost:1337/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const strapiLoginLocal = async (userCredentials) => {
  try {
    const response = await api.post("/auth/local", userCredentials);
    // axios transforme automatiquement en json
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const strapiRegisterLocal = async (newUserCredentials) => {
  try {
    const response = await api.post("/auth/local/register", newUserCredentials);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { strapiLoginLocal, strapiRegisterLocal };

import axios from "axios";

export const getAllProducts = () => {
  const result = axios
    .get("https://api.radsup.com/v1/product/fa/products", {
      headers: {
        "X-API-KEY": process.env.API_KEY,
      },
    })
    .then((res) => res.data.data)
    .catch((err) => console.log(err));
  return result;
};

export const getProduct = (id: string) => {
  const result = axios
    .get(`https://api.radsup.com/v1/product/fa/products/${id}`, {
      headers: {
        "X-API-KEY": process.env.API_KEY,
      },
    })
    .then((res) => res.data.data)
    .catch((err) => console.log(err));
  return result;
};

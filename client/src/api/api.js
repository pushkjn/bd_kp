import axios from "axios";

export const getAllValue = async (value) => {
    const { data } = await axios.get(`http://localhost:3000/api/${value}/all`);
    return data;
};

export const getValueById = async (id, value) => {
    const {data} = await axios.get(`http://localhost:3000/api/${value}/${id}`);
    return data;
};

export const addValue = async (car, value) => {
    await axios.post(`http://localhost:3000/api/${value}/add`, car);
};

export const deleteValue = async (id, value) => {
    await axios.delete(`http://localhost:3000/api/${value}/delete/${id}`)
};
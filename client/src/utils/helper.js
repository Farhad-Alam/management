import axios from "axios";
import { toast } from "react-toastify";

export const getData = async () => {
  const { data } = await axios.get(`/get`);
  return data;
};
export const getSingleData = async (id) => {
  console.log(id);
  const { data } = await axios.get(`/get/${id}`);
  return data;
};

export const postData = async (formData) => {
  try {
    const { name, sector, term } = formData;

    const { data } = await axios.post(
      `/create`,
      { name, sector, term },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateData = async (userId, formData) => {
  try {
    const { name, sector, term } = formData;

    const { data } = await axios.put(
      `/update/${userId}`,
      { name, sector, term },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteData = async (formId) => {
  try {
    const { data } = await axios.delete(`/delete/${formId}`);

    toast.success(data.msg);
    return data;
  } catch (error) {
    console.log(error);
  }
};

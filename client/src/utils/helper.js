import axios from "axios";

export const getData = async () => {
  const { data } = await axios.get(`/api/v1/get`);
  return data;
};
export const getSingleData = async (id) => {
  console.log(id);
  const { data } = await axios.get(
    `/api/v1/get/${id}`
  );
  return data;
};

export const postData = async (formData) => {
  try {
    const { name, sector, term } = formData;

    const { data } = await axios.post(
      `/api/v1/create`,
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
      `/api/v1/update/${userId}`,
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
    const { data } = await axios.delete(
      `/api/v1/delete/${formId}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

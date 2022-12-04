import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getData, getSingleData, updateData } from "../utils/helper";
import { toast } from "react-toastify";

const UpdateForm = ({ formData, setFormData, formId }) => {
  const queryClient = useQueryClient();
  const UpdateMutaion = useMutation((newData) => updateData(formId, newData), {
    onSuccess: async () => {
      queryClient.prefetchQuery("data", getData);
    },
  });

  const { data } = useQuery(["data", formId], () => getSingleData(formId));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updated = Object.assign({}, data, formData);

    if (updated) {
      await UpdateMutaion.mutate(updated);
      toast.success("Data updated Succesfully");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="py-2 px-4 flex items-center space-x-2 w-full ">
          <label htmlFor="">Name :</label>
          <input
            type="text"
            name="name"
            defaultValue={data?.data.name}
            onChange={setFormData}
            className="py-2 px-4 outline-none border-b"
            placeholder="Enter your name"
          />
        </div>
        <div className="py-2 px-4 space-y-4">
          <label htmlFor="">Sectors :</label>
          <select
            onChange={setFormData}
            name="sector"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue>{data?.data.sector}</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Construction materials">
              Construction materials
            </option>
            <option value="Electronics and Optics">
              Electronics and Optics
            </option>
            <option value="Bakery">Bakery</option>
            <option value="Office">Office</option>
            <option value="Project furniture">Project furniture</option>
            <option value="Machinery components">Machinery components</option>
            <option value="Machinery equipment/tools">
              Machinery equipment/tools
            </option>
            <option value="Advertising">Advertising</option>
            <option value="Clothing">Clothing</option>
            <option value="Plastic processing technology">
              Plastic processing technology
            </option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex items-center px-4 py-2">
          <label htmlFor="">Agree of Terms :</label>
          <div className="flex items-center space-x-4 ml-4">
            <div className="space-x-2 text-sm">
              <input
                type="radio"
                value="Yes"
                defaultChecked={data?.data.term === "Yes"}
                onChange={setFormData}
                name="term"
                className="rounded-full appearance-none w-3 h-3 border border-gray-300 bg-white  checked:bg-green-500 checked:border-gray-500 duration-300 "
              />
              <label htmlFor="">Yes</label>
            </div>
            <div className="space-x-2 text-sm">
              <input
                type="radio"
                value="No"
                defaultChecked={data?.data.term === "No"}
                onChange={setFormData}
                name="term"
                className="rounded-full appearance-none w-3 h-3 border border-gray-300 bg-white  checked:bg-red-500 checked:border-gray-500 duration-300 "
              />
              <label htmlFor="">No</label>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="btn ">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;

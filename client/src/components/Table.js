import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useQuery, useQueryClient } from "react-query";
import { deleteData, getData } from "../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { toggleFormAction, toggleUpdate } from "../redux/slices/createSlices";

const Table = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { toggleForm } = useSelector((state) => state.data);
  const { data } = useQuery("data", getData);

  const handleUpdate = (id) => {
    dispatch(toggleFormAction(id));

    if (toggleForm) {
      dispatch(toggleUpdate(id));
    }
  };

  const handleDelete = async (id) => {
    await deleteData(id);
    await queryClient.prefetchQuery("data", getData);
  };

  return (
    <div className="my-10">
      <table className="table-auto mx-auto text-sm sm:text-base">
        <thead className="">
          <tr className="bg-gray-700 text-white">
            <th className="sm:px-12 py-3">Name</th>
            <th className="sm:px-12 py-3">Sectors</th>
            <th className="sm:px-12 py-3">Agree of Terms</th>
            <th className="sm:px-12 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 text-center">
          {data &&
            data.data.map((item) => (
              <tr key={item._id}>
                <td className="sm:px-10 py-2">{item.name}</td>
                <td className="sm:px-10 py-2">{item.sector}</td>
                <td className="sm:px-10 py-2">
                  {item.term === "Yes" ? (
                    <span className="bg-green-400 px-4 p-[1px] font-semibold text-sm tracking-wide text-gray-700 rounded-sm ">
                      {item.term}
                    </span>
                  ) : (
                    <span className="bg-red-400 px-4 p-[1px] font-semibold text-sm tracking-wide text-gray-700 rounded-sm ">
                      {item.term}
                    </span>
                  )}
                </td>
                <td className="px-10 py-2">
                  <span className="flex space-x-2 text-lg justify-center items-center">
                    <FiEdit
                      onClick={() => handleUpdate(item._id)}
                      className="text-green-500 scaleAnim"
                    />
                    <MdDeleteOutline
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 scaleAnim"
                    />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

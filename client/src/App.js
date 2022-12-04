import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import Table from "./components/Table";
import { toggleFormAction } from "./redux/slices/createSlices";

const App = () => {
  const dispatch = useDispatch();
  const { toggleForm } = useSelector((state) => state.data);

  return (
    <div className="container mx-auto p-1 sm:p-0">
      <h1 className="text-4xl font-semibold font-SansPro py-20 text-center">
        Data Management
      </h1>

      {/* Add Data Btn */}
      <button
        onClick={() => dispatch(toggleFormAction())}
        className="btn tracking-wide flex items-center space-x-2 "
      >
        <span>Add Sectors</span>
        <AiOutlineUserAdd />
      </button>

      {/* Form */}
      {toggleForm && <Form />}

      {/* Table */}
      <Table />
    </div>
  );
};

export default App;

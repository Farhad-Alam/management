import React, { useReducer } from "react";
import AddForm from "./AddForm";
import { useSelector } from "react-redux";
import UpdateForm from "./UpdateForm";

const Form = () => {
  const { formId } = useSelector((state) => state.data);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   sector: "",
  //   term: "",
  // });
  const formReducer = (state, e) => {
    return {
      ...state,
      [e.target.name]: e.target.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  return (
    <div>
      {formId
        ? UpdateForm({ formData, setFormData, formId })
        : AddForm({ formData, setFormData })}
    </div>
  );
};

export default Form;

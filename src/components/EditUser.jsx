import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [editBooks, setEditBooks] = useState({
    Book_title: "",
    Book_Author: "",
    ISBN_Number: "",
    Publication: "",
    Author_Biography: "",
  });

  // fetch data when component mounts
  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo/${id}`
      );
      setEditBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    formik.setValues(editBooks); //Set formik values to fetched data
  }, [editBooks]);

  const formik = useFormik({
    initialValues: editBooks,
    // enableReinitialize: true,
    validationSchema: Yup.object({
      Book_title: Yup.string()
        .min(3, "Book Name must be at least 3 characters")
        .required("Book Name is required"),

      Book_Author: Yup.string()
        .min(3, "Author Name must be at least 3 characters")
        .required("Author Name is required"),

      ISBN_Number: Yup.string()
        .min(10, "ISBN must be at least 10 characters")
        .max(13, "ISBN must be at most 13 characters")
        .required("ISBN is required"),

      Publication: Yup.date().required("Date of publish is required"),

      Author_Biography: Yup.string()
        .min(10, "Book Description must be at least 10 characters")
        .required("Book Description is required"),
    }),

    onSubmit: async (values) => {
      try {
        const response = await axios.put(
          `https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo/${id}`, // Use PUT request to update existing data
          values
        );
        console.log(response);
        navigate("/"); // navigate to home page
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="container mt-5">
        <h1> Edit User Details</h1>
        <form onSubmit={formik.handleSubmit}>
          {" "}
          {/* Add onSubmit handler here */}
          <div className="mb-3 mt-5">
            <label className="form-label">
              Book Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="Book_title"
              required
              value={formik.values.Book_title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Book_title && formik.errors.Book_title ? (
              <p className="text-danger">{formik.errors.Book_title}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Book Author<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="Book_Author"
              required
              value={formik.values.Book_Author}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Book_Author && formik.errors.Book_Author ? (
              <p className="text-danger">{formik.errors.Book_Author}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">
              ISBN Number<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="ISBN_Number"
              required
              value={formik.values.ISBN_Number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.ISBN_Number && formik.errors.ISBN_Number ? (
              <p className="text-danger">{formik.errors.ISBN_Number}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Date of Publish<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="Publication"
              required
              value={formik.values.Publication}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Publication && formik.errors.Publication ? (
              <p className="text-danger">{formik.errors.Publication}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Author Biography<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="Author_Biography"
              required
              value={formik.values.Author_Biography }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Author_Biography &&
            formik.errors.Author_Biography ? (
              <p className="text-danger">{formik.errors.Author_Biography}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={
              formik.isSubmitting //Disable button while submitting
            }
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUser;

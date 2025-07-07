import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../api/axios';
import { toast } from 'react-toastify';

export default function ProjectCategoryForm({ onCreated }) {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {

    try {
      setLoading(true);
      const response = await api.post('/project-categories', data);
      toast.success('Category created Succesfully!');
      reset();
      setLoading(false);
      if (onCreated) onCreated();
      const modalEl = document.getElementById("projectCategoryModal");
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance?.hide();
    } catch (err) {
      setLoading(false);
      if (err.response?.status === 422) {
        const errors = err.response.data.errors;
        if (errors?.name) {
          setError("name", {
            type: "server",
            message: errors.name[0]
          });
        }
      } else {
        console.error("Unexpected error:", err);
      }
    }

  };

  useEffect(() => {
    const modalEl = document.getElementById("projectCategoryModal");
    const handleClose = () => reset();
    modalEl?.addEventListener("hidden.bs.modal", handleClose);
    return () => modalEl?.removeEventListener("hidden.bs.modal", handleClose);
  }, [reset]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-body">

          <div className="row">
            <div className="col-md-12">
              <div>
                <label htmlFor="basiInput" className="form-label">Category Name  <span
                  style={{ color: "red" }}>*</span></label>
                <input className={errors.name ? "form-control is-invalid" : "form-control"} {...register("name", { required: "Name is required" })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>
            </div>
          </div>

        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-light"
            data-bs-dismiss="modal"
            onClick={() => reset()}
          >
            Close
          </button>

          <button type="submit" className="btn btn-primary " disabled={loading?true:false}>{loading?'Saveing..':'Save'}</button>
        </div>
      </form>
    </div>
  )
}

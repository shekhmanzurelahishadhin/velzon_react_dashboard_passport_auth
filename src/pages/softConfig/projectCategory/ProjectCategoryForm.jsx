import React from 'react'

export default function ProjectCategoryForm() {
  return (
    <div>
      <form action="">
        <div className="row">
          <div className="col-md-12">
            <div>
              <label htmlFor="basiInput" className="form-label">Category Name  <span
                style={{ color: "red" }}>*</span></label>
              <input type="password" className="form-control" id="basiInput" />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

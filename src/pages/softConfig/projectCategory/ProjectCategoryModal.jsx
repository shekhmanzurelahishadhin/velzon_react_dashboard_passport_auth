import React from 'react'

export default function ProjectCategoryModal() {
    return (
        <div>
            <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-light p-3">
                            <h5 className="modal-title" id="myLargeModalLabel">Create Project Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div>
                                        <label htmlFor="basiInput" className="form-label">Category Name  <span
                                                style={{color: "red"}}>*</span></label>
                                        <input type="password" className="form-control" id="basiInput" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                             <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary ">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

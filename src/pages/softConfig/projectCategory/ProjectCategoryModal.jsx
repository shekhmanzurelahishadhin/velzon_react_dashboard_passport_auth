import React from 'react'
import ProjectCategoryForm from './ProjectCategoryForm'

export default function ProjectCategoryModal({ onCreated }) {
    return (
        <div>
            <div className="modal fade bs-example-modal-lg" id="projectCategoryModal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-light p-3">
                            <h5 className="modal-title" id="myLargeModalLabel">Create Project Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <ProjectCategoryForm onCreated={ onCreated } />
                    </div>
                </div>
            </div>
        </div>
    )
}

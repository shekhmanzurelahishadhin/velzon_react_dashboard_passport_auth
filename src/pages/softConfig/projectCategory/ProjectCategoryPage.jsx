import React, { useEffect, useState } from 'react'
import ProjectCategoryModal from './ProjectCategoryModal'
import ProjectCategoryTable from './ProjectCategoryTable'
import api from '../../../api/axios';

export default function ProjectCategoryPage() {
    const [projectCategories, setProjectCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProjectCategories = async () => {
        setLoading(true);
        try {
            const res = await api.get('/project-categories');
            setProjectCategories(res.data);
        } catch (err) {
            console.error('Failed to load project categories:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjectCategories();
        console.log(projectCategories);
    }, []);
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                        <h4 className="mb-sm-0">Basic Tables</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Soft Configure</a></li>
                                <li className="breadcrumb-item active">Project Category</li>
                            </ol>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Project Category List</h4>
                                    <div className="">
                                        <button type="button" className="btn btn-success " data-bs-toggle="modal" data-bs-target=".bs-example-modal-lg"><i className="ri-add-circle-line" style={{ fontSize: "18px" }}></i></button>
                                    </div>
                                </div>

                                <div className="card-body">

                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <ProjectCategoryTable
                                                data={projectCategories}
                                                loading={loading}
                                                onRefresh={fetchProjectCategories}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <ProjectCategoryModal onCreated={fetchProjectCategories}  />
                </div>
            </div>
        </div>
    )
}

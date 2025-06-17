import React from 'react'
import ProjectCategoryModal from './ProjectCategoryModal'
import ProjectCategoryTable from './ProjectCategoryTable'

export default function ProjectCategoryPage() {
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
                                        <button type="button" className="btn btn-success " data-bs-toggle="modal" data-bs-target=".bs-example-modal-lg"><i className="ri-add-circle-line" style={{fontSize:"18px"}}></i></button>
                                    </div>
                                </div>

                                <div className="card-body">

                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <ProjectCategoryTable />
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ height: "275px" }}><code>&lt;!-- Striped Rows --&gt;
                                            &lt;table className=&quot;table table-striped&quot;&gt;
                                            &lt;thead&gt;
                                            &lt;tr&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Id&lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Customer&lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Date&lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Invoice&lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Action&lt;/th&gt;
                                            &lt;/tr&gt;
                                            &lt;/thead&gt;
                                            &lt;tbody&gt;
                                            &lt;tr&gt;
                                            &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                                            &lt;td&gt;Bobby Davis&lt;/td&gt;
                                            &lt;td&gt;Nov 14, 2021&lt;/td&gt;
                                            &lt;td&gt;$2,410&lt;/td&gt;
                                            &lt;td&gt;&lt;span className=&quot;badge bg-success&quot;&gt;Confirmed&lt;/span&gt;&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                                            &lt;td&gt;Christopher Neal&lt;/td&gt;
                                            &lt;td&gt;Nov 21, 2021&lt;/td&gt;
                                            &lt;td&gt;$1,450&lt;/td&gt;
                                            &lt;td&gt;&lt;span className=&quot;badge bg-warning&quot;&gt;Waiting&lt;/span&gt;&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                                            &lt;td&gt;Monkey Karry&lt;/td&gt;
                                            &lt;td&gt;Nov 24, 2021&lt;/td&gt;
                                            &lt;td&gt;$3,500&lt;/td&gt;
                                            &lt;td&gt;&lt;span className=&quot;badge bg-success&quot;&gt;Confirmed&lt;/span&gt;&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;th scope=&quot;row&quot;&gt;4&lt;/th&gt;
                                            &lt;td&gt;Aaron James&lt;/td&gt;
                                            &lt;td&gt;Nov 25, 2021&lt;/td&gt;
                                            &lt;td&gt;$6,875&lt;/td&gt;
                                            &lt;td&gt;&lt;span className=&quot;badge bg-danger&quot;&gt;Cancelled&lt;/span&gt;&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;/tbody&gt;
                                            &lt;/table&gt;</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <ProjectCategoryModal />
                    

                </div>
            </div>
        </div>
    )
}

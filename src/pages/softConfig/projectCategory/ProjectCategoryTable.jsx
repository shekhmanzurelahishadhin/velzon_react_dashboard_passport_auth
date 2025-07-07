import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import api from '../../../api/axios';
import { toast } from 'react-toastify';


export default function ProjectCategoryTable({ data, loading, onRefresh }) {
    const [filterName, setFilterName] = useState('');
    const [globalSearch, setGlobalSearch] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);


    const filteredData = useMemo(() => {
        return data.filter(item =>
            item.name.toLowerCase().includes(filterName.toLowerCase()) &&
            (
                item.name.toLowerCase().includes(globalSearch.toLowerCase()) ||
                String(item.id).includes(globalSearch)
            )
        );
    }, [data, filterName, globalSearch]);

    const handleEdit = (row) => alert(`Edit: ${row.name}`);
    const handleDelete = async (row) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete "${row.name}"?`);
        if (!confirmDelete) return;

        try {
            setIsDeleting(true);
            await api.delete(`/project-categories/${row.id}`);
            toast.success('Category deleted successfully!');
            if (onRefresh) onRefresh();
        } catch (err) {
            if (err.response?.status === 403 || err.response?.status === 404) {
                toast.error('Delete failed: ' + err.response.data.message);
            } else {
                console.error("Unexpected error:", err);
                toast.error('An unexpected error occurred!');
            }
        } finally {
            setIsDeleting(false);
        }
    };


    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            width: '100px',
            sortable: true,
        },
        {
            name: (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Name</span>
                    </div>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        <input
                            type="text"
                            placeholder="Search"
                            value={filterName}
                            className='form-controll'
                            onChange={(e) => setFilterName(e.target.value)}
                            style={{ width: '100%', marginTop: '5px' }}
                        />
                    </div>
                </div>
            ),
            selector: row => row.name,
            sortable: true,
        }
        ,
        {
            name: 'Actions',
            cell: row => (
                <div style={{ display: 'flex', gap: '5px' }}>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(row)}
                        title="Edit"
                    >
                        <i className="ri-pencil-line"></i>
                    </button>

                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(row)}
                        title="Delete"
                        disabled={isDeleting}
                    >
                        <i className="ri-delete-bin-line"></i>
                    </button>

                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];


    return (
        <div style={{ padding: 10 }}>
            <div className="col-6 col-md-2 mb-3">
                <input
                    type="text"
                    placeholder="Search..."
                    value={globalSearch}
                    onChange={(e) => setGlobalSearch(e.target.value)}
                    className="form-control"
                    style={{ padding: '3px 5px', fontSize: '14px' }}
                />
            </div>
            {loading ? (
                <div className="text-center">
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Loading project categories...
                </div>
            ) : (
                <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[2, 5, 10]}
                    highlightOnHover
                    responsive
                    striped
                    persistTableHead
                />
            )}
        </div>
    );
}

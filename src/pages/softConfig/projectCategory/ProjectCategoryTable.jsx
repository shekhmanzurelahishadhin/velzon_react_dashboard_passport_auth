import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
// import './ProjectCategoryTable.css'; // Import custom CSS

const sampleData = [
    { id: 1, name: 'Frontend', description: 'UI components' },
    { id: 2, name: 'Backend', description: 'API and logic' },
    { id: 3, name: 'Database', description: 'Data storage' },
    { id: 4, name: 'DevOps', description: 'Deployment and CI/CD' },
    { id: 5, name: 'QA', description: 'Testing and quality' },
];

export default function ProjectCategoryTable() {
    const [filterName, setFilterName] = useState('');
    const [filterDesc, setFilterDesc] = useState('');
    const [globalSearch, setGlobalSearch] = useState('');

    const filteredData = useMemo(() => {
        return sampleData.filter(item =>
            item.name.toLowerCase().includes(filterName.toLowerCase()) &&
            item.description.toLowerCase().includes(filterDesc.toLowerCase()) &&
            (
                item.name.toLowerCase().includes(globalSearch.toLowerCase()) ||
                item.description.toLowerCase().includes(globalSearch.toLowerCase()) ||
                String(item.id).includes(globalSearch)
            )
        );
    }, [filterName, filterDesc, globalSearch]);

    const handleEdit = (row) => alert(`Edit: ${row.name}`);
    const handleDelete = (row) => alert(`Delete: ${row.name}`);

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            width: '70px',
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
        },
        {
            name: (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Description</span>
                    </div>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        <input
                            type="text"
                            placeholder="Search"
                            className='form-controll'
                            value={filterDesc}
                            onChange={(e) => setFilterDesc(e.target.value)}
                            style={{ width: '100%', marginTop: '5px' }}
                        />
                    </div>
                </div>
            ),
            selector: row => row.description,
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
            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                paginationPerPage={2}
                paginationRowsPerPageOptions={[2, 5, 10]}
                highlightOnHover
                responsive
            />
        </div>
    );
}

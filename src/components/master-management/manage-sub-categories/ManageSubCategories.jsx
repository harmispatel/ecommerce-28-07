import { Button, Modal, Select } from 'antd';
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import categoryData from "~/data/categoryData"
import subCategoryData from "~/data/subCategoryData"
import "../manage-certificate/styles.css"

const ManageSubCategories = () => {
    const [newSubCategoryModel, setNewSubCategoryModel] = useState(false);

    const [editSubCategoryModel, setEditSubCategoryModel] = useState(false);
    const [loading, setLoading] = useState(true);

    const [currentItem, setCurrentItem] = useState(null);
    const [formData, setFormData] = useState({ subCategoryName: '', status: '' });

    const handleEditCategory = (item) => {
        setEditSubCategoryModel(true);
        setLoading(true);
        setCurrentItem(item);
        setFormData({ subCategoryName: item?.subCategoryName, status: item?.status });

        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const handleUpdateSubCategory = () => {
        const updatedData = subCategoryData.map(item =>
            item.id === currentItem.id ? { ...item, subCategoryName: formData?.subCategoryName, status: formData.status } : item
        );
        setEditSubCategoryModel(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSelectChange = (value) => {
        setFormData(prevState => ({ ...prevState, status: value }));
    };

    const tableItems = subCategoryData.map((item, index) => {
        let statusView;
        if (item.status === "active") {
            statusView = <span className="ps-badge success">Active</span>;
        } else {
            statusView = <span className="ps-badge gray">InActive</span>;
        }
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                    <a href="#">
                        <strong>{item?.subCategoryName}</strong>
                    </a>
                </td>
                <td>
                    <span>{item?.brandFullName}</span>
                </td>
                <td>{statusView}</td>
                <td style={{ cursor: "pointer", fontSize: "23px" }} onClick={() => handleEditCategory(item)}>
                    <FaEdit />
                </td>
            </tr>
        );
    });

    const handleAddSubCategory = () => {
        setNewSubCategoryModel(true);
    };

    const handleCloseSubCategory = () => {
        setNewSubCategoryModel(false);
    };


    return (
        <>
            <div className="ps-section__content">
                <div className="ps-section__actions">
                    <button
                        onClick={handleAddSubCategory}
                        className="ps-btn success" >
                        <i className="icon icon-plus mr-2" />
                        Add Sub Category
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table ps-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Sub Categories Name</th>
                                <th>Category Name</th>
                                <th>Status</th>
                                <th style={{ textAlign: "end" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>{tableItems}</tbody>
                    </table>
                </div>
            </div>


            {/* FOR ADD NEW CERTIFICATE MODAL */}

            <Modal
                title={<b>Add Sub Category</b>}
                maskClosable={false}
                footer={
                    <Button type="primary" onClick={handleCloseSubCategory}>
                        Save
                    </Button>
                }
                open={newSubCategoryModel}
                onCancel={() => setNewSubCategoryModel(false)}
            >
                <div className="ps-block__content">
                    <div className="form-group">
                        <label>
                            Sub Category Name<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Add sub category name"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Select Category<sup>*</sup>
                        </label>
                        <Select
                            className='w-100'
                            style={{ height: "50px" }}
                            placeholder="Select category name"
                            options={categoryData?.map(data => ({
                                value: data?.id,
                                label: data?.categoryName
                            }))}
                        />
                    </div>
                    <div className="form-group">
                        <label className='form-lable'>
                            Status<sup>*</sup>
                        </label>
                        <Select
                            className='w-100'
                            style={{ height: "50px" }}
                            placeholder="Select status"
                            options={[
                                {
                                    value: 'active',
                                    label: 'Active',
                                },
                                {
                                    value: 'inactive',
                                    label: 'InActive',
                                },
                            ]}
                        />
                    </div>
                </div>
            </Modal>



            {/* FOR EDIT CERTIFICATE DETAILS MODAL */}
            <Modal
                title={<b>Edit Sub Category Details</b>}
                maskClosable={false}
                footer={
                    <Button type="primary" onClick={handleUpdateSubCategory}>
                        Save
                    </Button>
                }
                loading={loading}
                open={editSubCategoryModel}
                onCancel={() => setEditSubCategoryModel(false)}
            >
                <div className="ps-block__content">
                    <div className="form-group">
                        <label>
                            Sub Category Name<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="subCategoryName"
                            value={formData.subCategoryName}
                            onChange={handleInputChange}
                            placeholder="Edit sub category name"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Select Display Name<sup>*</sup>
                        </label>
                        <Select
                            className='w-100'
                            style={{ height: "50px" }}
                            placeholder="Select category name"
                            options={categoryData?.map(data => ({
                                value: data?.id,
                                label: data?.categoryName
                            }))}
                        />
                    </div>
                    <div className="form-group">
                        <label className='form-lable'>
                            Status<sup>*</sup>
                        </label>
                        <Select
                            className='w-100'
                            style={{ height: "50px" }}
                            placeholder="Select status"
                            value={formData.status}
                            onChange={handleSelectChange}
                            options={[
                                {
                                    value: 'active',
                                    label: 'Active',
                                },
                                {
                                    value: 'inactive',
                                    label: 'InActive',
                                },
                            ]}
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ManageSubCategories

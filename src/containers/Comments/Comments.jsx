import React from 'react';

import { Table } from 'antd';
import { ConfirmationButton } from '../../components';

import { CommentsData } from './CommentsData';

export const Comments = ({ data, postData, deleteHandler, openModal }) => {
    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },

        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Comment',
            dataIndex: 'body',
            key: 'body',
        },
    ];
    return (
        <>
            <ConfirmationButton
                confirmButtonText='Edit'
                confirmButtonOnClick={() => openModal()}
                dismissButtonText='Delete'
                dismissButtonOnClick={() => deleteHandler()}
            />
            <CommentsData postData={postData} />
            <Table rowKey='id' dataSource={data} columns={columns} />
        </>
    )
}
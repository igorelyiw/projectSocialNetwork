import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import { SmallButton } from '../../components';

export const Users = ({ data }) => {
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
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Post',
            key: 'action',
            render: (text, render) => {
                return <Link to={'/posts/' + render.id}><SmallButton>Go to posts</SmallButton></Link>
            }
        },
    ];

    return (
        <Table rowKey='id' dataSource={data} columns={columns} />
    )
}
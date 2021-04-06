import React from 'react';

import { SmallButton } from '../../components/Buttons';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { DetailsIcon } from '../../components';

export const Posts = ({ data }) => {
    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Post text',
            dataIndex: 'body',
            key: 'body',
        },
        {
            title: 'Details',
            key: 'action',
            render: (text, render) => {
                return <Link to={'/comments/' + render.id}><SmallButton ><DetailsIcon/> Details</SmallButton></Link>
            }
        },
    ];

    return (
        <Table rowKey='id' dataSource={data} columns={columns} />

    )
}
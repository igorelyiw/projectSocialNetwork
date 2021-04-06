import React from 'react';

import { Card } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
width:40%;
margin:20px;
`;

export const CommentsData = ({ postData }) => {
  return (
    <Wrapper>
      <Card type="inner" title={<h1>Post #{postData.id}</h1>} >
        <p><b>User ID:</b> {postData.userId}</p>
        <p><b>Title:</b> {postData.title}</p>
        <p><b>Text of post:</b>{postData.body}</p>
      </Card>
    </Wrapper>
  )
}
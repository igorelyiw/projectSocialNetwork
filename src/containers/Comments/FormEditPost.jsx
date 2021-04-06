import React from 'react';
import { useFormik } from 'formik';

import styled from 'styled-components';
import { BigButton, ButtonText } from '../../components';

const InputCustom = styled.input`
width:95%;
line-height:15px;
padding:8px;
border-radius:5px;
margin-top:32px;
`;
const Wrapper = styled.form`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
const Textarea = styled.textarea`
width:95%;
height:200px;
padding:8px;
border-radius:5px;
margin-top:32px;
min-height:70px;
resize:none;
`;

export const FormEditPost = ({ updateHandler, userId, id, title, body }) => {
  const formik = useFormik({
    initialValues: {
      id,
      userId,
      title,
      body
    },
    onSubmit: (values) => {
      updateHandler(values)
    },
  });
  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <InputCustom
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder={'Write post title... '}
      />
      <Textarea
        id="body"
        name="body"
        type="textarea"
        onChange={formik.handleChange}
        value={formik.values.body}
        placeholder={'Write post... '}
      />
      <BigButton backgroundColor='green' type="submit">
        <ButtonText>
          Send
        </ButtonText>
      </BigButton>
    </Wrapper>
  );
};
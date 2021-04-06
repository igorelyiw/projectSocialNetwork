import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';

import { SmallButton,Modal, AddIcon, H3 } from '../../components';
import { createPost, getPosts } from '../../store/postsSlice';

import { FormNewPost } from './FormNewPost';
import { Posts } from './Posts';

export const PostsContainer = (props) => {
    const state = useSelector(state => state.posts);
    const dispatch = useDispatch();
    let match = useRouteMatch();
    const userId = match.params.userId;
    const [isShowModal, setIsShowModal] = React.useState(false)
    React.useEffect(() => {
        dispatch(getPosts(userId))
    }, [])
    const createNewPost = (values => {
        dispatch(createPost(values));
        setIsShowModal(false)
    })
    return (
        <>
            <SmallButton onClick={() => setIsShowModal(true)}>
                <H3><AddIcon/>Add new</H3> </SmallButton>
            <Posts
                data={state.posts}
            />
            <Modal
                isOpen={isShowModal}
                onClose={() => setIsShowModal(false)}
                title='Create new Post'
                isClosable
            >
                <FormNewPost
                    createNewPost={(values) => createNewPost(values)}
                    userId={userId}
                />
            </Modal>
        </>
    )
}
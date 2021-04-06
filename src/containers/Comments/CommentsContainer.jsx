import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';

import { Modal } from '../../components';
import { getComments } from '../../store/commentSlice';
import { deletePost, getPost, updatePost } from '../../store/postsSlice';

import { Comments } from './Comments';
import { FormEditPost } from './FormEditPost';

export const CommentsContainer = (props) => {
    const state = useSelector(state => state.comments);
    const post = useSelector(state => state.posts.selectPost);
    const dispatch = useDispatch();
    const [isShowModal, setIsShowModal] = React.useState(false)
    let match = useRouteMatch();
    const postId = match.params.postId;
    let history = useHistory();
        React.useEffect(() => {
        dispatch(getComments(postId));
        dispatch(getPost(postId))
    }, [])
    const deleteHandler = () => {
        dispatch(deletePost(postId));
        alert('Post deleted... ');
        history.push('/users')
    }
    const updateHandler = (values) => {
        dispatch(updatePost(values));
        setIsShowModal(false)
    }
    return (
        <>
            <Comments
                data={state.comments}
                postData={post}
                deleteHandler={() => deleteHandler()}
                openModal={() => setIsShowModal(true)}
            />
            <Modal
                isOpen={isShowModal}
                onClose={() => setIsShowModal(false)}
                title='Updating post'
                isClosable
            >
                <FormEditPost
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    userId={post.userId}
                    updateHandler={(values) => updateHandler(values)}
                    postId={postId}
                />
            </Modal>
        </>
    )
}

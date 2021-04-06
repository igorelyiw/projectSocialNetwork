import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../store/usersSlice';

import { Users } from './Users';

export const UsersContainer = (props) => {
    const state = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <Users
            data={state}
        />
    )
}
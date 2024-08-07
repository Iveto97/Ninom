import { useEffect, useReducer } from "react";
import { create, getAllComments } from "../api/comments-api"


export function useCreateComment() {
    const createHandler = (destId, comment) =>
        create(destId, comment)

    return createHandler;
}

function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice();
        case 'ADD_COMMENT':
            return [...state, action.payload];
        default:
            return state;
    }
}

export function useGetAllComments(destId) {
    const [comments, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        (async () => {
            const response = await getAllComments(destId);

            dispatch({ type: 'GET_ALL', payload: response });
        })()
    }, [ destId ]);

    return [ comments, dispatch ];
}
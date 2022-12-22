import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (campsiteID) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteID));
};

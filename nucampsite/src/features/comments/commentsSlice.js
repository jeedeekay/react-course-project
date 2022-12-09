import { COMMENTS } from "../../app/shared/COMMENTS";

export const selectCommentsbyCampsiteId = (campsiteID) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteID));
};

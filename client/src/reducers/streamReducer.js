import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/action-types";

import _ from "lodash";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    //fetch streams
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    // fetch a stream
    case FETCH_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload, //key interpolation
      };

    //create a stream
    case CREATE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    //edit a stream
    case EDIT_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    //delete a stream
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default streamReducer;

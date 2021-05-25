export const addToReadingList = (payload) => {
  return { type: "ADD_TO_READING_LIST", payload };
};

export const deleteFromReadingList = (payload) => {
  return { type: "DELETE_FROM_READING_LIST", payload };
};

export const markAsFinished = (payload) => {
  return { type: "ADD_TO_FINISHED_LIST", payload };
};

export const removeFromFinishedList = (payload) => {
  return { type: "REMOVE_FROM_FINISHED_LIST", payload };
};

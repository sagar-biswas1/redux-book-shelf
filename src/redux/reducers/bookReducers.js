import allBooks from "../../fakeData/books.json";

const primaryState = {
  readingList: [],
  discoverList: allBooks,
  finishedList: [],
};

const bookReducer = (state = primaryState, action) => {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      const isAlreadySelected = state.readingList.find(
        (b) => b.id === action.payload.id
      );

      if (!isAlreadySelected) {
        const newState = {
          ...state,
          readingList: [...state.readingList, action.payload],
        };
        return newState;
      } else {
        return state;
      }
    }

    case "DELETE_FROM_READING_LIST": {
      const newState = {
        ...state,

        readingList: state.readingList.filter((b) => b.id !== action.payload),
      };

      return newState;
    }

    case "ADD_TO_FINISHED_LIST": {
      const isAlreadyFinished = state.finishedList.find(
        (b) => b.id === action.payload
      );

      if (!isAlreadyFinished) {
        const newState = {
          ...state,
          readingList: state.readingList.filter((b) => b.id !== action.payload),
          finishedList: [
            ...state.finishedList,
            state.discoverList.find((b) => b.id === action.payload),
          ],
        };

        return newState;
      } else {
        return {
          ...state,
          readingList: state.readingList.filter((b) => b.id !== action.payload),
        };
      }
    }

    case "REMOVE_FROM_FINISHED_LIST": {
      const newState = {
        ...state,

        finishedList: state.finishedList.filter((b) => b.id !== action.payload),
      };

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default bookReducer;

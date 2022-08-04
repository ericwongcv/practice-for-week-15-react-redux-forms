import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";
const ADD_ARTICLE = "article/addArticle";

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      const newState = { ...state };
      newState.entries.push(action.article);
      return { ...newState };
    default:
      return state;
  }
};

export default articleReducer;

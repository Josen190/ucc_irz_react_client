import FeedNews from "./Components/FeedNews/FeedNews";
import NewsFilterReduser, {setFilter, INewsFiler} from "./Reducers/NewsFilterReduser";

export default FeedNews;
export {NewsFilterReduser, setFilter};
export type {INewsFiler};

export {default as CreateTidings} from "./Components/CreateNewsForm/CreateTidings";
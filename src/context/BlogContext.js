import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

// Reducer function
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { id: Math.floor(Math.random() * 9999), title: action.payload.title, content: action.payload.content }];
        case 'del_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload); 
        case 'edit_blogpost':
            return state.map(blogpost =>
                blogpost.id === action.payload.id
                    ? { ...blogpost, title: action.payload.title, content: action.payload.content }
                    : blogpost);
        case 'get_blogposts':
            return action.payload;
        default:
            return state;
    }
};


const getBlogPosts = dispatch => {
    return async () =>{
        const response = await jsonServer.get('/blogposts')

        dispatch ({type:'get_blogposts', payload: response.data})
    };
};

// Action creators
const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title,content, callback})
    //     dispatch({ type: 'add_blogpost', payload: { title, content } });
         if (callback) {
             callback(); // Navigate back after adding a blog post
         }
    };
};

const delBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'del_blogpost', payload: id });
    };
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}` ,{title, content, callback})
        // dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
        if (callback) {
            callback(); // Navigate back after editing a blog post
        }
    };
};

// Exporting Context and Provider
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, delBlogPost, editBlogPost, getBlogPosts }, 
    [] // Initial state
);

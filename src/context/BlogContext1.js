// import React, { useState } from 'react';

// const BlogContext = React.createContext();

// export const BlogProvider = ({ children }) => {
//     const [blogPosts, setBlogPosts] = useState([]);

//     const addBlogPost = () => {
//         setBlogPosts([...blogPosts, { title: `BlogPost #${blogPosts.length + 1}` }]);
//     };

//     const delBlogPost = () => {
//         setBlogPosts(blogPosts.slice(0, -1)); // Remove the last blog post
//     };

//     return (
//         <BlogContext.Provider value={{ blogPosts, addBlogPost, delBlogPost }}>
//             {children}
//         </BlogContext.Provider>
//     );
// }

// export default BlogContext;

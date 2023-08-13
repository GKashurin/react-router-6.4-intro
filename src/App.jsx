import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, {loader as blogPostsLoader} from './pages/BlogPosts';
import NewPostPage from './pages/NewPost';
import PostDetailPage, {loader as postLoader} from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';
import React from "react";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout/>}
			errorElement={<ErrorPage />}
		>
			<Route
				index
				element={<WelcomePage/>}
			/>
			<Route
				path="/blog"
				element={<BlogLayout/>}
			>
				<Route
					index
					element={<BlogPostsPage/>}
					loader={blogPostsLoader}
				/>
				<Route
					path=":id"
					element={<PostDetailPage/>}
					loader={postLoader}
				/>
			</Route>
			<Route
				path="/blog/new"
				element={<NewPostPage/>}
			/>
		</Route>
	)
)

function App() {
	return (
		<RouterProvider router={router}/>
	);
}

export default App;

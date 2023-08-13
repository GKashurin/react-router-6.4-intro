import React from "react";
import BlogPost from '../components/BlogPost';
import {useLoaderData} from "react-router-dom";
import {getPost} from "../util/api";

function PostDetailPage() {
	const post = useLoaderData()
	console.log('render')
	return (
		<BlogPost title={post.title} text={post.body}/>
	);
}

export default PostDetailPage;

export const loader = ({params}) => {
	const {id} = params
	return getPost(id)
}
import {useNavigate, redirect, useActionData, useNavigation} from 'react-router-dom';
import NewPostForm from '../components/NewPostForm';
import {savePost} from "../util/api";
import React from "react";

function NewPostPage() {
	const navigate = useNavigate();
	const data = useActionData()
	const navigation = useNavigation()

	function cancelHandler() {
		navigate('/blog');
	}

	console.log(navigation)
	return (
		<>
			{data && data.status && <p>{data.message}</p>}
			<NewPostForm
				onCancel={cancelHandler}
				submitting={navigation.state === 'submitting'}
			/>
		</>
	);
}

export default NewPostPage;

export const action = async ({request}) => {
	const formData = await request.formData()
	const post = {
		title: formData.get('title'),
		body: formData.get('post-text'),
	}
	try {
		await savePost(post)
	} catch (e) {
		if (e.status === 422) {
			return e
		}
		throw e
	}
	return redirect('/blog')
}
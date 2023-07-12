import React from 'react';
import s from './MyPosts.module.css';

import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const MyPosts = (props: MyPostsPropsType) => {

   const postsData = props.profileState.posts;

   const mappedPosts = postsData.map(post => {
      return <Post key={post.id} message={post.message} likesCount={post.likeCount}/>
   })

   const addPostHandler = (formData: FormDataType) => {
      props.addPost(formData.newPostBody);
   }


   return (
      <div>
         My post
         <div>
            <AddPostFormRedux onSubmit={addPostHandler}/>
            <div>
               {mappedPosts}
            </div>
         </div>
      </div>
   );
};

const AddPostForm: React.FC<InjectedFormProps<FormDataType, IProps>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field type="text" component="textarea" name="newPostBody" placeholder="anything new ?"/>
         <button>add post</button>
      </form>
   );
};

const AddPostFormRedux = reduxForm<FormDataType, IProps>({
   form: 'profileAddPostForm'
})(AddPostForm);


// types
type FormDataType = {
   newPostBody: string
}

type IProps = {}
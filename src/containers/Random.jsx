import React from 'react';
import { fetchTechPosts } from '../actions';
import PostsCategory from '../components/PostsCategory';
import PostFactory from '../factories/PostFactory';

const RandomContainer = props => (
  <PostsCategory
    name="Random"
    posts={ props.posts }
  />
);

export default PostFactory(RandomContainer, fetchTechPosts);

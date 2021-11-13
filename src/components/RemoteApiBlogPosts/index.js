import {
  useEffect,
  useState,
} from 'react';

import {
  useParams
} from "react-router-dom";
import BlogPosts from '../BlogPosts';
import BlogArticle from '../BlogPosts/blogArticle';
const axios = require('axios');


export default function RemoteApiBlogPosts() {

  const [baseUrl, setBaseUrl] = useState('https://salferrarello.com/wp-json/wp/v2/posts/');
  const [blogPosts, setBlogPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const changeBaseUrl = () => setBaseUrl('invalid://salferrarello.com/wp-json/wp/v2/posts/');
  useEffect(() => {

    async function fetchData() {
      console.log(baseUrl)
      try {
        const response = await axios.get(baseUrl);
        setBlogPosts(response.data);
        setErrorMessage('');
      } catch (error) {
        if (error.response) {
          setErrorMessage(error.response.data.message);
          setBlogPosts([]);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          setErrorMessage(error.message);
          setBlogPosts([]);
        } else {
          // Something happened in setting up the request that triggered an Error
          setErrorMessage([error.message]);
          setBlogPosts([]);
        }
        //console.log(error.config);
      }
    }
    fetchData();
  }, [baseUrl]);

  return (
    <>

      <BlogPosts
        posts={blogPosts} error={errorMessage} changeUrl={changeBaseUrl}
      />
    </>
  );
}

export  function RemoteApiBlogPostItem() {
  const { id } = useParams();
  const [blogItem, setblogItem] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  useEffect(() => {
    async function fetchPostItem() {
      try {
        const response = await axios.get(`https://salferrarello.com/wp-json/wp/v2/posts/${id}`);
        setblogItem(response.data);
        setErrorMessage('');
      } catch (error) {
        if (error.response) {
          setErrorMessage(error.response.data.message);
          setblogItem([]);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          setErrorMessage(error.message);
          setblogItem([]);
        } else {
          // Something happened in setting up the request that triggered an Error
          setErrorMessage([error.message]);
          setblogItem([]);
        }
        //console.log(error.config);
      }
    }
  if (id) fetchPostItem()
  }, [id]);

  return (
    <>
    <div className="blog-article">
    <BlogArticle
        blogItem={blogItem} error={errorMessage}
      />
    </div>
    </>
  );
}

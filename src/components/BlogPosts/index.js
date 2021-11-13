import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { RemoteApiBlogPostItem } from "../RemoteApiBlogPosts";
export default function BlogPosts({ posts,error,changeUrl }) {
  let message = error ? JSON.stringify(error) : '';

  return (
    <>

    <Router>
      <div className="blog">
      <h2>Blog Posts</h2>
      <small>Click on the links to read excerpts</small>
        {
          message && <p className="error">{message}</p>

        }
        <ul className="blog-posts">
        {
         posts && posts.map((post,index) => (
            <li
              key={post.id}
            >
              {index === 3 ? <Link to={`/post/404-${post.id}`}><strong>(404 ERROR TEST)</strong>{post.title.rendered}</Link> : <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>}
            </li>
          ))
        }
      </ul>
      <button onClick={() => changeUrl()} >Fetch via Invalid Protocol</button>

      </div>

      <Routes>
        <Route path="post" element={<Post />}>
          <Route path=":id"  element={<RemoteApiBlogPostItem />} />
        </Route>
       </Routes>
    </Router>

    </>
  );
}



function Post() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

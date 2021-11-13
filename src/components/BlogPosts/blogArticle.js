export default function BlogArticle({blogItem,error}){
  let message = error ? JSON.stringify(error) : '';
  return(
    <>
    {blogItem && <h3>{blogItem?.title?.rendered}</h3>}
    {<p>{blogItem?.excerpt?.rendered}</p>}
    {
      error && <div className="error">{message && <p>{message}</p>}</div>
    }
    </>
  )
}

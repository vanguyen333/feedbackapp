import React from 'react';
function App() {
  const title = 'Blog post';
  const body = 'This is my blog post';
  const comments = [
    { id: 1, name: 'abc 1' },
    { id: 2, name: 'abc 2' },
  ];
  const loading = false;
  if (loading) return <h1>Loading ...</h1>;
  const showComments = true;
  const commentBlock = (
    <div className="comments">
      <h3>Comments({comments.length})</h3>
      {comments.map((item, index) => (
        <div key={index}>
          <li>{item.name}</li>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <p>{body}</p>
        {showComments && commentBlock}
      </div>
    </>
  );
}
export default App;

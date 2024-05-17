import React from 'react';
function App() {
  const title = 'Blog post';
  const body = 'This is my blog post';
  const comments = [
    { id: 1, name: 'abc 1' },
    { id: 2, name: 'abc 2' },
  ];
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <p>{body}</p>
        <div>
          {comments.map((item, index) => (
            <div key={index}>
              <p>{item.id}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;

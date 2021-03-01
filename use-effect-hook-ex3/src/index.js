import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Reddit({subreddit}){
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    console.log(`[useEffect]`);
      axios.get(`https://www.reddit.com/r/${subreddit}.json`)
        .then(
          (response) => setPosts(response.data.data.children.map(item=>item.data))
        )
        .catch(error => {
          console.log(`An error occurred`);
          alert(`r/${subreddit} is not a valid subreddit`);
        });
  }, [setPosts, subreddit]);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}


function App(){

  const [inputValue, setValue] = React.useState('reactjs');
  const [subreddit, setSubreddit] = React.useState(inputValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubreddit(inputValue);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class Reddit extends React.Component {
  state = {
    posts: [],
    isLoading: false
  };

  constructor(props){
    super(props);
    console.log(`[Constructor]`);
  }

  //This lifecycle method is a part of the mounting phase, componentDidMount runs after the constructor
  componentDidMount(){
    this.setState({isLoading: true});
    console.log(`[componentDidMount]`)
    console.log(`[componentDidMount] props: ${JSON.stringify(this.props)}`);
    axios.get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(response => {
        console.log(`Response: ${JSON.stringify(response)}`);
        const posts = response.data.data.children.map(obj => obj.data);
        this.setState({posts});
      })
      .catch(e => {
        console.log(`[componentDidMount] Error occurred when making http GET request: ${JSON.stringify(e)}`);
        this.setState({e});
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      });
  }

  render(){
    console.log(`[render]`);
    const {posts} = this.state;
    if(this.state.isLoading){
      return <div>Loading...</div>
    }
    const {e} = this.state;
    console.log(`Error: ${e}`);
    console.log(`[render] state: ${JSON.stringify(this.state)}`);
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        {e != null ?
          <p>An error has occurred: {e.message}</p> :
          <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
              )
          )}
          </ul>
      }
      </div>
    );
  }
}

ReactDOM.render(<Reddit subreddit="reactjs"/>, document.querySelector('#root'));

import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasError: false
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        alert("An error occurred: " + error.message);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong loading the posts.</h2>;
        }

        return (
            <div style={{ padding: '20px' }}>
                <h1 style={{ color: 'darkblue' }}>Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
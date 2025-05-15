import React, { useState } from 'react';

const CommunityForumPage = () => {
    const [posts, setPosts] = useState([
        { id: 1, content: "Feeling overwhelmed today. Any advice?" },
        { id: 2, content: "Just wanted to share that I found meditation helpful!" },
        { id: 3, content: "Struggling with anxiety. Looking for support." }
    ]);
    const [newPost, setNewPost] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim()) {
            setPosts([...posts, { id: posts.length + 1, content: newPost }]);
            setNewPost('');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Community Forum</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Posts</h2>
                <ul className="list-disc pl-5">
                    {posts.map(post => (
                        <li key={post.id} className="mb-2">{post.content}</li>
                    ))}
                </ul>
            </div>
            <form onSubmit={handlePostSubmit} className="mb-4">
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Share your thoughts..."
                />
                <button
                    type="submit"
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Post
                </button>
            </form>
        </div>
    );
};

export default CommunityForumPage;
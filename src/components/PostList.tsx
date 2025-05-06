import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const MAX_DESCRIPTION_LENGTH = 100;
  const CARD_WIDTH = 280;
  const CARD_HEIGHT = 380;
  const IMAGE_HEIGHT = 160;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const postData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const truncateDescription = (text) => {
    if (!text) return "";
    if (text.length <= MAX_DESCRIPTION_LENGTH) return text;
    return text.substring(0, MAX_DESCRIPTION_LENGTH) + "...";
  };

  const handleSeeMore = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  if (loading) return <div className="text-center py-8">Loading posts...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {posts.length === 0 ? (
          <div className="text-center py-8 w-full">No posts yet.</div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow flex-shrink-0"
              style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }}
            >
              <div className="flex flex-col h-full">
                <div
                  className="w-full overflow-hidden rounded mb-3"
                  style={{ height: `${IMAGE_HEIGHT}px` }}
                >
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                <h2 className="text-lg font-bold mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <div className="flex-grow overflow-hidden">
                  <p className="text-gray-700 text-sm">
                    {truncateDescription(post.description)}
                    {post.description &&
                      post.description.length > MAX_DESCRIPTION_LENGTH && (
                        <button
                          onClick={() => handleSeeMore(post)}
                          className="text-blue-500 ml-1 hover:underline font-medium"
                        >
                          See more
                        </button>
                      )}
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-auto pt-2">
                  {post.createdAt?.toDate?.().toLocaleString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {showModal && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">{selectedPost.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {selectedPost.imageUrl && (
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
            )}
            <div className="text-gray-700 whitespace-pre-wrap">
              {selectedPost.description}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              {selectedPost.createdAt?.toDate?.().toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { Button } from "./ui/button";
import { useUser } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Trash2, Edit2 } from "lucide-react";

interface PostListProps {
  onEditPost?: (post: any) => void;
  isAdminView?: boolean;
}

const PostList: React.FC<PostListProps> = ({ onEditPost, isAdminView = false }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const { user } = useUser();
  
  const navigate = useNavigate();

  const MAX_DESCRIPTION_LENGTH = 100;
  const CARD_WIDTH = 280;
  const CARD_HEIGHT = 380;
  const IMAGE_HEIGHT = 160;

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

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async () => {
    if (!postToDelete) return;
    
    try {
      const docRef = doc(db, "posts", postToDelete);
      await deleteDoc(docRef);
      console.log("Deleted!");
      setPosts(posts.filter(p => p.id !== postToDelete));
      setShowDeleteModal(false);
      setPostToDelete(null);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const editPost = (post) => {
    if (isAdminView && onEditPost) {
      onEditPost(post);
    } else {
      navigate("/admin", { state: { post } });
    }
  };

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
    <div className={isAdminView ? "" : "container mx-auto px-4 py-8"}>
      <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {posts.length === 0 ? (
          <div className="text-center py-8 w-full">
            <p className="text-gray-500 mb-4">No posts yet.</p>
            {user && !isAdminView && (
              <Button
                className="mt-4"
                onClick={() => navigate('/admin')}
              >
                Post Something
              </Button>
            )}
          </div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow flex-shrink-0 hover:shadow-lg transition-shadow"
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
                  <p className="text-gray-700 text-sm mb-3">
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

                  {user && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => editPost(post)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="Edit post"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setShowDeleteModal(true);
                          setPostToDelete(post.id);
                        }}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Delete post"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-auto pt-2">
                  {post.createdAt?.toDate?.().toLocaleString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* View Modal */}
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this post? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setShowDeleteModal(false);
                  setPostToDelete(null);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
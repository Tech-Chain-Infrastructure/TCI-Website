import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "@/context/AuthContext";
import { LogOut, Plus, List } from "lucide-react";

const Admin = () => {
  const [editPostData, setEditPostData] = useState<any>(undefined);
  const [showForm, setShowForm] = useState(true);
  
  const auth = getAuth();
  const navigate = useNavigate();
  const { user, loading } = useUser();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (location.state?.post) {
      setEditPostData(location.state.post);
      setShowForm(true);
    }
  }, [location.state]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Admin signed out");
      navigate("/"); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleEditPost = (post) => {
    setEditPostData(post);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePostSuccess = () => {
    setEditPostData(undefined);
    setShowForm(false);
    // Refresh the post list by triggering a re-render
    window.location.reload();
  };

  const handleNewPost = () => {
    setEditPostData(undefined);
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowForm(!showForm)}
                className="flex items-center gap-2"
              >
                {showForm ? <List size={18} /> : <Plus size={18} />}
                {showForm ? "View Posts" : "New Post"}
              </Button>
              <Button
                variant="destructive"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {showForm ? (
          <div className="mb-8">
            <PostForm 
              editPostData={editPostData} 
              onPostSuccess={handlePostSuccess}
            />
          </div>
        ) : null}

        {/* Posts Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Your Posts</h2>
          </div>
          <PostList onEditPost={handleEditPost} isAdminView={true} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
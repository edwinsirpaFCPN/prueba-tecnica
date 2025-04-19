import React, { useState, useEffect } from "react";

import { fetchPosts } from "../services/api";
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";
import UserFilter from "../components/UserFilter";
import Pagination from "../components/Pagination";
import PostDetails from "./PostDetails";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts(page);

        // Verificamos que data sea un array antes de asignarlo a setPosts
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("La API no retornó un array de posts:", data);
          setPosts([]);
        }
      } catch (error) {
        console.error("Error al cargar los posts:", error);
        setPosts([]);
      }
    };

    loadPosts();
  }, [page]);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUser = selectedUser ? post.userId === selectedUser : true;
    return matchesSearch && matchesUser;
  });

  const [vistaComentario, setVistaComentario] = useState(false);
  const [Id, setId] = useState<number>(0);

  return (
    <div className="p-4">
      <div className="home-content">
        <h1 className="h1-home">Publicaciones</h1>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <UserFilter value={selectedUser} onChange={setSelectedUser} />
      </div>

      <PostList
        posts={filteredPosts}
        setVistaComentario={setVistaComentario}
        setId={setId}
      />
      {vistaComentario ? <PostDetails post_id={Id} /> : null}
      <Pagination page={page} setPage={setPage} />

      
    </div>
  );
};

export default Home;

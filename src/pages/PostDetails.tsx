import React, { useEffect, useState }/* , { useEffect, useState } */ from 'react';
/* import { useParams } from 'react-router-dom';
import { fetchPostComments } from '../services/api'; */
import CommentList from '../components/CommentList';
import { fetchPostComments } from '../services/api';

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
interface PostDetailsProps {
  post_id: number;
}
const PostDetails: React.FC<PostDetailsProps> = ( { post_id } ) => {
  /* const { id } = useParams<{ id: string }>(); */
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await fetchPostComments(Number(post_id));
        
        // Verificamos que data sea un array antes de asignarlo
        if (Array.isArray(data)) {
          setComments(data as Comment[]);
        } else {
          console.error("La API no retornó un array de comentarios:", data);
          setComments([]);
        }
      } catch (error) {
        console.error("Error al cargar los comentarios:", error);
        setComments([]);
      }
    };
    loadComments();
  }, [post_id]);

  return (
    <div className="post-content">
      <h1 className="post-title">Detalles de la Publicación</h1>
      <CommentList comments={comments} />
    </div>
  );
};

export default PostDetails;
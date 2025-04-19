interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
  setVistaComentario: (valor: boolean) => void;
  setId: (value: number) => void;
}

const PostList: React.FC<PostListProps> = ({
  posts,
  setVistaComentario,
  setId,
}) => {
  if (posts.length === 0) {
    return (
      <div className="text-center my-8">No se encontraron publicaciones.</div>
    );
  }

  return (
    <div className="app-container">
      <div className="content-area">
        <table className="table-container">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Usuario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>Usuario #{post.userId}</td>
                <td>
                  <button
                    onClick={() => {
                      setId(post.id);
                      setVistaComentario(true);
                    }}
                  >
                    Ver detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;

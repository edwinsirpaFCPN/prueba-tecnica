# Proyecto JSONPlaceholder-API

📋 **Descripción**  
 JSONPlaceholder-API es una proyecto web desarrollada en React con TypeScript que permite visualizar y gestionar publicaciones (posts) obtenidas. La aplicación permite a los usuarios:

- Ver una lista de publicaciones en formato tabla.
- Filtrar las publicaciones por título y contenido.
- Filtrar las publicaciones por usuario.
- Ver los comentarios asociados a cada publicación.


## 🚀 Tecnologías Utilizadas

- **React 18+**
- **TypeScript**
- **React Router Dom**
- **CSS para estilos**

## 📦 Estructura del Proyecto
```
knowledge-base/
├── public/
├── src/
│   ├── components/
│   │   ├── CommentList.tsx      # Componente para mostrar comentarios en tabla
│   │   ├── Pagination.tsx       # Control de paginación
│   │   ├── PostList.tsx         # Tabla de publicaciones
│   │   ├── SearchBar.tsx        # Buscador de publicaciones
│   │   └── UserFilter.tsx       # Filtrado por usuario
│   ├── pages/
│   │   ├── Home.tsx             # Página principal
│   │   └── PostDetails.tsx      # Detalles de publicación
│   ├── services/
│   │   └── api.ts               # Servicios para consumir APIs
│   ├── App.tsx                  # Componente principal
│   ├── index.css                # Estilos globales
│   └── main.tsx                 # Punto de entrada
├── tsconfig.json                # Configuración de TypeScript
└── package.json
```

## 🔧 Instalación
1.Clona el repositorio
``` sh
git clone https://github.com/edwinsirpaFCPN/prueba-tecnica.git
cd prueba-tecnica
```
2. Instalar las dependencias
   ```sh
   npm install
   ```
3. Inicia la aplicación en modo desarrollo:
   ```sh
   npm ruv dec
   ```
4. La aplicación estará disponible en ```http://localhost:5173``` (o el puerto que configure Vite)

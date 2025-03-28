📘 API Social - Node.js + Express + PostgreSQL + Prisma
Esta es una API RESTful para una red social sencilla que permite manejar usuarios, autenticación y publicaciones.

🚀 Tecnologías
Node.js

Express.js

PostgreSQL (puedes usar Railway o local)

Prisma ORM

JWT para autenticación

Bcrypt para encriptar contraseñas

🛠️ Instalación
Clona el repositorio:

bash
Copiar
Editar
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
Instala dependencias:

bash
Copiar
Editar
npm install
Crea el archivo .env y configura tus variables:

env
Copiar
Editar
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/social_api
JWT_SECRET=mi_secreto_ultrasecreto
Genera cliente de Prisma y migra:

bash
Copiar
Editar
npx prisma generate
npx prisma migrate dev --name init
Inicia el servidor:

bash
Copiar
Editar
npm run dev
🧪 Endpoints principales
🔐 Autenticación
POST /api/auth/login: login con email y contraseña

👤 Usuarios
POST /api/users: crear usuario

GET /api/users: listar todos (requiere token)

GET /api/users/:id: ver un usuario

PUT /api/users/:id: editar usuario

DELETE /api/users/:id: eliminar usuario

📝 Publicaciones
POST /api/posts: crear publicación (token)

GET /api/posts: listar publicaciones

GET /api/posts/:id: ver una publicación

PUT /api/posts/:id: editar publicación (token)

DELETE /api/posts/:id: eliminar publicación (token)

📬 Autenticación
Para acceder a rutas protegidas, usa un token JWT en los headers:

http
Copiar
Editar
Authorization: Bearer tu_token
# 📱 social-api

API REST para una red social sencilla. Permite gestionar usuarios, autenticación y publicaciones, con seguridad basada en tokens JWT y base de datos PostgreSQL.

---

## 🛠️ Tecnologías

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JSON Web Tokens (JWT)
- Bcrypt
- Dotenv

---

## 🚀 Instalación y uso

1. **Clona el repositorio:**

```bash
git clone https://github.com/tu-usuario/social-api.git
cd social-api
```
2. **Instalar las dependencias:**

```bash

npm install
```
3. **Crea el archivo .env con tus variables de entorno:**

```bash

DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/social_api
JWT_SECRET=tu_clave_secreta
```
4. **Inicializa la base de datos con Prisma:**

```bash
npx prisma generate
npx prisma migrate dev --name init
```
5. **Inicia el servidor:**

```bash
node server.js
```

## 🧪 Endpoints principales

**👤 Usuarios**
| Método | Ruta             | Descripción           |
|--------|------------------|-----------------------|
| POST   | /api/users       | Crear usuario         |
| GET    | /api/users       | Listar usuarios       |
| GET    | /api/users/:id   | Obtener usuario por ID|
| PUT    | /api/users/:id   | Editar usuario        |
| DELETE | /api/users/:id   | Eliminar usuario      |

**🔐 Autenticación**

| Método | Ruta            | Descripción       |
|--------|------------------|-------------------|
| POST   | /api/auth/login | Login de usuario  |

**📝 Publicaciones**

| Método | Ruta             | Descripción             |
|--------|------------------|-------------------------|
| POST   | /api/posts       | Crear publicación       |
| GET    | /api/posts       | Listar publicaciones    |
| GET    | /api/posts/:id   | Ver publicación por ID  |
| PUT    | /api/posts/:id   | Editar publicación      |
| DELETE | /api/posts/:id   | Eliminar publicación    |

**🔐 Seguridad**

Los endpoints protegidos requieren token JWT en el header:

```text
Authorization: Bearer tu_token_aquí
```
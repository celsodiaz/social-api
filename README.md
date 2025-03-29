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
git clone git@github.com:celsodiaz/social-api.git
cd social-api
```
2. **Instalar las dependencias:**

```bash

npm install
```
3. **Crea el archivo .env con tus variables de entorno:**

```bash

DATABASE_URL="postgresql://postgres:<contraseña>@<host>:<puerto>/<nombre_de_base_de_datos>"
// example : postgresql://postgres:12345670@localhost:5432/social_api
JWT_SECRET="supersecreto123"
PORT=3000
```

> ⚠️ **Importante**  
> Asegúrate de tener **PostgreSQL instalado y corriendo** en tu máquina.  
> Crea una base de datos llamada `social_api` y actualiza el archivo `.env` con tus credenciales (`usuario`, `contraseña`, puerto, etc.) **antes de correr las migraciones**.

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

**🔐 Seguridad**

Los endpoints protegidos requieren token JWT en el header:

```text
Authorization: Bearer tu_token_aquí
Content-Type: application/json
```

### 👤 Usuarios

| Método | Ruta             | Descripción            | Headers requeridos            |
|--------|------------------|------------------------|-------------------------------|
| POST   | /api/users       | Crear usuario          | Content-Type                  |
| GET    | /api/users       | Listar usuarios        | Authorization                 |
| PUT    | /api/users/:id   | Editar usuario         | Authorization && Content-Type |
| DELETE | /api/users/:id   | Eliminar usuario       | Authorization                 |

**🔐 Autenticación**

| Método | Ruta            | Descripción       | Headers requeridos            |
|--------|-----------------|-------------------|-------------------------------|
| POST   | /api/auth/login | Login de usuario  | Content-Type                  |

**📝 Publicaciones**

| Método | Ruta             | Descripción             | Headers requeridos            |
|--------|------------------|-------------------------|-------------------------------|
| POST   | /api/posts       | Crear publicación       | Authorization && Content-Type |
| GET    | /api/posts       | Listar publicaciones    | Authorization                 |
| PUT    | /api/posts/:id   | Editar publicación      | Authorization && Content-Type |
| DELETE | /api/posts/:id   | Eliminar publicación    | Authorization                 |


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  if (!title || !content)
    return res.status(400).json({ message: 'Título y contenido son obligatorios' });

  try {
    const post = await prisma.post.create({
      data: { title, content, authorId: userId },
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear publicación', error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: { select: { id: true, username: true } } },
      orderBy: {
        createdAt: 'asc'
      }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener publicaciones', error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
      include: { author: { select: { id: true, username: true } } },
    });
    if (!post) return res.status(404).json({ message: 'Publicación no encontrada' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener publicación', error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;

  try {
    const post = await prisma.post.findUnique({ where: { id: Number(id) } });
    if (!post || post.authorId !== userId)
      return res.status(403).json({ message: 'No autorizado' });

    const updated = await prisma.post.update({
      where: { id: Number(id) },
      data: { title, content },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar publicación', error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const post = await prisma.post.findUnique({ where: { id: Number(id) } });
    if (!post || post.authorId !== userId)
      return res.status(403).json({ message: 'No autorizado' });

    await prisma.post.delete({ where: { id: Number(id) } });
    res.json({ message: 'Publicación eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar publicación', error: error.message });
  }
};

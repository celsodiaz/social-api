const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { username, email, password: hashedPassword },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario', error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, username: true, email: true },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuario', error: error.message });
  }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    const userId = req.user.id; 
  
    if (parseInt(id) !== userId) {
      return res.status(403).json({ message: 'No estás autorizado para editar este usuario' });
    }

    if (!username && !email) {
      return res.status(400).json({ message: 'Debes enviar al menos username o email para actualizar' });
    }
  
    try {
      const updated = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
          ...(username && { username }),
          ...(email && { email }),
        },
      });
      res.json(updated);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
    }
  };
  

  exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
  
    if (parseInt(id) !== userId) {
      return res.status(403).json({ message: 'No autorizado para eliminar este usuario' });
    }
  
    try {
      await prisma.user.delete({ where: { id: Number(id) } });
      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar usuario', error: error.message });
    }
  };
  
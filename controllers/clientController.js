const Client = require("../models/clientModel");

// Criar cliente
exports.createClient = async (req, res) => {
  try {
    const { name, cnpj, contact } = req.body;
    const client = await Client.create({ name, cnpj, contact });
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar clientes
exports.getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

// Buscar cliente por ID
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client)
      return res.status(404).json({ error: "Cliente não encontrado" });
    res.json(client);
  } catch (err) {
    res.status(400).json({ error: "ID inválido" });
  }
};

// Atualizar cliente
exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!client)
      return res.status(404).json({ error: "Cliente não encontrado" });
    res.json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar cliente
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client)
      return res.status(404).json({ error: "Cliente não encontrado" });
    res.json({ message: "Cliente deletado com sucesso" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

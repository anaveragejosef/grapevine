const models = require('./models.js')

const getAll = (req, res) => {
  const { wineType, varietal } = req.query;
   models.getAll(wineType, varietal, (err, data) => {
    if (err) res.status(400).send(err);
    res.status(200).send(data);
  });
}

const createEntry = (req, res) => {
  const { winery, name, wineType, varietal, vintage, notes, purchaseAgain } = req.body;
  models.createEntry(winery, name, wineType, varietal, vintage, notes, purchaseAgain, (err, data) => {
    if (err) res.status(400).send(err);
    res.status(201).end();
  });
}

const updateEntry = (req, res) => {
  const { id } = req.body;
  const { winery, name, wineType, varietal, vintage, notes, purchaseAgain } = req.body;
  models.updateEntry(id, winery, name, wineType, varietal, vintage, notes, purchaseAgain, (err, data) => {
    if (err) res.status(400).send(err);
    res.status(204).end();
  });
}

const deleteEntry = (req, res) => {
  const { id } = req.body;
  models.deleteEntry(id, (err, data) => {
    if (err) res.status(400).send(err);
    res.status(204).end();
  });
}

module.exports = { getAll, createEntry, updateEntry, deleteEntry };

const Wine = require('../db/Entry.js');

const getAll = (callback) => {
  Wine.find({}, (err, data) => {
    if (err) callback(err);
    callback(null, data);
  });
}

const createEntry = (winery, wineType, varietal, vintage, notes, purchaseAgain, callback) => {
  const newBottle = new Wine({
    winery: winery,
    wineType: wineType,
    varietal: varietal,
    vintage: vintage,
    notes: notes,
    purchaseAgain: purchaseAgain
  });
  newBottle.save((err, data) => {
    if (err) callback(err);
    callback(null, data);
  });
}

const updateEntry = (id, winery, wineType, varietal, vintage, notes, purchaseAgain, callback) => {
  Wine.findByIdAndUpdate(id, {winery: winery, wineType: wineType, varietal: varietal, vintage: vintage, notes: notes, purchaseAgain: purchaseAgain} (err, data) => {
    if (err) callback(err);
    callback(null, data);
  });
}

const deleteEntry = (id, callback) => {
  Wine.findByIdAndDelete(id, (err, data) => {
    if (err) callback(err);
    callback(null, data);
  });
}

module.exports = { getAll, createEntry, updateEntry, deleteEntry };

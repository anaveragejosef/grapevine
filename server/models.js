const Wine = require('../db/Entry.js');

const getAll = (wineType, varietal, callback) => {
  Wine.find({wineType: wineType, varietal: varietal}, (err, data) => {
    if (err) callback(err);
    callback(null, data);
  });
}

const createEntry = (winery, name, wineType, varietal, vintage, notes, purchaseAgain, wineImage, callback) => {
  const newBottle = new Wine({
    winery: winery,
    name: name,
    wineType: wineType,
    varietal: varietal,
    vintage: vintage,
    notes: notes,
    purchaseAgain: purchaseAgain,
    wineImage: wineImage
  });
  newBottle.save((err, data) => {
    if (err) callback(err);
    callback(null, data);
  });
}

const updateEntry = (id, winery, name, wineType, varietal, vintage, notes, purchaseAgain, callback) => {
  Wine.findByIdAndUpdate(id, {winery: winery, name: name, wineType: wineType, varietal: varietal, vintage: vintage, notes: notes, purchaseAgain: purchaseAgain}, (err, data) => {
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

const data = {
  name: "worknin",
  site: "job",
};

const getDemo = (req, res) => {
  res.status(200).send(data);
};

module.exports = { getDemo };

module.exports = {
  getAllHouses: (req, res) => {
    const db = req.app.get("db");

    db.get_all_houses().then(resp => {
      res.status(200).send(resp);
    });
  },

  addHouse: (req, res) => {
    const db = req.app.get("db");
    const {
      property_name,
      address,
      city,
      state,
      zip,
      image_url,
      monthly_mortgage_amount,
      desired_rent
    } = req.body;

    db.add_house([
      property_name,
      address,
      city,
      state,
      zip,
      image_url,
      monthly_mortgage_amount,
      desired_rent
    ]).then(resp => {
      res.status(200).send(resp);
    });
  },

  deleteHouse: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_house([id]).then(resp => {
      res.status(200).send(resp);
    });
  }
};

const getUser=(req, res)=> {
    res.send('det user')
}


let query;
const searchQ = (req, res) => {
    const query = req.query.q;
    try {
      if (query) {
        const result = document.filter((obj) =>
          Object.values(obj).some((value) =>
            String(value).toLowerCase().includes(query.toLowerCase())
          )
        );
        if (result.length === 0) {
          res.status(404).json("404 Not Found");
        } else {
          res.status(200).json(result);
        }
      } else {
        res.status(200).json(document);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  

  const GetID = (req, res) => {
    const idNumber = req.params.id;
    try {
      const outcome = document.find((obj) => String(obj.id) === idNumber);
      console.log(outcome);
      if (outcome) {
        res.status(200).json(outcome);
      } else {
        res.status(400).json("object not found");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  const GETsearch = (req, res) => {
    const priceInField = req.body.fields.price;
    console.log(priceInField)
    try {
      const result = document.filter(obj => String(obj.price) === priceInField)
      console.log(result)
        if (result && !query) res.status(200).json(result)
        else if (result && query) res.status(400).json('query and field cannot be provided')
        else res.status(404).json('Object not found')
  
    } catch (error) {
      res.status(500).json(error)
    }
  }
  

module.exports = {
    searchQ,
    GetID,
    GETsearch  };
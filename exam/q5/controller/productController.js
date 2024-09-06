const getproduct = (req, res) => {
  res.send("all product by get");
};

const postproduct = (req, res) => {
  res.send("all product by post");
};

const putproduct = (req, res) => {
  res.send("all product by put");
};

const patchproduct = (req, res) => {
  res.send("all product by patch");
};

const deleteproduct = (req, res) => {
  res.send("all product by delete");
};


export{getproduct, postproduct, putproduct, patchproduct, deleteproduct}
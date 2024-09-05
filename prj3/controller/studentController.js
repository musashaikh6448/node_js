const getStudent = (req, res) => {
  res.send("all  student data get");
};

const postStudent = (req, res) => {
  res.send("all  student data created");
};
const putStudent = (req, res) => {
  res.send("all  student data update");
};
const patchStudent = (req, res) => {
  res.send("all  student data updated");
};
const deleteStudent = (req, res) => {
  res.send("all  student data delted");
};

export { getStudent, postStudent, putStudent, patchStudent, deleteStudent };

const getTeacher = (req, res) => {
    res.send("all  teacher data get");
  };
const postTeacher = (req, res) => {
    res.send("all  teacher data create");
  };
const putTeacher = (req, res) => {
    res.send("all  teacher data update");
  };
const patchTeacher = (req, res) => {
    res.send("all  teacher data updated");
  };
const deleteTeacher = (req, res) => {
    res.send("all  teacher data delete");
  };


  export{getTeacher,postTeacher,putTeacher,patchTeacher,deleteTeacher}
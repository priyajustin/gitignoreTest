const Student = require("../models/studentModel");

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.render("index", { students });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    console.log("$$$$$$$$ req.body $$$$$$$", req.body);
    await Student.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete a new student
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

//display the edit form for the students
exports.getEditForm = async (req, res) => {
  try {
   const student= await Student.findById(req.params.id);
    res.render("edit",{student});
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

//update  the edit form for the students
exports.updateStudent = async (req, res) => {
  try {
   const {name,age,grade}= req.body;
   await Student.findByIdAndUpdate(req.params.id,{name,age,grade});
    res.redirect("/")
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


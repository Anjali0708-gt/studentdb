import Student from "./models/studentModel.js";

export const addStudent = async (req, res) => {
  try {
    const { name, age, email, course } = req.body;
    const data = new Student({ name, age, email, course });
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    await Student.findByIdAndDelete(id);
    res.status(200).json({ msg: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

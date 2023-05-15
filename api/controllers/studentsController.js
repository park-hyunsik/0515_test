const studentModel = require('../models/studentModel');
const gradeModel = require('../models/gradeModel');

// 1. 학생을 등록한다.
exports.registerStudent = (req, res) => {
  const { class_num, name, phone_num, email, address, add_date } = req.body;
  const student = { class_num, name, phone_num, email, address, add_date };

  studentModel.register(student, (err, result) => {
    if (err) throw err;
    res.status(201).json({ message: 'Student registered successfully' });
  });
};

// 2. 학생의 등록된 정보를 성적(평균)으로 내림차순으로 출력한다.
exports.getStudentsSortedByGrade = (req, res) => {
  studentModel.getStudentsWithGrades((err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json({ students: result });
  });
};


// 3. 학생정보를 수정한다.
exports.updateStudent = (req, res) => {
    const row_num = req.params.row_num;
    const { class_num, name, phone_num, email, address, add_date } = req.body;
    const student = { class_num, name, phone_num, email, address, add_date };
  
    studentModel.update(row_num, student, (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: 'Student updated successfully' });
    });
  };

// 학생 정보 및 해당 학생의 성적 삭제
exports.deleteStudent = (req, res) => {
    const studentId = req.params.studentId;
  
    studentModel.delete(studentId, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Failed to delete student' });
      } else {
        res.json({ message: 'Student deleted successfully' });
      }
    });
  };

// 5. 학번으로 검색한다.
exports.searchStudentByClassNum = (req, res) => {
  const class_num = req.params.class_num;

  studentModel.searchByClassNum(class_num, (err, result) => {
    if (err) throw err;
    res.status(200).json({ students: result });
  });
};

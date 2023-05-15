const gradeModel = require('../models/gradeModel');
const gradeModel = require('./gradeModel');

// 6. 학생점수 등록
exports.registerGrade = (req, res) => {
  const row_num = req.params.row_num;
  const { java_point, python_point, clang_point } = req.body;

  // 총점 계산
  const sum = java_point + python_point + clang_point;
  
  // 평균 계산
  const avg = sum / 3;

  const grade = {
    row_num,
    java_point,
    python_point,
    clang_point,
    add_date: new Date(),
    sum,
    avg
  };

  gradeModel.registerGrade(grade, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to register grade' });
    } else {
      res.status(201).json({ message: 'Grade registered successfully' });
    }
  });
};

// 7. 학생점수 수정
exports.updateGrade = (req, res) => {
  const row_num = req.params.row_num;
  const { java_point, python_point, clang_point } = req.body;

  // 총점 계산
  const sum = java_point + python_point + clang_point;
  
  // 평균 계산
  const avg = sum / 3;

  const grade = {
    java_point,
    python_point,
    clang_point,
    add_date: new Date(),
    sum,
    avg
  };

  gradeModel.updateGrade(row_num, grade, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to update grade' });
    } else {
      res.status(200).json({ message: 'Grade updated successfully' });
    }
  });
};

// 8. 학생점수 삭제
exports.deleteGrade = (req, res) => {
  const row_num = req.params.row_num;

  gradeModel.deleteGrade(row_num, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to delete grade' });
    } else {
      res.status(200).json({ message: 'Grade deleted successfully' });
    }
  });
};


// 8. 학생점수 삭제
exports.deleteGrade = (req, res) => {
  const row_num = req.params.row_num;

  gradeModel.delete(row_num, (err, result) => { // 수정: delete 함수명을 deleteGrade로 변경
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to delete grade' });
    } else {
      res.status(200).json({ message: 'Grade deleted successfully' });
    }
  });
};
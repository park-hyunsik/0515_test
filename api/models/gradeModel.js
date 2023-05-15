const connection = require('../../database');
const gradeModel = require('../models/gradeModel');

// 6. 학생점수 등록
exports.registerGrade = (grade, callback) => {
  connection.query('INSERT INTO grade SET ?', grade, callback);
};

// 7. 학생점수 수정
exports.updateGrade = (row_num, grade, callback) => {
  connection.query('UPDATE grade SET ? WHERE row_num = ?', [grade, row_num], callback);
};

// 학생의 성적 정보 삭제
exports.delete = (rowNum, callback) => {
  connection.query('DELETE FROM grade WHERE row_num = ?', rowNum, callback);
};
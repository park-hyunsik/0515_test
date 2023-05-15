const connection = require('../../database');
const gradeModel = require('./gradeModel'); // gradeModel 모듈을 불러옴

// 1. 학생을 등록한다.
exports.register = (student, callback) => {
  connection.query('INSERT INTO student SET ?', student, callback);
};

// 2. 학생의 등록된 정보를 성적(평균)으로 내림차순으로 출력한다.
exports.getStudentsWithGrades = (callback) => {
    connection.query(
      'SELECT student.*, grade.* FROM student LEFT JOIN grade ON student.row_num = grade.row_num ORDER BY grade.avg DESC, student.class_num DESC',
      callback
    );
  };


// 3. 학생정보를 수정한다.
exports.update = (row_num, student, callback) => {
    connection.query('UPDATE student SET ? WHERE row_num = ?', [student, row_num], callback);
  };

// 학생 정보 삭제
exports.delete = (studentId, callback) => {
    // 학번에 해당하는 학생의 일렬번호를 조회
    connection.query('SELECT row_num FROM student WHERE class_num = ?', studentId, (err, rows) => {
      if (err) {
        callback(err, null);
      } else {
        if (rows.length === 0) {
          callback(null, null); // 해당 학번의 학생이 존재하지 않을 경우 콜백 호출
        } else {
          const row_num = rows[0].row_num;
  
          // 해당 학생의 성적 정보를 먼저 삭제
          gradeModel.delete(row_num, (err, result) => {
            if (err) {
              callback(err, null);
            } else {
              // 성적 정보 삭제 후, 학생 정보 삭제
              connection.query('DELETE FROM student WHERE row_num = ?', row_num, callback);
            }
          });
        }
      }
    });
  };


// 5. 학번으로 검색한다.
exports.searchByClassNum = (class_num, callback) => {
  connection.query('SELECT * FROM student LEFT JOIN grade ON student.row_num = grade.row_num WHERE class_num = ?', class_num, callback);
};


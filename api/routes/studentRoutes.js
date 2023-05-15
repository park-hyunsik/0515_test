const express = require('express');
const studentsController = require('../controllers/studentsController');
const router = express.Router();

// 1. 학생을 등록한다.
router.post('/', studentsController.registerStudent);

// 2. 학생의 등록된 정보를 성적(평균)으로 내림차순으로 출력한다.
router.get('/grades', studentsController.getStudentsSortedByGrade);

// 3. 학생정보를 수정한다.
router.put('/update/:row_num', studentsController.updateStudent);

// 4. 학생 삭제 API
router.delete('/:studentId', studentsController.deleteStudent);

// 5. 학번으로 검색한다.
router.get('/:class_num', studentsController.searchStudentByClassNum);

module.exports = router;

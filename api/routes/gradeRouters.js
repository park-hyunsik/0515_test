const express = require('express');
const gradeController = require('../controllers/gradeController');
const router = express.Router();

// 6. 학생점수 등록
router.post('/:row_num/grades', gradeController.registerGrade);

// 7. 학생점수 수정
router.put('/:row_num/grades', gradeController.updateGrade);

// 8. 학생점수 삭제
router.delete('/:row_num/grades', gradeController.deleteGrade);

module.exports = router;

import request from '@/utils/request'

export function getExamList() {
  return request({
    url: '/v1/student/exams?pageNum=0&pageSize=100',
    method: 'get'
  })
}

// 获取考试信息
export function getExamInfo(id) {
  return request({
    url: '/v1/student/exams/' + id,
    method: 'get'
  })
}

// 获取试卷详情
export function getExamDetails(id) {
  return request({
    url: '/v1/student/examPapers/getByExam/' + id,
    method: 'get'
  })
}

// 回答问题
export function answerQuestion(id, answer) {
  return request({
    url: '/v1/student/examAnswers?answer=' + answer + '&questionId=' + id,
    method: 'post'
  })
}

// 交卷
export function examSubmit(id) {
  return request({
    url: '/v1/student/examUsers?examId=' + id,
    method: 'post'
  })
}

// 判断是否交卷
export function isSubmit(id) {
  return request({
    url: '/v1/student/examUsers?examId=' + id,
    method: 'get'
  })
}

// 获取成绩
export function getExamGrade(id) {
  return request({
    url: '/v1/student/examUsers?examId=' + id,
    method: 'get'
  })
}

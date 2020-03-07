import './studentList.scss';
import studentCard from '../studentCard/studentCard';
import utils from '../../helpers/utils';

const createStudentList = (students) => {
  let domString = '<ul class="student-list">';
  students.forEach((student) => {
    domString += studentCard.createStudentCard(student);
  });
  domString += '';
  utils.printToDom('student-container', domString);
};

export default { createStudentList };

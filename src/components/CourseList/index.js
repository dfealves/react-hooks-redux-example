import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import { Container } from './styles';
function AddCourseAction(title) {
  return { type: "ADD_COURSE", title };
}

function CourseList() {
  const qty = 10;

  const courses = useSelector((state) => state.data.slice(0, qty), [qty]);
  const dispatch = useDispatch();

  function AddCourse() {
    dispatch(AddCourseAction("TypeScript"));
  }

  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={AddCourse}>
        Adicionar
      </button>
    </>
  );
}

export default CourseList;

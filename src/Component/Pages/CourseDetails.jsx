import React from "react";
import { useParams,Link } from "react-router-dom";

const courses={
   '101': { title: 'React Fundamentals', instructor: 'Ms. Patel' },
  '102': { title: 'JavaScript Advanced', instructor: 'Mr. Khan' },
  '103': { title: 'CSS Mastery', instructor: 'Ms. Lee' },
}

export default function CourseDetails() {
    const {courseId}=useParams()
    const course=courses[courseId]
    if(!course) return <p> course not found</p>
  return <div>
    <h1>
        {course.title}
              <p>Instructor: {course.instructor}</p>
      <p>Course ID: {courseId}</p>
      <Link to="/dashboard/courses">← Back</Link>


    </h1>
  </div>;
}

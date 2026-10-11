import axios from "axios";
import { useEffect, useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await axios.get("https://dummyjson.com/products");

     
        const data = res.data;

        setCourses(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Loading courses...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
       <div key={course.id}>
          <img
            src={course.thumbnail}
            alt={course.title}
            width="100"
          />
          <h3>{course.title}</h3>
          <p>${course.price}</p>
      
        </div>
      ))}
    </div>
  );
}

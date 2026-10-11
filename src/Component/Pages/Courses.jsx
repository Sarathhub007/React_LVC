
import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const [form, setForm] = useState({
    title: "",
    price: "",
    thumbnail: "",
  });

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products"
        );

        setCourses(res.data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newCourse = {
      id: Date.now(),
      title: form.title,
      price: Number(form.price),
      thumbnail: form.thumbnail,
    };

    setCourses((previousCourses) => [
      ...previousCourses,
      newCourse,
    ]);

    setForm({
      title: "",
      price: "",
      thumbnail: "",
    });
  }

  const filteredCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  if (loading) {
    return <p>Loading courses...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Courses</h1>

      {/* Debounced search */}
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search !== debouncedSearch && (
        <p>Waiting for you to stop typing...</p>
      )}

      {/* Add course form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Course title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          type="url"
          name="thumbnail"
          placeholder="Image URL"
          value={form.thumbnail}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Course</button>
      </form>

      <hr />

      {filteredCourses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        filteredCourses.map((course) => (
          <div key={course.id}>
            <img
              src={course.thumbnail}
              alt={course.title}
              width="100"
            />

            <h3>{course.title}</h3>
            <p>${course.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

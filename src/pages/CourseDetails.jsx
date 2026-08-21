import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    return (
      <div className="not-found">
        <h1>Course Not Found</h1>

        <Link to="/courses">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-container">

        <img
          src={course.image}
          alt={course.name}
          className="details-image"
        />

        <div className="details-content">

          <h1>{course.name}</h1>

          <p className="details-description">
            {course.description}
          </p>

          <p>
            <strong>Instructor:</strong>{" "}
            {course.instructor}
          </p>

          <p>
            <strong>Duration:</strong>{" "}
            {course.duration}
          </p>

          <p>
            <strong>Price:</strong>{" "}
            {course.price}
          </p>

          <h2>Course Modules</h2>

          <ul className="modules">
            {course.modules.map((module, index) => (
              <li key={index}>
                {module}
              </li>
            ))}
          </ul>

          <button className="enroll-btn">
            Enroll Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
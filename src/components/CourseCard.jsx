import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.name} />

      <div className="course-content">
        <h3>{course.name}</h3>

        <p>{course.description}</p>

        <div className="course-info">
          <span>⏱ {course.duration}</span>
          <span>{course.price}</span>
        </div>

        <Link
          to={`/courses/${course.id}`}
          className="details-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
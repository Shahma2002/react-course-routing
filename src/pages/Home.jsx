import { Link } from "react-router-dom";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Learn Today. Build Your Future.</h1>

          <p>
            Learn practical skills from expert instructors and
            build your career with our industry-focused courses.
          </p>

          <Link to="/courses" className="hero-btn">
            View Courses
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro">
        <h2>Welcome to EduLearn</h2>

        <p>
          EduLearn is an online learning platform providing
          high-quality courses in programming, data analytics,
          artificial intelligence and web development.
        </p>
      </section>

      {/* Featured Courses */}
      <section className="featured">
        <h2>Featured Courses</h2>

        <div className="course-grid">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
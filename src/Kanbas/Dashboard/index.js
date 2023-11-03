import { Link } from "react-router-dom";
import "./index.css";

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {

  return (
    <div>
      <h2 className="text-muted pt-2">Dashboard</h2>
      <hr />
      <h5 className="wd-dashboard-pubcou">
        Published Courses ({courses.length})
      </h5>
      <hr />
      <div className="courseForm">
        <div style={{ padding: 10 }}>
          <input value={course.name} className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} /><br />
          <input value={course.number} className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} /><br />
          <input value={course.startDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} /><br />
          <input value={course.endDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} /><br />
        </div>
        <div className="addOptions">
          <button onClick={() => { addNewCourse(); }} type="button" class="btn btn-success" >
            Add
          </button>
          <button onClick={() => {
            updateCourse();
          }} type="button" class="btn btn-primary">
            Update
          </button>
        </div>
      </div>
      <div>
      </div>
      {/* <div className="d-flex flex-row flex-wrap row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"> */}
      {courses.map((course, index) => (
        // <div className="col wd-custom-card ">
        //   <div className="card wd-dashboard">
        //     <img
        //       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEUAlv+tY//LAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
        //       alt="..."
        //     />
        //     <div className="card-body">
        //       <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
        //         <h5 className="wd-card-course-title">{course.name}</h5>
        //       </Link>
        //       <h4 className="wd-card-course-code">
        //         {course._id}.{course.startDate}.{course.endDate}{" "}
        //       </h4>
        //       <h6 class="wd-card-sem">{course.semester}</h6>
        //       <br />
        //       <FaRegPenToSquare />
        //     </div>
        //   </div>
        // </div>
        <div className="course">
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
            <h5>{course.name}</h5>
          </Link>
          <div className="editOptions">
            <button onClick={(event) => {
              event.preventDefault();
              setCourse(course);
            }} type="button" class="btn btn-warning">
              Edit
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }} type="button" class="btn btn-danger">
              Delete
            </button>
          </div>

        </div>
      ))}
      {/* </div> */}
    </div>
  );
}

export default Dashboard;

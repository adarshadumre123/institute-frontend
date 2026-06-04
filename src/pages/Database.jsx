
// import {getAllExam} from '../pages/Exam'
// import {getAllCourses} from '../pages/Courses'

import React, { useEffect, useState } from "react";

const Database = () => {
  const [details, setDetails] = useState({
    exams: [],
    courses: [],
  });

  const [loading, setLoading] = useState(true);

  const loadDatabaseData = async () => {
    try {
      const [exams, courses] = await Promise.all([
        getAllExam(),
        getAllCourses(),
      ]);

      setDetails({
        exams,
        courses,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDatabaseData();
  }, []);

  return <div>Database Page</div>;
};

export default Database;
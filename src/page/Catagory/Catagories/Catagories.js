import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../../../Share/CourseSummery/CourseSummery';

const Catagories = () => {
    const catagoryCourse = useLoaderData();
    return (
        <div>
            <h2>All catagories:{catagoryCourse.length}</h2>
            <div>
                {
                    catagoryCourse.map(course => <CourseSummery key={course._id} course={course}></CourseSummery>)
                }
            </div>
        </div>
    );
};

export default Catagories;
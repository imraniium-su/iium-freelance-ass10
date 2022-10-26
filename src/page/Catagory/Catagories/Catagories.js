import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../../../Share/CourseSummery/CourseSummery';

const Catagories = () => {
    const catagoryCourse = useLoaderData();

    return (
        <div className='my-5'>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    catagoryCourse.map(course => <CourseSummery key={course._id} course={course} ></CourseSummery>)
                }
            </div>
        </div>
    );
};

export default Catagories;
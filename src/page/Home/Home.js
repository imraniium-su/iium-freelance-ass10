import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../../Share/CourseSummery/CourseSummery';

const Home = () => {
    const allcourse = useLoaderData();
    return (
        <div className='my-5'>

            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    allcourse.map(course => <CourseSummery course={course} key={course._id} ></CourseSummery>)
                }
            </div>
        </div>
    );
};

export default Home;
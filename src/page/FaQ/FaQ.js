import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FaQ = () => {
    return (
        <div className='my-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item className='my-3' eventKey="0">
                    <Accordion.Header>Q. Who should take an Online Course?</Accordion.Header>
                    <Accordion.Body>
                        Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can
                        Advance your skill-set or begin a career change.
                        Take the next step in your formal education.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q. Are there prerequisites or language requirements?</Accordion.Header>
                    <Accordion.Body>
                        There are no prerequisites. Our courses are open to students of all backgrounds who are 18 years of age and older.
                        All courses are conducted in English. Video lectures include English subtitles and the option to slow-down, pause, or replay lectures for better retention. Discussion boards are a critical component of each of our courses; therefore, we suggest students have a conversational knowledge of English when pursuing a Certificate of Completion.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='my-3' eventKey="2">
                    <Accordion.Header>Q. Can I take more than one course at a time?</Accordion.Header>
                    <Accordion.Body>
                        If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Q. When should I register?</Accordion.Header>
                    <Accordion.Body>
                        Most courses are offered at least 3 times during the year. Certain courses can fill up quickly, so be sure to register early.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='my-3' eventKey="4">
                    <Accordion.Header>Q. Do you provide financial assistance or payment plans?</Accordion.Header>
                    <Accordion.Body>
                        As noncredit courses, our online courses are not eligible for state or federal financial aid. Some students seek professional development support from their employer or from external scholarships. In the United States, fees paid for professional development are deductible from your personal income taxes to the extent permitted by current law.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Q. How long in this course?</Accordion.Header>
                    <Accordion.Body>
                        We currently offer 4-week, 6-week, and 8-week courses. Check the course dates listed online prior to registration.
                        For a 4-week or 6-week course, you can expect to spend 5-7 hours a week reviewing and completing the course material.
                        For an 8-week course, you can expect to spend 8-10 hours a week reviewing and completing the course material.
                        You will also have read-only access to your course in Canvas for 90 days after its conclusion to review the course materials at your leisure.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='my-3' eventKey="6">
                    <Accordion.Header>Q. Do I need specific equipment to take Online Courses?</Accordion.Header>
                    <Accordion.Body>
                        ou should have an up-to-date web browser such as: Chrome, Safari, Firefox, or Internet Explorer. For more detailed information, please see the guides for supported browsers and basic computer specifications.
                        Our Online Courses can be accessed on a mobile or tablet device, although we strongly encourage you to have access to a desktop or laptop computer and reliable internet connection for certain course components. Former students have told us it is easiest to read discussion threads and complete written assignments on a laptop or desktop computer.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Q. How do I contact technical support during my course?</Accordion.Header>
                    <Accordion.Body>
                        For technical support, please email online.support@sothebysinstitute.com, 09:00 – 22:00 GMT, Monday – Friday. We are ready to help!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='my-3' eventKey="8">
                    <Accordion.Header>Q. Do I need to buy textbooks?</Accordion.Header>
                    <Accordion.Body>
                        All the reading materials you are required to access are included with your course. Instructors may provide recommended and suggested texts for further exploration.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>Q. Can I audit an Online Course?</Accordion.Header>
                    <Accordion.Body>
                        As a continuing education student, it is your decision how you participate in the course. Those who plan to audit the course and not receive a certificate of completion should send a message to the instructor at the start of the course so they understand your goals.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='my-3' eventKey="10">
                    <Accordion.Header>Q. How do I contact technical support during my course?</Accordion.Header>
                    <Accordion.Body>
                        For technical support, please email online.support@sothebysinstitute.com, 09:00 – 22:00 GMT, Monday – Friday. We are ready to help!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                    <Accordion.Header>Q. Who should I contact if I have additional questions?</Accordion.Header>
                    <Accordion.Body>
                        You can contact the Online Team at iiumfreelance@gmail.com or at +1 212-897-6644.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FaQ;
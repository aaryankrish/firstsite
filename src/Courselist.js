import React from 'react';
import Course from './Course';
import PostTitle from './components/PostTitle';

const Courselist = () => {

    const coursearray =[
        {
            name:"vinod",
            desc:"wev developer",
        },
        {
            name:"vinod",
            desc:"wev developer"
        },
        {
            name:"vinod",
            desc:"wev developer"
        }
    ]

    const courses = coursearray.map((course,i) => {
        return <Course name={coursearray[i].name} desc={coursearray[i].desc} />
    });

    return (
        <div>
            <h1>AVAILABLE COURSES</h1>
            {courses}
            <PostTitle />
        </div>
    )
}
export default Courselist;
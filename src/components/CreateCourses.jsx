import React, { useState } from 'react'

const CreateCourses = () => {
    const[courses,setCourses]=useState({
        course:"",
        subject:"",
        price:"",
        description:""
    })
    const createCourses=async()=>{
        try {
            const token = await localStorage.getItem('token')
            const res = await axios.post('http://localhost:8000/api/v1/course/create-course',{
                headers:{
                    authorization:`Bearer ${token}`,
                    "content-Type":"application/json"
                }

            })
            if(res.data.success){
                toast.success(res.data.success || "courses created successfully")
            }
        setCourses({
        course:"",
        subject:"",
        price:"",
        description:""
            })
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
        
    </div>
  )
}

export default CreateCourses
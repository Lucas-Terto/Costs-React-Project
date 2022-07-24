import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import styles from './Project.module.css'

const Project = () => {

    const {id} = useParams()
    console.log(id)

    const [project, setProject] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json())
        .then((data) => {
            setProject(data)
        })
        .catch((error) => console.log(error))
    }, [id])

  return (
    <div>
        {project.name}
    </div>
  )
}

export default Project
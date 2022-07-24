import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

import styles from './Projects.module.css'

const Projects = () => {

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  
  const location = useLocation()
  let message = ''
  if(location.state) {
    message = location.state.message
  }
    
  useEffect(() =>{
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch((error) => console.log(error))

    }, 500)
  }, [])

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto"/>
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard 
              id={project.id}
              name={project.name} 
              budget={project.budget}
              category={project.category?.name}
              key={project.id}
            />))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 &&
            <p>Não há projetos cadastrados</p>
          }
      </Container>
    </div>
  )
}

export default Projects
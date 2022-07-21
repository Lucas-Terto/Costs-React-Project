import React, {useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

const ProjectForm = ({btnText}) => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/categories", {//request com fetch api para a url
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())//rebendo a resposta e convertendo para json
      .then((data) => {
        setCategories(data)//enviando os dados json para o hook
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <form className={styles.form}>
        <Input 
          type="text" 
          text="Nome do projeto:" 
          name="name"           
          placeholder="Insira o nome do projeto"
        />
        <Input 
          type="number" 
          text="Orçamento do projeto:" 
          name="budget" 
          placeholder="Insira o orçamento total"
        />
        <Select 
          name="category_id" 
          text="Selecione uma categoria:"
          options={categories} 
        />
        <SubmitButton text={btnText}/>
    </form>
  )
}

export default ProjectForm
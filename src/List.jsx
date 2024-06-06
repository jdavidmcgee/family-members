import React from 'react'
import Person from './Person'

const List = ({people}) => {
  return (
    // we'll map over the people array and return a new array with the JSX for each person
    <section>
        {people.map((person) =>{
           return <Person key={person.id} {...person}/>
        })}
    </section>
  )
}

export default List

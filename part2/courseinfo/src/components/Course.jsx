// Course component that will render the name and the course parts - ({course})
const Course = (props) => { 

  return ( 
    <div>
      {props.courses.map(course => 
      <div key={course.id}>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
      </div>
      )}
    </div>
  )

}
// header component - (course)
const Header = ({course}) => <h1>{course.name}</h1>

// Content component - from course dictionary, map the parts array into each individual part. 
const Content = (props) => {
  // console.log('Content: parts =', props.parts);

  return (
  <div>
    {props.parts.map(part => 
      <Part key={part.id} part={part}/>
    )}
  </div>
  )

}

// Part component - part is essential to get the following from each part: (name, exercises).to be used by Content component 
const Part = ({part}) => { 
  // console.log('Part: part =', part);

  return ( 
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// component for total of all the exercises (AUGUST 2 REVIEW HOW TO USE REDUCE)
const Total = ({parts}) => { 
  const total = parts.reduce((exercisesSum, part) => {
    // console.log("exerciseSum and parts are", exercisesSum, part)
    return exercisesSum + part.exercises
  }, 0)

  return(
    <div>
      <h4>total of {total} exercises</h4>
    </div>
  )
}

export default Course
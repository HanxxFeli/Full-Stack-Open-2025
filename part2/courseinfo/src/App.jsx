
// Course component that will render the name and the course parts - ({course})
const Course = ({course}) => { 
  console.log('Course: course=', course)

  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )

}
// header component - (course)
const Header = (props) => <h1>{props.course}</h1>

// Content component - from course dictionary, map the parts array into each individual part. 
const Content = (props) => {
  console.log('Content: parts =', parts);

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
  console.log('Part: part =', part);

  return ( 
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// component for total of all the exercises 
const Total = (props) => { 
  <p>Number of exercises {props.total}</p>
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
      {/* <Total total={
        course.parts[0].exercises + 
        course.parts[1].exercises + 
        course.parts[2].exercises  
      }/> */}
    </div>
  )
}

export default App
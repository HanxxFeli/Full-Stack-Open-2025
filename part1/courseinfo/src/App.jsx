
const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {
      part: 'Fundamentals of React', 
      exercise: 10
    },
    {
      part: 'Using props to pass data', 
      exercise: 7
    },
    {
      part: 'State of a component', 
      exercise: 14
    },
  ]

  return ( 
    <div>
      <Header course={course} />
      <Content content={content}/>
      <Total content={content} />
    </div>
  )
}

// Header = name of the course 
const Header = (props) => { 
  console.log(props)
  return (
  <div>
    <p>The name of the course is {props.course}</p>
  </div>
  )
}

// Content = parts and number of exercises
const Content = (props) => { 
  console.log(props)
  return (
  <div>
    <Part part={props.content[0].part} exercise = {props.content[0].exercise} />
    <Part part={props.content[1].part} exercise = {props.content[1].exercise} />
    <Part part={props.content[2].part} exercise = {props.content[2].exercise} />
  </div>
  )
}

// Refactored content = render name and number of exercises of one part
const Part = (props) => { 
  return ( 
    <div>
      <p>
        The part of the course is called {props.part} with {props.exercise} exercises per part
      </p>
    </div>
  )
}

// Total = total number of exercises
const Total = (props) => { 
  console.log(props)
  return (
  <div>
    <p>The total number of exercises are {props.content[0].exercise + props.content[1].exercise + props.content[2].exercise}</p>
  </div>
  )
}

export default App
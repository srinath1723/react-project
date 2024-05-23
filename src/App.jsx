const App = () => {
  const friends =[
    {id: 1, name:"sri",age:25},
    {id: 2, name:"peter",age:20},
    {id: 3, name:"Mark",age:40}
  ]
  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {
          friends.map((friend,index)=>
          <li key={index}>{friend.name}{friend.age}</li>
        )
        }
      </ul>
    </div>
  )
}

export default App

import './App.css'

function App() {
  return (
    <>
    <Text display="Facebook"/>
    <Text display="Instagram"/>
    </>
  )
}
function Text({display}) {
  return (
    <div>
      <p>{display}</p>
      <h1>hello world</h1>
    </div>
  )
}
export default App

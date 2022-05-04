interface ButtonProps {
    text: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 p-2">{props.text}</button>
}

function App() {
  return (
    <div> 
      <Button text="Enviar" />
      <Button text="Ok" />
    </div>
  )
}

export default App

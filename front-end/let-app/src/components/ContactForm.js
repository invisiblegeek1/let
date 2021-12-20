
import './App.css';

function App() {
  return (
    <div className="App">
     <form 
  method="POST" 
  action="https://script.google.com/macros/s/AKfycbzPUOQ4WkwPqzvpLxCyoXeOTqH8MozJYV2aJjnSBxfHnr1BJcaOXWEWtbhBvbQUFZXGQg/exec"
  // onSubmit={(e)=>{e.preventDefault();}}
>
  <input name="Name" type="text" placeholder="Name" required />
  <input name="Email" type="email" placeholder="Email" required />
  <input name="Mobile" type="text" placeholder="Mobilel" required />
  <input name="Message" type="text" placeholder="Message" required />


  <button type="submit">Send</button>
</form>
    </div>
  );
}

export default App;

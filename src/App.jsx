import { useState } from "react";
import "./index.css";
import { useRef } from "react";

function App() {
  // const [Username, setUsername  ] = useState('')
  const formRef = useRef();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    {
      formData.email === "" || formData.password === ""
        ? setError("Please fill in all the fields")
        : console.log(formData);
      setError("");
    }
  };

  const handleChange = (e) =>{
    const {name, value} = e.target 
    setFormData({...formData, [name]:value})
  }

  const handleFocus =(e) =>{
    e.preventDefault()
    formRef.current.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className=" bg-cyan-200 h-screen flex  justify-center items-center">
     <form
      onSubmit={handleSubmit} ref={formRef}
      className=" bg-white grid  p-14 gap-6 rounded-xl"
    >
      
      <label>
        Email:
        <input 
          className="border-2 border-gray-200 flex flex-col w-full p-1 m-2 rounded "
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </label>
      <label>
        Password:
        <input 
          className="border-2 border-gray-200 flex flex-col w-full p-1 m-2 rounded "
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </label>

      <label >
        <button type="submit"
        className="bg-cyan-300 p-2 w-full h-12 rounded-md pointer mb-5 mt-5 ">Login</button>
      </label>
      
     
    </form>
    {error && <p>{error}</p>}
    </div>
   
  );
}

export default App;

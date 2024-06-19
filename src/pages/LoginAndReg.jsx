import { useState } from 'react'
import { useAppContext } from '../Context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";


const LoginAndReg = () => {
  const [form, setForm] = useState('login');
  // const [serverData, setServerData] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()

  const { isOpenForm, handleIsOpenForm,user,setUser} = useAppContext()

  async function handleSubmitLogin(e){
    e.preventDefault()
    const formData = {username,password}
    console.log(formData)

    try {
      const res = await fetch("https://664f05f9fafad45dfae1f2d3.mockapi.io/api/v1/products/users");
      const data = await res.json();

      const userData = data.find((ell) => ell.username === formData.username);
      console.log(userData);
      setUser(userData.username);
      toast.success("Login successfull!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed!");
      console.log(error)
    }
   

  }

  async function handleSubmitReg(e) {
    e.preventDefault();
    const formData = { username,email,password,confirmPassword };
    console.log(formData);
    let formDataReg={...formData,acctBalance:40000}
    console.log(formDataReg);

    try {
      const res = await fetch("https://664f05f9fafad45dfae1f2d3.mockapi.io/api/v1/products/users",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataReg),
      });
      const data = await res.json();
      console.log(data)

      // const userData = data.find((ell) => ell.username === formData.username);
      // console.log(userData);
      // setUser(userData.username);
      // navigate("/");
      setForm('register')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <section className="Auth-form" style={{width:'400px',padding:'2rem',background:''}}>
        <h2>Authentication</h2>
        <div className="buttons" style={{width:'100%',display:'flex',justifyContent:'center',gap:'1rem'}}>
          <button onClick={()=>setForm('login')}>Login</button>
          <button onClick={()=>setForm('register')}>Register</button>
        </div>
        {form ==='login' && <form onSubmit={handleSubmitLogin} className="login" style={{width:'100%'}}>
          <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} /><br />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
          <button type='submit'>Login</button>
        </form>}
        {form==='register' && <form onSubmit={handleSubmitReg} className="register">
          <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} /><br />
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} /><br />
          <button type='submit'>Register</button>
        </form>}
      </section>
    </div>
  );
}

export default LoginAndReg
import React,{useState}from 'react'
import '../login/Login.css'
function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
            const submission=()=>{
                const user={
                email:email,
                password:password
}
console.log("Email:"+user.email,"password:"+user.password)
}

  return (
        <div>
            <div className="login-val">

                <h3>Email</h3>
                <input type="Email" className="form-control mb-4" onChange={(arg)=>setemail(arg.target.value)} placeholder="Enter a Email"/>
                <p id="val"></p>
                <h3>password</h3>
                <input type="password" className="form-control mb-4" onChange={(arg)=>setpassword(arg.target.value)} placeholder="Enter a Password"/>
            <input type="button" className="btn btn-outline-success" onClick={submission} value="login"/>
                 </div> 
                 </div>
    )
}
export default Login


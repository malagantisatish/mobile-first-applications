import {Component} from "react"
import { Navigate } from 'react-router-dom';

import "./index.css"

const userDetails = {username:"satish",password:"satish@108"}

class Login extends Component{
    state={username:"",password:"",error:true,errorMsg:""}

    getTheUsername=event=>{
        this.setState({username:event.target.value})
    }

    getThePassword=event=>{
        this.setState({password:event.target.value})
    }

    submitTheData=event=>{
        event.preventDefault()

        const {username,password}=this.state 
        if (username===userDetails.username){
            console.log(username)
            if (password===userDetails.password){
                this.setState({error:false})
            }
            else{
                this.setState({error:true,errorMsg:"Invalid Password"})
            }
        }
        else{
            this.setState({error:true,errorMsg:"Invalid username"})
        }
    }


    render(){
            const {username,password,error,errorMsg}=this.state
            if (!error){
                return <Navigate to="/"/>
            }  
        return (
            <div className="login-page">
                <div className="form-container">
                <h1>Login</h1>
                <form className="form">
                    <label htmlFor="username" className="label-text" onSubmit={this.submitTheData}>USERNAME</label>
                    <br/>
                    <input id="username" value={username} className="input-element" placeholder="ENETR USERNAME" onChange={this.getTheUsername}/>
                    <br/>
                    <label htmlFor="password" className="label-text">PASSWORD</label>
                    <br/>
                    <input id="password" value={password} className="input-element" placeholder="ENETR PASSWORD"  onChange={this.getThePassword}/>
                    <br/>
                    {error?<p className="error-msg">{errorMsg}</p>:null}
                    <button type="submit" onClick={this.submitTheData}  className="btn">Login</button>
                  
                </form>
                </div>
            </div>
        )
    }
}


export default Login
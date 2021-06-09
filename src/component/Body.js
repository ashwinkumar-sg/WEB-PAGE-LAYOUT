import React from "react"
import signinimage from "../image/sign-in-image.png"
class SinIn extends React.Component {
    constructor(){
        super()
        this.state = {
            username:'',
            email:'',
            password:'',
            check:true,
        }
    } 

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value // [e.target.id] : e.target.value 
        })
    }
    
    handleCheck = () => {
        this.setState((prevState)=>{
            return{
                check : !prevState.check
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const formData = {
            
            email:this.state.email,
            
            password:this.state.password,
            
            check:this.state.check
        }
        console.log(formData)
    }
    render(){ 
        return(
        <div className="container">
            <div class="row p-5">
            <div className="col-4">

               <img src={signinimage} alt="SignIn" class="rounded" width="500" height="600" />

            </div>


            <div className="col-8  p-5 m-auto ">

                <div class=" bg-white  p-5 border">
                <h3 >User Sign In</h3>
                <form onSubmit={this.handleSubmit}> 
                <div className="form-group"> 
                    <input 
                    className="form-control"
                    placeholder="Email*"
                    type="email" 
                    value={this.state.email} 
                    name="email" 
                    onChange={this.handleChange} 
                    id="email" 
                    />
                </div>
                <br/>


                <div className="form-group"> 
                    <input className="form-control"
                    placeholder="Password*"
                    type={this.state.check ? "text" : "password"} 
                    value={this.state.password} 
                    name="password" 
                    onChange={this.handleChange} 
                    id="password" 
                    />
                <br/>
                </div>
                

                <div class="row  ">
                    <div className="col">
                    <input type="checkbox" onChange={this.handleCheck} checked={this.state.check}/><label class="p-2"> see password</label><br />
                    </div> 
                    <div className="col p-2"> Forgot password?</div>
                </div>
                <p></p>
                <input className="btn btn-primary btn-lg" type="submit" value="Sin In" />
                <p></p>
                <p>Don't have an account? click here to create another one </p>

                </form>
            </div>
        </div>
        </div>
        </div>
        )
    }
}

export default  SinIn
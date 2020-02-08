import React from 'react'

const AuthForm = (props) => {
    const { handleChange, handleSubmit, username, password, btnText } = props
    return(
        <div className="container">
        <form onSubmit={handleSubmit} action="" id="form" className="form">
            <input 
                type="text" 
                name="username" 
                className="form-control"
                id="username"
                value={username} 
                onChange={handleChange} 
                placeholder="Username" />
                <br />
            <input 
                type="password" 
                name="password" 
                className="form-control"
                id="password"
                value={password} 
                onChange={handleChange} 
                placeholder="Password" />
                <button >{btnText}</button>
                <br />
        </form>
        </div>
    )

}

export default AuthForm
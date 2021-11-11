import React from 'react'; 

const Form = (props) => {
    const { change, submit } = props;
    const {username, email, password, tos} = props.values;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const {name,value,checked,type} = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        change(name,newValue);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Username: 
                <input 
                    type='text'
                    name='username'
                    value={username}
                    onChange={onChange}
                />
            </label>
            <label>Email: 
                <input 
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                />
            </label>
            <label> Password: 
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                />
            </label>
            <label> Terms of Service (ToS)
                <input 
                    type='checkbox'
                    name='tos'
                    onChange={onChange}
                    checked={tos}
                />
            </label>
                <input 
                    type='submit' 
                    value='Submit your Character!'
                />
        </form>
        
            
                
    
    )
}

export default Form;
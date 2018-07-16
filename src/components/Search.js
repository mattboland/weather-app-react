import React from 'react';

class UserInput extends React.Component {
    render(){
        return (
            <div>
                placeholder
            </div>
        )
    }
}

function Search () {
    console.log('api', process.env.REACT_APP_API_KEY)
    return (
        <div>
            <input placeholder='Enter Zip'/>
            <button className='button'>Submit</button>
        </div>
    )
}

export default Search;
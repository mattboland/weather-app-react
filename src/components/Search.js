import React from 'react';
import { getFiveDayForecast } from '../utils/api';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cityName: ''
        }
    
        this.handleSubmitCityName = this.handleSubmitCityName.bind(this);
        this.handleUpdateCityName = this.handleUpdateCityName.bind(this);
    };
   

    handleSubmitCityName () {
        getFiveDayForecast(this.state.cityName)
          .then(function (res) {
            console.log(res)
          })
    };

    handleUpdateCityName(e) {
        const cityName = e.target.value;
        this.setState(function () {
            return {
            cityName: cityName
            }
        });
    };

    render() {
        return (
            <div
                className='search-container'>
                <input
                className='form-control'
                onChange={this.handleUpdateCityName}
                placeholder='US City Name'
                type='text'
                value={this.state.cityName} />
                <button
                type='button'
                style={{margin: 10}}
                className='btn btn-success'
                onClick={this.handleSubmitCityName}>
                    Get Weather
                </button>
            </div>
        )
    }
 }

export default Search;
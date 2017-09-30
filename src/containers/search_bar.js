import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state={ term: ''};
    this.onInputChange = this.onInputChange.bind(this); //this is used to bind this and to avoid conflicts
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ term:event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    console.log(`Submitting form with data ${this.state.term}`)
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder= "Get a five-day forecast in your city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  //this will ensure that action flows down via middleware
  return bindActionCreators({ fetchWeather }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);

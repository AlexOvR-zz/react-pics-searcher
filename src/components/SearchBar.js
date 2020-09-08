import React from 'react';

class SearchBar extends React.Component {
  //Controlled Event Handler use the state obj to update and store the value , An Uncontrolled EventHandler doesn't use the state to update his Value so it's required to check de DOM for the value
  state = { term: ''};

  onFormSubmmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term); //Calling function via props (defined on parent App)
  }

  render() {
    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmmit}>
                <i className="icon search"></i>  
                <label>Image Search:</label>    
                {/*UnControlled Event Handler */}
                <input type="text" className="field hidden" onChange={(e)=> console.log(e.target.value)}></input>  
                {/*Controlled Event Handler */}
                <input type="text" className="field" value={this.state.term} onChange={(e)=> this.setState({ term: e.target.value })}></input> 
                <button className="main-btn" type="submit">Submit</button>
            </form>
        </div>
    )
  }

}

export default SearchBar;
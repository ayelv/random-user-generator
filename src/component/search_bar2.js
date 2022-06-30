import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];

// const SearchBar = () => (
//   <Select options={options} />
// )

class SearchBar2 extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            term: { value: "female", label: "Female" },

        }
    }
    
    handleChange = (term) => {
        this.setState({term});
        this.props.onSearchTermChange(term.value);
    }
    
    render() {
        const {term} = this.state;
        return(
            <div>
                <h2>Gender</h2>
                <Select
                    value={term}
                    onChange={this.handleChange}
                    options={options} 
                />
            </div>
        )
    }
}

export default SearchBar2;
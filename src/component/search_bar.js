import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: "AU", label: "Austraila" },
  { value: "BR", label: "Brazil" },
  { value: "CA", label: "Canada" },
  { value: "CH", label: "Switzerland" },
  { value: "DE", label: "Germany" },
  { value: "DK", label: "Denmark" },
  { value: "ES", label: "Spain" },
  { value: "FL", label: "Finland" },
  { value: "FR", label: "France" },
  { value: "GB", label: "United Kingdom" },
  { value: "IE", label: "Ireland" },
  { value: "IR", label: "Iran" },
  { value: "NO", label: "Norway" },
  { value: "NL", label: "Netherlands" },
  { value: "TR", label: "Turkey" },
  { value: "US", label: "United States" },
];

// const SearchBar = () => (
//   <Select options={options} />
// )

class SearchBar extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            term: { value: 'US', label: 'United States' },

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
                <h2>Nationality</h2>
                <Select
                    value={term}
                    onChange={this.handleChange}
                    options={options} 
                />
            </div>
        )
    }
}

export default SearchBar;
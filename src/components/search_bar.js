import React, { Component } from 'react';

// defines a new js class allows searchbar all functionality of React.Component class
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}


	render() {
		return (
			<div>
				<input 
				value={this.state.term} 
				onChange={event => this.setState({ term: event.target.value })} />
				
			</div>
		);
	}
}

export default SearchBar
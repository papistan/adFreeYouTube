import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const 

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) { console.log(data);
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => { this.setState({ videos });
		);
	}

	render() {
		return (
		<div>
			<SearchBar />
		</div>
		);
	}
}


const App = () => {
	return ( 
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));
import React from "react";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			home: [],
		};

		this.loadHomeFromServer = this.loadHomeFromServer.bind(this);
	}

	componentDidMount() {
		this.loadHomeFromServer();
		setInterval(this.loadHomeFromServer, 5000);
	}

	loadHomeFromServer() {
		client.getHome((serverHome) => (
				this.setState({ home: serverHome })
			)
		);
	};

	render() {
		return (
			<div className='home'>
				<h1>{this.state.home.title}</h1>
				<p>Hello {this.state.home.username</p>
			</div>
		);
	}
}
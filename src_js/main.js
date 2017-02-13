import React from 'react';
import ReactDOM from 'react-dom';


var Cat = React.createClass({
	getInitialState: function() {
		return { name: 'default' };
	},
	updateName: function(event) {
		this.setState({name: event.target.value});
	},
	render: function() {
		return (<div className="container">
					<p className="h3">Your cat name is: {this.state.name}</p>
					<input className="form-control" type="text" onChange={this.updateName} />			
				</div>);
	}
});

ReactDOM.render(<Cat/>, document.getElementById('example'));
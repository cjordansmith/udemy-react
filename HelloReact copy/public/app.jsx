// /public/app.jsx
var Greeter = React.createClass({

  // default properties when none are assigned
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from a component!'
    };
  },

  // on page load, assigns name variable to default
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },

  // when 'Set Name' button clicked, change displayed name variable
  onButtonClick: function(e) {
    e.preventDefault();

    var nameRef = this.refs.name;

    // assigns variable name to input value
    var name = nameRef.value;

    // when button clicked, remove text from input field
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      // updates state of name component from input
      this.setState({
        name: name
      });
    }

  },

  render: function() {
    var name = this.state.name;
    var message = this.props.message;

    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Jordan';


ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);

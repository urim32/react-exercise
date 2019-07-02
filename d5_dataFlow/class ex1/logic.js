class App extends React.Component {
    constructor(props) {
        super(props);
        this.updateUseName = this.updateUseName.bind(this);
        this.state = {
            username: ""
        }
    }
    updateUseName(text) {
        this.setState({
            username: text
        })
    }

    render() {
        return (
            <div>
                <Input handleChange={this.updateUseName} />
                <span>{this.state.username}</span>
            </div>

        );
    }
}
class Input extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.handleChange(event.target.value)
    }
    render() {
        return (
            <div>
                <label htmlFor="text">Select a username: </label>
                <input type="text" id="text" onChange={this.handleChange} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
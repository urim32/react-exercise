class App extends React.Component {
    constructor(props) {
        super(props);
        this.setColor = this.setColor.bind(this);
        this.state = {
            color: ""
        }

    }
    setColor(event) {
        this.setState({
            color: event.target.textContent
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.setColor}>blue</button>
                <button onClick={this.setColor}>green</button>
                <button onClick={this.setColor}>orange</button>
                <div className={"box " + this.state.color}></div>
            </div>
        );
    }
}

function hello() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
hello();




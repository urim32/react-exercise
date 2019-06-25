class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="box" style={{ backgroundColor: this.props.bkcolor }}>{this.props.text}</div>
        );
    }
}
class App extends React.Component {
    render() {

        return (
            <div>
                <Box bkcolor="lightblue" text="fresh" />
                <Box bkcolor="yellow" text="calm" />
                <Box bkcolor="green" text="adventures" />
                <Box bkcolor="red" text="happy" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
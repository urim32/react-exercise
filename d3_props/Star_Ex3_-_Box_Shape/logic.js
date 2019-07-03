class App extends React.Component {
    render() {
        return (
            <div>
                <Box size="15" isNextTo={true} />
                <Box size="40" isNextTo={true} />
                <Box size="100" isNextTo={true} />
                <Box size="40" isNextTo={true} />
                <Box size="15" isNextTo={true} />
                <Box size="250" isNextTo={false} />
            </div>
        );
    }
}

class Box extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let boxSize = {
            width: this.props.size + "px",
            height: this.props.size + "px"
        };
        return (
            <div className={this.props.isNextTo ? "next-to" : ""} style={boxSize}></div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);


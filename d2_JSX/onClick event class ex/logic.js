class Laser extends React.Component {
    activateLasers() {
        // document.getElementById("greet").innerText = "Hello World";
        document.getElementById("greet").style.backgroundColor = "blue";
    }
    render() {

        return (
            <div>
                <div id="greet">
                    <button onClick={this.activateLasers}>say hello
            </button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Laser />,
    document.getElementById("root")
);
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            color: "black"
        }
        this.increase = this.increase.bind(this);
    }
    increase() {
        let rnd = Math.floor(Math.random() * 100) + 1;
        this.setState({
            count: this.state.count = rnd,
            color: rnd % 2 === 0 ? "red" : "blue"
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.increase}>increment</button>
                <span style={{ color: this.state.color }}>{this.state.count}</span>
            </div>
        );
    }
}


ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);
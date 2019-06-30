class App extends React.Component {
    constructor(props) {
        super(props);
        this.preventColor = this.preventColor.bind(this);
        this.state = {
            isDisabled: false
        }

    }
    preventColor(e) {
        this.setState({
            isDisabled: e.state.isDisabled = true
        });
    }
    render() {
        return (
            <div>
                <h1>which colors do you want?</h1>
                <p> (disable the ones you dont want with click)</p>
                <button className={this.state.class} onClick={this.preventColor}>blue</button>
                <button className={this.state.class} onClick={this.preventColor}>green</button>
                <button className={this.state.class} onClick={this.preventColor}>orange</button>
                <button className={this.state.class} onClick={this.preventColor}>red</button>
                <button className={this.state.class} onClick={this.preventColor}>pink</button>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);





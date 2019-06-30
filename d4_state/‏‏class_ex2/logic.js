class Box extends React.Component {
    constructor(props) {
        super(props);
        this.changeBoxColor = this.changeBoxColor.bind(this);

        this.state = {

            isClick: false
        }
    }
    changeBoxColor() {
        this.setState({
            isClick: this.state.isClick === true ? false : true
        });
    }
    render() {
        return (
            <div>
                <div>

                    <button onClick={this.changeBoxColor}>show/hide</button>

                </div>
                <div className={`box ${this.state.isClick ? " selected" : ''}`} ></div>

            </div>
        );
    }
}




ReactDOM.render(
    <Box />,
    document.getElementById("root")
);
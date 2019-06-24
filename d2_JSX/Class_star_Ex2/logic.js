class ShowNumber extends React.Component {
    constructor() {
        super();
        this.number = 7;
        this.printNumber = this.printNumber.bind(this);
    }
    printNumber() {

        let contain = ""
        for (let i = 0; i <= this.number; i++) {
            contain += i + " ";
        }

        document.getElementById("greet").innerText = contain;

    }
    render() {


        return (
            <div>
                <div className="header"></div>
                <div id="greet">
                    <div>with a click of button </div>
                    <button onClick={this.printNumber}>show Numbers </button>

                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ShowNumber />,
    document.getElementById("root")
);
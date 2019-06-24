class Factorial extends React.Component {
    constructor() {
        super();
        this.data = {
            linkAddress: "https://www.google.com/",
            linkText: "google",
            min: -5,
            max: 5,
            color: "maroon",
            "font-weight": "bold",
            buttonText: "click me"
        };

    }
    render(data) {

        return (
            <div>
                <div>
                    <a className="border" href={this.data.linkAddress} target="_blank">{this.data.linkText}</a>

                </div>
                <div>
                    <input type="range" min={this.data.min - 1} max={this.data.max * 2} step="2" />

                </div>
                <div>
                    <button id="click" style={this.data}>{this.data.buttonText}</button>

                </div>

            </div>
        );
    }
}

ReactDOM.render(
    <Factorial />,
    document.getElementById("root")
);
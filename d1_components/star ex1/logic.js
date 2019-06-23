class Quiz extends React.Component {
    render() {
        return (
            <div>
                <div className="Quiz">
                    <h1>How do you like front end?</h1>
                    <Q1></Q1>
                    <Q2></Q2>
                </div>


            </div>
        );
    }
}
class Q1 extends React.Component {
    render() {
        return (
            <div>
                <div className="Q1">
                </div>
                <Q1Title></Q1Title>
                <Q1Input></Q1Input>
            </div>
        );
    }
}
class Q1Title extends React.Component {
    render() {
        return (
            <div>
                <div className="Q1Title">
                    <h4>How much you love front end?</h4>

                </div>

            </div>
        );
    }
}
class Q1Input extends React.Component {
    render() {
        return (
            <div>
                <div className="Q1Input"></div>
                <input type="range" name="" id="" />

            </div>
        );
    }
}
class Q2 extends React.Component {
    render() {
        return (
            <div>
                <div className="Q2"></div>
                <Q2Title></Q2Title>
                <Q2Input></Q2Input>
            </div>
        );
    }
}
class Q2Title extends React.Component {
    render() {
        return (
            <div>
                <div className="Q2Title">
                    <h4>what is your favorite feature/topic in front end?</h4>
                </div>

            </div>
        );
    }
}
class Q2Input extends React.Component {
    render() {
        return (
            <div>
                <div className="Q2Input">
                    <input type="text" name="" id="" />
                </div>

            </div>
        );
    }
}

ReactDOM.render(
    <Quiz />,
    document.getElementById("root")
);
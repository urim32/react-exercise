class Weather extends React.Component {
    render() {
        return (
            <div className="weather">
                <FirstSection></FirstSection>
                <SecondSection></SecondSection>
            </div>
        );
    }
}
class FirstSection extends React.Component {
    render() {
        return (
            <div className="firstSection">
                <div className="left">
                    <img src="http://www.clker.com/cliparts/Z/k/K/O/S/i/yellow-sunshine-md.png" alt="" srcset="" />
                </div>
                <div className="right">
                    <p className="lightText">Tel Aviv</p>
                    <p className="boldText">Israel</p>
                    <p className="lightText">Hot 30 &#8451;</p>
                </div>
            </div>
        );
    }
}
class SecondSection extends React.Component {
    render() {
        return (
            <div className="secondSection">
                <div className="leftSide">
                    <div>
                        <p>mo</p>
                        <p>16.02</p>
                    </div>
                    <div>
                        <img src="http://www.clker.com/cliparts/Z/k/K/O/S/i/yellow-sunshine-md.png" alt="" srcset="" />
                    </div>
                    <div>
                        <p>Sunny</p>
                        <p>19 &#8451;</p>
                    </div>

                </div>

            </div>
        );
    }
}

ReactDOM.render(
    <Weather />,
    document.getElementById("root")
);
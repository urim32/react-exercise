class Btn extends React.Component {
    render() {
        return (
            <div className="Btn">

                <button type="button">click</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Btn />,
    document.getElementById("root")
);
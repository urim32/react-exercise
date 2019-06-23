class Box1 extends React.Component {
    render() {
        return (
            <div>
                <div className="box1">
                    <Box2 />
                </div>

            </div>
        );
    }
}
class Box2 extends React.Component {
    render() {
        return (
            <div>
                <div className="box2"></div>
                <Box3></Box3>
            </div>
        );
    }
}
class Box3 extends React.Component {
    render() {
        return (
            <div>
                <div className="box3"></div>
                <Box4></Box4>
            </div>
        );
    }
}
class Box4 extends React.Component {
    render() {
        return (
            <div>
                <div className="box4"></div>

            </div>
        );
    }
}

ReactDOM.render(
    <Box1 />,
    document.getElementById("root")
);
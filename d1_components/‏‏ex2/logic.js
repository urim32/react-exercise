class Box1 extends React.Component {
    render() {
        return (
            <div>
                <div className="box1"></div>
                <input type="checkbox" />
            </div>
        );
    }
}
class Box2 extends React.Component {
    render() {
        return (
            <div>
                <div className="box2"></div>
                <input type="checkbox" />
            </div>
        );
    }
}
class Box3 extends React.Component {
    render() {
        return (
            <div>
                <div className="box3"></div>
                <input type="checkbox" />
            </div>
        );
    }
}
class Box4 extends React.Component {
    render() {
        return (
            <div>
                <div className="box4"></div>
                <input type="checkbox" />
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Box1 /><Box2 /><Box3 /><Box4 />
    </div>,
    document.getElementById("root")
);
class Box extends React.Component {
    constructor(props) {
        super(props);
    }
    getBreadCrumbClass(index) {
        return this.props.index === index ? "crumb selected" : "crumb";
    }
    render() {

        return (

            <div className="box">
                <img src={this.props.imgSrc} />
                <h4>{this.props.textHeader}</h4>
                <p>{this.props.text}</p>
                <div className="bread-crumbs">
                    <div className={this.getBreadCrumbClass(0)}></div>
                    <div className={this.getBreadCrumbClass(1)}></div>
                    <div className={this.getBreadCrumbClass(2)}></div>
                </div>
            </div>
        );
    }
}


class App extends React.Component {

    render() {

        return (
            <div className="boxContainer">
                <Box imgSrc="http://www.people.cz/gallery/gallery_photo/13312.jpg" textHeader="Ready to Travel" text="Choose your dastintion. plan your trip pick the best place to travel" index={0}> </Box>
                <Box imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5RHej5g3cTHskk7nTOk-o3jKiMRjY2tqATX_52_QPIElHb1z" textHeader="Select the Date" text="Choose your dastintion. plan your trip pick the best place to travel" index={1}></Box>
                <Box imgSrc="https://img.lovepik.com/element/40031/9957.png_860.png" textHeader="Feels like home" text="Choose your dastintion. plan your trip pick the best place to travel" index={2}></Box>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);


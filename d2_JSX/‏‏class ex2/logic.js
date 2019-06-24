class Title extends React.Component {

    checkWin() {
        let rnd = (Math.floor(Math.random() * 10)) + 1;
        return rnd > 5;
    }

    render() {
        let isWon = this.checkWin();
        let result = "";
        if (isWon) {
            result = <h1>You won</h1>
        }
        else {
            result = <h3>Lost</h3>
        }



        return (
            <div>
                {result}
            </div>
        );

    }
}

ReactDOM.render(
    <Title />,
    document.getElementById("root")
);
class Page extends React.Component {
    render() {
        return (
            <div>
                <div className="page">
                    <Navbar></Navbar>
                    <MainSection></MainSection>
                </div>


            </div>
        );
    }
}
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="leftNav">
                        <span>SERVICES</span>
                        <span>WORK</span>
                        <span>THE TEAM</span>
                    </div>
                    <div className="rightNav">
                        <img src="http://jdwllc.com/wp-content/uploads/2015/09/Mobile-Icon-White-on-Grey-300px.png" alt="" srcset="" />
                    </div>
                </div>

            </div>
        );
    }
}
class MainSection extends React.Component {
    render() {
        return (
            <div>
                <div className="mainSection">
                    <FirstSection></FirstSection>
                    <SecondSection></SecondSection>

                </div>

            </div>
        );
    }
}
class FirstSection extends React.Component {
    render() {
        return (
            <div>
                <div className="firstSection">

                    <h1>SERVICES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius unde facilis cum optio nobis, deleniti eveniet cumque consequuntur architecto dolorem provident, earum neque. Libero, laboriosam? Harum dicta repellendus ea.</p>
                </div>
            </div>
        );
    }
}
class SecondSection extends React.Component {
    render() {
        return (
            <div>
                <div className="secondSection" >
                    <div>
                        <img src="https://doc.owncloud.org/server/8.2/user_manual/_static/img/social/mail.svg" alt="" srcset="" />
                        <h4>user interface desighn</h4>
                        <p>wirsjm</p>
                        <p>lkjjaxnh</p>
                        <p>askhj jhbash</p>
                    </div>
                    <div>
                        <img src="https://doc.owncloud.org/server/8.2/user_manual/_static/img/social/mail.svg" alt="" srcset="" />
                        <h4>user interface desighn</h4>
                        <p>wirsjm</p>
                        <p>lkjjaxnh</p>
                        <p>askhj jhbash</p>
                    </div>
                    <div>
                        <img src="https://doc.owncloud.org/server/8.2/user_manual/_static/img/social/mail.svg" alt="" srcset="" />
                        <h4>user interface desighn</h4>
                        <p>wirsjm</p>
                        <p>lkjjaxnh</p>
                        <p>askhj jhbash</p>
                    </div>

                </div>
            </div>

        );
    }
}



ReactDOM.render(
    <Page />,
    document.getElementById("root")
);
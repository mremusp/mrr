import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants:</p>
                </div>
            </section>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa31"
                                imageSrc={AlexaImage}
                                description="created by amazon for buying things"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana12"
                                imageSrc={CortanaImage}
                                description="made by microsoft, dunno"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri"
                                handle="@siri86"
                                imageSrc={SiriImage}
                                description="Siri made by apple and phased out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

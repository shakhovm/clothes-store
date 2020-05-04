import React from "react";
import './slide_content.css';

const images = [
    {
        image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        mainText: "Summer Collections",
        textContent: "Look at the new summer collection"
    },
    {
        image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        mainText: "Spring Collections",
        textContent: "Look at the new spring collection"
    }];

let currentImage = 0;
let imageNumber = 2;

class SlideContent extends React.Component {
    constructor() {
        super();


        this.state = {
            mainText: images[0].mainText,
            textContent: images[0].textContent,
            styleSlide: {

                backgroundImage:`url(${images[0].image})`,
                backgroundSize: "1200px",
                backgroundPositionY: "-100px",
                height: "300px"
            },

        };

    }

    changeUrl(side) {
        currentImage += side;
        currentImage = ((currentImage % imageNumber) +
            imageNumber) % imageNumber;
        this.setState({styleSlide: {
                backgroundImage:`url(${images[currentImage].image})`,
                backgroundSize: "1200px",
                backgroundPositionY: "-100px",
                height: "300px"
            },
            mainText: images[currentImage].mainText,
            textContent: images[currentImage].textContent
        });

    }

    render() {

        return (
            <div style={this.state.styleSlide} id={"text-slider"}>
                <div id={"left-arrow"}>
                    <div className="arrow" onClick={this.changeUrl.bind(this, -1)}></div>
                </div>
                <div id={"right-arrow"}>
                    <div className="arrow" onClick={this.changeUrl.bind(this, 1)}></div>
                </div>
                <div className={"slide-text"}>
                    <h2>{this.state.mainText}</h2>
                    <p>{this.state.textContent}</p>
                </div>
            </div>
        );
    }

}

export default SlideContent;
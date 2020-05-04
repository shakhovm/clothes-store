import React from "react";
import './MainBlock.css';

const images = [{
                    image: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    text: "Meet new women's clothes"
                },
                {
                    image: "https://images.pexels.com/photos/615003/pexels-photo-615003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    text: "Meet new men's clothes"
                },
                {
                    image: "https://images.pexels.com/photos/920735/pexels-photo-920735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    text: "Make your own design!"
                }];

export default class MainBlock extends React.Component {
    constructor(image, text) {
        super();
        this.state  = {
            image: image,
            text: text
        }
    }

    render() {
        return (
            <div className="main-block">
                {
                    images.map((image) =>
                        <a href="#">
                            <div className={"contentBlock"} style={
                                {
                                    backgroundImage: `url(${image.image})`
                                }
                            }>
                                <p className={"block-text"}>{image.text}</p>
                            </div>
                        </a>
                )
                }
            </div>

        );
    }

}
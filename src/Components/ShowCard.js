import React, { Component } from "react";

import "./../Stylesheets/ShowCard.css"

import ShowInfo from "./ShowInfo";

class ShowCard extends Component {
    state = {
        isClicked: false,
    }

    toggleShowInfo = () => {
        const { isClicked } = this.state;

        this.setState({ isClicked: !isClicked })
    }

    render() {

        const { name, image, rating, runtime } = this.props;

        return (
            <div className="show-card" onClick={this.toggleShowInfo}>
                <img
                    alt={name}
                    src={image}
                />

                { this.state.isClicked
                    ? <ShowInfo
                            name={name}
                            rating={rating}
                            runtime={runtime}
                        />
                    : null
                }
            </div>
        );
    }
}

export default ShowCard;

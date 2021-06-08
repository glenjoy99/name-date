import React from 'react'
import { HoverableCard } from 'react-hoverable-card'
import { useHistory } from "react-router-dom"
import 'react-hoverable-card/dist/index.css'
import Button from '@material-ui/core/Button';
import "./Liked.css"
function Liked() {

    var likedNames = ["Glen", "Anthony", "Asha", "Kate", "Emily", "Ethan"];

    const history = useHistory()

    function handleClick() {
        history.push("/");
    }

    return (
        <div className="liked">
            <div className="back-btn">
                <Button onClick={handleClick} color="primary">Return to home</Button>
            </div>
            <div className="grid-container">
                {likedNames.map((n) => 
                    <div className="grid-item">
                        <HoverableCard
                        cardTitle={n}
                        cardDescription="Phasellus tincidunt vestibulum elit vel laoreet. Vivamus tincidunt augue eget lacus blandit tempor."
                        cardImage="https://ct1.medstarhealth.org/content/uploads/sites/147/2020/09/baby-icon.png"
                        hoverBgColor="grey"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Liked

import React from 'react';
import { connect } from 'react-redux';
import './UpdatedCharacter.css';

export function UpdatedCharacter(props) {
    return (
        <div className="character-card">
            <div className="character-name">
                <label>
                    Name
                        <h1>{props.name}</h1>
                </label>
            </div>
            <div className="character-race">
                <label>
                    Race
                        <h1>{props.race}</h1>
                </label>
            </div>
            <div className="character-classification">
                <label>
                    Classification
                        <h1>{props.classification}</h1>
                </label>
            </div>
            <div className="character-weapon">
                <label>
                    Weapon
                        <h1>{props.weapon}</h1>
                </label>
            </div>
        </div>
    )
}


export default connect()(UpdatedCharacter);
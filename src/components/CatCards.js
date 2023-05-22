import { useState } from 'react';
import '../styles/Cards.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

function CatCards(props) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <li className="cards catCards">
                <div className="cardFace" onClick={() => setOpen(true)}>
                    <div className="breedName">
                        <h2>{props.name}</h2>
                        </div>
                    <div className="imgContainer">
                        <img src={props.imgSource} alt={props.altText}></img>
                    </div>
                </div>
            </li>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal'
                }}
            >
                <div className="cardsFactsTitle">
                    <h3>{props.name}</h3>
                    <p>({props.origin})</p>
                </div>

                <div className="cardsFacts">
                    <div className="cardsFactsGroup">
                        <h4>Care</h4>
                        <p><span>Grooming Needs:</span> {props.groom}/5</p>
                        <p><span>Shedding:</span> {props.shed}/5</p>
                    </div>

                    <div className="cardsFactsGroup">
                        <h4>Friendliness</h4>
                        <p><span>Children:</span> {props.kids}/5</p>
                        <p><span>Family:</span> {props.fam}/5</p>
                        <p><span>Other Pets:</span> {props.others}/5</p>
                    </div>

                    <div className="cardsFactsGroup">
                        <h4>Personality Traits</h4>
                        <p><span>Intelligence:</span> {props.smart}/5</p>
                        <p><span>Playfulness:</span> {props.play}/5</p>
                    </div>

                    <div className="cardsFactsGroup">
                        <h4>Health</h4>
                        <p><span>General Health:</span> {props.health}/5</p>
                        <p><span>Life Expectancy:</span> {props.minYears} to {props.maxYears} years</p>
                        <p><span>Body Length: {props.length}</span></p>
                        <p><span>Weight:</span> {props.minWeight} to {props.maxWeight} lbs</p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default CatCards;
import * as React from 'react';
import {useState} from "react";
import TinderCard from "react-tinder-card";
import database from "../../firebase";
import "./TinderCards.css";
import {useEffect} from "react";

export const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot =>
                setPeople(snapshot.docs.map(doc => doc.data()))
        );

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        prewentSwipe={['up', 'down']}
                    >

                        <div
                            style={{ backgroundImage: `url(${ person.url })` }}
                            className="card">
                            <h3>{ person.name }</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

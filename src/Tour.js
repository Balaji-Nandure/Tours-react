/** @format */

import React, { useState } from "react";

const Tour = (props) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className='single-tour'>
            <img src={props.image} alt={props.name} />
            <footer>
                <div className='tour-info'>
                    <h4>{props.name}</h4>
                    <h4 className='tour-price'>${props.price}</h4>
                </div>
                <p>
                    {readMore
                        ? props.info
                        : `${props.info.substring(0, 200)}...`}
                    <button
                        onClick={() => {
                            return setReadMore(!readMore);
                        }}>
                        {readMore ? "show less" : "show more"}
                    </button>
                </p>
                <button
                    onClick={() => {
                        return props.removeTour(props.id);
                    }}
                    className='delete-btn'>
                    Not Intrested
                </button>
            </footer>
        </article>
    );
};

export default Tour;

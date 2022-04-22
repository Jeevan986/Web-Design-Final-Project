import React from "react";
import "./Reserve.css"

export default function Reserve(){
    return(
        <div className="wrapper">
            <Card 
            img="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZyUyMHBvbmd8ZW58MHx8MHx8&w=1000&q=80"
            title="Classes"
            desc="$100 per hour"
            />

            <Card 
            img="https://edqkvt6c5r7.exactdn.com/wp-content/uploads/2021/01/Ballers-Clubhouse-Ping-Pong-Precinct-2.jpg?strip=all&lossy=1&ssl=1"
            title="Clubhouse"
            desc="$15 per hour"
            />

            <Card 
            img="https://awrwebsauksprod.blob.core.windows.net/assets/media/filer_public_thumbnails/filer_public/ae/77/ae77dd12-01c7-45b8-af32-0db01426175c/mlr-food-drink-22.jpg__652x652_q85_crop_subsampling-2_upscale.jpg"
            title="Food & Drinks"
            desc="$10"
            />
        </div>

    );
}

function Card(props) {
    return (
        <div className="card">
            <div className="card_body">
                <img src={props.img} class="card_image"/>
                <h2 className="card_title">{props.title}</h2>
                <p className="card_desc">{props.desc}</p>
            </div>
            <button className="card_btn">Reserve</button>
        </div>
    )
}
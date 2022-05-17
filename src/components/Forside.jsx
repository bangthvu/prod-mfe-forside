import React, {useEffect, useState} from "react";
import { Link, Router } from "react-router-dom";
import '../components/Forside.scss'

export const Forside = (props) => {

  let data = props.getArtData;
 
    return (
    <div className="forside">
      {data.map((art, index) => 
      <div className="forside__box" key={index}>
        <div>
        <Link to={`/${art._id}`}><div className="square"></div></Link>
        </div>
        <Link to={`/${art._id}`}><p className="article__header">{art.titel}</p></Link>
        <Link to={`/${art._id}`}><p className="article__header2">{art.undertitel}</p></Link>

      </div>

      )}
    </div>

    );
}
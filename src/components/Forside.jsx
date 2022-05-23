import React, {useEffect, useState} from "react";
import { Link, Router } from "react-router-dom";
import '../components/Forside.scss';
import billede from '../img/ingenbillede.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Forside = (props) => {

  let data = props.getArtData;
 
    return (
    <div className="forside">
      <div className="container">
        <div className="row">
      {data.map((art, index) => 
      <div className="forside__box col-sm-6" key={index}>
        <div className="forside__column">
        <div>
        <Link to={`/${art._id}`}><img src={billede} className="article_img"></img></Link>
        </div>
        <div className="forside__article-header">
        <Link to={`/${art._id}`}><a>{art.titel}</a></Link>
        </div>
        </div>
      </div>

      )}
      </div>
  </div>
</div>
    );
}
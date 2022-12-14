import React from 'react';
import L from "leaflet";
import {  Marker } from 'react-leaflet';


const PlaneList = ({ pilots }) => {

    function getIcon(_iconSize){
        return L.icon({
          iconUrl: require("./img/plane4.png"),
          iconSize: [_iconSize]
        })
      }

    return ( 
        
        pilots.map((pilot, i) => {
            return (
                <Marker position={[pilots[i].latitude, pilots[i].longitude]} icon={getIcon(25)} key={i}>

                </Marker>
                                
            );
        })
        

    );
}

export default PlaneList;

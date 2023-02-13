import React, {useState,useEffect} from 'react'

const Qrsection = ({value}) => {
    // var currentLocation = window.location;
    // currentLocation = String(currentLocation)
    // console.log(currentLocation.slice(currentLocation.length-5, currentLocation.length))
    // currentLocation = currentLocation.slice(currentLocation.length-5, currentLocation.length)
    // document.getElementById("upPush").action = "/upload/"+currentLocation;
    const getUserId=()=>{
        var currentLocation = window.location;
        currentLocation = String(currentLocation)
        console.log(currentLocation.slice(currentLocation.length-5, currentLocation.length))
        currentLocation = currentLocation.slice(currentLocation.length-5, currentLocation.length)
        document.getElementById("upPush").action = "https://qrroute.netlify.app/.netlify/functions/index/upload/"+currentLocation;
    }
    useEffect(() => {
        getUserId();
      }, []);
  return (
    <div>
        <h1 id = "qrCode">From QR</h1>
        <form  id = "upPush" method="POST" enctype="multipart/form-data">
            <input type="file" name="image"/>
            <button type="submit" value = "submit">Upload</button>
        </form>
    </div>
  )
}

export default Qrsection

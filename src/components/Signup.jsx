import React from "react"
import signup from "../assets/signup.png"

export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
            Don't miss out on the realese of our new NFT . Sing up below to
            recive updates when we go live
          </p>
          <button>Sing Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="signup" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink">
              <div className="ellipse orange"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

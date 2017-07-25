import React from 'react'
import EtcGrid from './EtcGrid'
const Etc = () => (
  <div className="simpleContainer">
    <div className="row">
      <div className="col-md-12">
        <h3>Etc.</h3>
        <p>These are some some additional things I love spending time on:</p>
        <ul>
          <li>Yoga 🙏🏼</li>
          <li>Hiking ⛰ </li>
          <li>Travelling, especially roadtrips 🚗</li>
          <li>Learning how to surf 🏄🏻‍♀️ </li>
          <li>Cooking and baking -- the more time-consuming, the better 🍰 </li>
          <li>My cat Lola 😻</li>
        </ul>
        <p> Scroll through some of my loves and creations below. </p>
      </div>
      <EtcGrid />
    </div>
  </div>
)

export default Etc

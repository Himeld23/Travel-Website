import data from '../../Components/package-details';
import "../digha/single-package.css"
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';


const Digha_sea_beach = () =>{
return(
    <div class="package-container">

  <div class="package-hero">
    <img src="IMAGE_URL_HERE" alt="Package Image" class="hero-image" />
    <h1 class="package-title">PACKAGE TITLE HERE</h1>
    <h2 class="package-subtitle">SUBTITLE HERE</h2>
    <p class="package-description">DESCRIPTION TEXT HERE</p>
  </div>


  <div class="package-marketing">
    <p class="marketing-title">MARKETING TITLE HERE</p>
    <p class="marketing-subtitle">MARKETING SUBTITLE HERE</p>
  </div>

  <div class="package-itinerary">
    <h2 class="section-heading">Itinerary</h2>

    <div class="day-section">
      <h3 class="day-title">Day 1: TITLE HERE</h3>
      <ul class="itinerary-list">
        <li>Activity 1 description here.</li>
        <li>Activity 2 description here.</li>
        <li>Activity 3 description here.</li>
      </ul>
    </div>

    <div class="day-section">
      <h3 class="day-title">Day 2: TITLE HERE</h3>
      <ul class="itinerary-list">
        <li>Activity 1 description here.</li>
        <li>Activity 2 description here.</li>
      </ul>
    </div>
  </div>


  <div class="package-details">
    <div class="inclusions">
      <h2 class="section-heading">What's Included</h2>
      <ul class="details-list">
        <li>Inclusion 1</li>
        <li>Inclusion 2</li>
        <li>Inclusion 3</li>
      </ul>
    </div>
    <div class="exclusions">
      <h2 class="section-heading">What's Not Included</h2>
      <ul class="details-list">
        <li>Exclusion 1</li>
        <li>Exclusion 2</li>
        <li>Exclusion 3</li>
      </ul>
    </div>
  </div>


  <div class="package-cta">
    <button class="book-btn">Book Now for ₹4699/-</button>
  </div>
</div>

)
}

export default Digha_sea_beach
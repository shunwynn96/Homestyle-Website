import React from 'react'
import '../styles/homeLocation.css'

function HomeLocation() {
  return (
    <section className="location-container">
			<h2 className="location-title">Our Locations</h2>
			<hr></hr>
			<div class="location-map-container">
				<div className="location-inderawasih">
					<h3 className="map-title">Homestyle Inderawasih</h3>
					<iframe className="location-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d254221.0224886549!2d100.385993!3d5.385926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26dd0cff4bb1e02c!2sHomestyle%20Kopitiam%20Inderawasih!5e0!3m2!1sen!2sus!4v1655249839091!5m2!1sen!2sus"></iframe>
				</div>
				
				<div className="location-perda">
					<h3 className="map-title">Homestyle Perda</h3>
					<iframe className="location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63557.34316157457!2d100.37069593125001!3d5.365927800000019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac621cbb0a72f%3A0x6fb2687914212fdf!2sHomestyle%20Kopitiam%20Perda!5e0!3m2!1sen!2sus!4v1655246153696!5m2!1sen!2sus"></iframe>
				</div>
			</div>
		</section>
  )
}

export default HomeLocation
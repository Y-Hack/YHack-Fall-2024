<template>
  <section id="tracks" class="-tracks-types -minvh">
		<div class="-trk-h">
			<h1 class="-trk-title -TRACKS -txsh" data-text="TRACKS">TRACKS</h1>
		</div>
    <div class="-trk-container">
        <div class="-trks-x -txsh">
			<div class="-trks-x-inner -txsh">
				<div class="-trks-x-front -txsh">
					<h2 class="-trk">Sustainability <br class="-brk" /> <br class="-brk" /></h2>
					<img src="/src/assets/images/sustainability_track.png"  class="img-fluid">
				</div>
				<div class="-trks-x-back -txsh">
					<p class="-trk-det">
						Sustainability track focuses on addressing environmental and social challenges to 
						ensure a more sustainable future for our planet. Participants in this track may explore 
						innovative solutions that promote renewable energy, reduce carbon footprint, minimize waste, 
						promote conservation, or address issues related to climate change.
					</p>
				</div>
				<p class="-trk-det" style="visibility: hidden;">
					The Healthcare track aims to address challenges in healthcare delivery, 
					improve patient outcomes, and advance medical research and innovation. 
					Participants may develop solutions that leverage technology to enhance 
					access to healthcare services, improve diagnostics, personalize treatment plans, 
					or empower patients to manage their health better.
				</p>
			</div>
        </div>

		<div class="-trks-x -txsh">
			<div class="-trks-x-inner -txsh">
				<div class="-trks-x-front -txsh">
					<h2 class="-trk">Education <br class="-brk" /> <br class="-brk" /></h2>
					<img src="/src/assets/images/education_track.png" class="img-fluid">
				</div>
				<div class="-trks-x-back -txsh">
					<p class="-trk-det">
						The Education track is dedicated to improving access to quality education and enhancing learning 
							experiences for people of all ages and backgrounds. Participants may develop tools, 
							platforms, or initiatives that make education more accessible, engaging, and effective. 
					</p>
				</div>
				<p class="-trk-det" style="visibility: hidden;">
					The Healthcare track aims to address challenges in healthcare delivery, 
					improve patient outcomes, and advance medical research and innovation. 
					Participants may develop solutions that leverage technology to enhance 
					access to healthcare services, improve diagnostics, personalize treatment plans, 
					or empower patients to manage their health better.
				</p>
			</div>
        </div>

		<div class="-trks-x -txsh">
			<div class="-trks-x-inner -txsh">
				<div class="-trks-x-front -txsh">
					<h2 class="-trk">Entertainment <br class="-brk" />& Media</h2>
					<img src="/src/assets/images/media_track.png" class="img-fluid">
				</div>
				<div class="-trks-x-back -txsh">
					<p class="-trk-det">
						The Entertainment & Media track focuses on leveraging technology to 
							innovate and enhance the entertainment industry and media landscape. 
							Participants may explore ways to create immersive experiences, develop 
							interactive storytelling platforms, enhance content creation and distribution, 
							or revolutionize the gaming industry. 
					</p>
				</div>
				
				<p class="-trk-det" style="visibility: hidden;">
					The Healthcare track aims to address challenges in healthcare delivery, 
					improve patient outcomes, and advance medical research and innovation. 
					Participants may develop solutions that leverage technology to enhance 
					access to healthcare services, improve diagnostics, personalize treatment plans, 
					or empower patients to manage their health better.
				</p>
			</div>
        </div>		

        <div class="-trks-x -txsh">
			<div class="-trks-x-inner -txsh">
				<div class="-trks-x-front -txsh">
            <h2 class="-trk">Healthcare <br class="-brk" /> <br class="-brk" /> </h2>
			<img src="/src/assets/images/health_track.png" class="img-fluid">
		</div>
				
				<div class="-trks-x-back -txsh">
					<p class="-trk-det">
					The Healthcare track aims to address challenges in healthcare delivery, 
					improve patient outcomes, and advance medical research and innovation. 
					Participants may develop solutions that leverage technology to enhance 
					access to healthcare services, improve diagnostics, personalize treatment plans, 
					or empower patients to manage their health better.
				</p>
				</div>
				<p class="-trk-det" style="visibility: hidden;">
					The Healthcare track aims to address challenges in healthcare delivery, 
					improve patient outcomes, and advance medical research and innovation. 
					Participants may develop solutions that leverage technology to enhance 
					access to healthcare services, improve diagnostics, personalize treatment plans, 
					or empower patients to manage their health better.
				</p>
				</div>
        </div>

    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.-TRACKS {
	font-size: 3rem;
	margin-left: 2rem;
	text-shadow: -3px 3px #8a14aa
}
.-tracks-types {
  padding: 6rem 2rem;
  min-height: 100vh;
}
.-trk-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.5rem;
}
.-trks-x {
	padding: 1.5rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	width: calc(25% - 2rem);
	box-sizing: border-box;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
	transition: 250ms;
	cursor: default;
	border-radius: 8px;
}
/* @media (hover: hover) {
	.-trks-x:hover {
		transform: rotateY(180deg);
	}
} */
@media (hover: hover) {
	.-trks-x:hover .-trks-x-inner {
		transform: rotateY(180deg);
	}
}

.-trks-x-front {
  background-color: transparent;
  color: white;
}

.-trks-x-back {
  background-color: transparent;
  color: white;
  transform: rotateY(180deg);
}

.-trks-x-front, .-trks-x-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.-trks-x-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.-trks-x .-trk {
	font-size: 2rem;
	overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.-trks-x .-trk-det {
	padding-top: 0.75rem;
	font-size: 1.125rem;
}
.-trk-h {
	margin-bottom: 3rem;
}
.glitch {
	position: relative;
	font-size: 3rem;
	color: white;
	text-align: center;
}
.glitch::before,
.glitch::after {
	content: attr(data-text);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.glitch::before {
	left: 0;
	text-shadow: -2px 0 #fc00ff;
	animation: glitch-anim 1s infinite linear alternate-reverse;
}

.glitch::after {
	left: 0px;
	text-shadow: 2px 0 #00fffc;
	animation: glitch-anim 1s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
	0% {
		transform: translate(0);
	}
	25% {
		transform: translate(1px, -1px);
	}
	50% {
		transform: translate(-1px, 1px);
	}
	75% {
		transform: translate(1px, -1px);
	}
	100% {
		transform: translate(-1px, 1px);
	}
}
@media only screen and (max-width: 767px) {
	.-brk {
		display: none;
	}
  .-trk-container {
		display: flex;
		flex-direction: column;
	}
	.-trks-x {
		padding: 1.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		width: 100%;
		min-height: 15rem;
		box-sizing: border-box;
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
		transition: 250ms;
		cursor: default;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.-trks-x .-trk {
		font-size: 2rem;
		overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
	}
	.-trks-x .-trk-det {
		padding-top: 0.75rem;
		font-size: 1.125rem;
	}
}


.img-fluid {
	max-height: 100%; width: auto;
}

</style>

<script setup>
const teamMembers = [
  { name: "Brandon Ye", position: "President", photo: new URL('../assets/images/yhack/brandon.png', import.meta.url).href, email: "brandon.yee@yale.edu" },
  { name: "Noah Dee", position: "Co-Director", photo: new URL('../assets/images/yhack/noah.png', import.meta.url).href, email: "noah.dee@yale.edu" },
  { name: "Leslie Kim", position: "Co-Director", photo: new URL('../assets/images/yhack/leslie.png', import.meta.url).href, email: "leslie.kim@yale.edu" },
  { name: "Kenny Tung", position: "Tech Director", photo: new URL('../assets/images/yhack/kenny.png', import.meta.url).href, email: "kenny.tung@yale.edu" },
  { name: "Grady Yu", position: "Developer", photo: new URL('../assets/images/yhack/no_photo.png', import.meta.url).href, email: "grady.yu@yale.edu" },
  { name: "Theresa Fu", position: "Logistics", photo: new URL('../assets/images/yhack/theresa.png', import.meta.url).href, email: "theresa.fu@yale.edu" },
  { name: "Andrew Liu", position: "Developer", photo: new URL('../assets/images/yhack/andrew.png', import.meta.url).href, email: "andrew.liu.al2775@yale.edu" },
  { name: "Reyansh Bahl", position: "Developer", photo: new URL('../assets/images/yhack/reyansh.png', import.meta.url).href, email: "reyansh.bahl@yale.edu" },
  { name: "Christina Xu", position: "Developer", photo: new URL('../assets/images/yhack/christina.png', import.meta.url).href, email: "christina.xu@yale.edu" },
  { name: "Henry Zheng", position: "Developer", photo: new URL('../assets/images/yhack/henry.png', import.meta.url).href, email: "henry.zheng.hpz4@yale.edu" }
];
</script>

<template>
  <section id="team" class="team">
    <h1 class="team-title">Meet Our Team</h1>
    <div class="team-container">
      <div v-for="(member, index) in teamMembers" :key="index" class="team-member">
        <img :src="member.photo" alt="Team Member Photo" class="member-photo" />
        <h2 class="member-name">{{ member.name }}</h2>
        <div class="position-with-icon">
          <p class="member-position">{{ member.position }}</p>
          <!-- Gmail icon placed to the right of the position -->
          <a :href="'mailto:' + member.email" class="icon-button gmail-button">
            <img src="../assets/images/yhack/gmail.png" alt="Gmail Icon" class="icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* General styles */
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* Team Section Styling */
.team {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 2rem;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/images/yhack/bg.png"); /* Adjust path as necessary */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.team-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px #8a14aa;
}

.team-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
  gap: 1.5rem;
  width: 100%;
  padding: 0 2rem;
}

.team-member {
  background-color: rgba(48, 5, 84, 0.8); /* Add transparency */
  border: 2px solid #9743cc;
  border-radius: 15px;
  padding: 1.5rem;
  width: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
}

.member-photo {
  width: 150px; /* Set a maximum width */
  height: 150px; /* Set a corresponding height */
  border-radius: 50%; /* Make the team member's photo fully round */
  border: 5px solid #9743cc;
  margin-bottom: 1rem;
  object-fit: cover; /* Maintain the aspect ratio while filling the container */
}

.member-name {
  font-size: 1.25rem;
  margin: 0.5rem 0;
  text-shadow: 1px 1px 3px #1c0024;
}

.position-with-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.member-position {
  font-size: 1.125rem;
  margin-right: 0.5rem; /* Add spacing between position and the Gmail icon */
  text-shadow: 1px 1px 2px #1c0024;
}

.icon-button {
  display: inline-block;
  width: 25px;
  height: 25px; /* Smaller size for the icon */
}

.icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%; /* Fully round icons for Gmail */
  border: 2px solid #fff; /* Optional: Add a border to make the icon stand out */
  padding: 2px;
  transition: transform 0.3s ease-in-out;
}

.icon:hover {
  transform: scale(1.1); /* Slightly enlarge the icon on hover */
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .team-title {
    font-size: 2rem; /* Smaller title on tablets and smaller screens */
  }

  .team-member {
    padding: 1rem; /* Reduce padding for team members */
  }

  .team-container {
    gap: 1rem; /* Reduce gap size between team members */
  }

  .member-name {
    font-size: 1rem; /* Adjust font size for names */
  }

  .member-position {
    font-size: 1rem; /* Adjust font size for positions */
  }

  .icon-button {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .team {
    padding: 1rem;
  }

  .team-title {
    font-size: 1.75rem; /* Smaller title for phones */
  }

  .team-container {
    gap: 0.5rem; /* Even smaller gaps for phone screens */
  }

  .team-member {
    padding: 0.75rem;
  }

  .member-name {
    font-size: 0.875rem;
  }

  .member-position {
    font-size: 0.875rem;
  }

  .icon-button {
    width: 18px;
    height: 18px;
  }
}
</style>

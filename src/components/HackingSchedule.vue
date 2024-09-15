<script setup></script>

<template>
  <section id="schedule" class="schedule minvh">
    <div class="header">
      <div class="linewrapper">
        <div class="line"></div>
      </div>
      <h1 class="head">SCHEDULE</h1>
    </div>
    <div class="timetable">
      <table>
        <thead>
          <tr>
            <th>TIME</th>
            <th>10/5</th>
            <th>10/6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>~ 6:00 AM</td>
            <td></td>
            <td class="event lightpurple"></td>
          </tr>
          <tr>
            <td>7:00 AM</td>
            <td></td>
            <td class="event lightpurple"></td>
          </tr>
          <tr>
            <td>8:00 AM</td>
            <td class="event pink">CHECK IN</td>
            <td class="event lightpurple"></td>
          </tr>
          <tr>
            <td>9:00 AM</td>
            <td class="event violet">Opening Ceremony</td>
            <td class="event lightpurple"></td>
          </tr>
          <tr>
            <td>10:00 AM</td>
            <td class="event purple">Hacking: START!</td>
            <td class="event lightpink">Brunch</td>
          </tr>
          <tr>
            <td>11:00 AM</td>
            <td class="event lightpurple"></td>
            <td class="event pink">Hacking: END!</td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td class="event lightpink">Lunch</td>
            <td class="event lightviolet" rowspan="3">JUDGING</td>
          </tr>
          <tr>
            <td>1:00 PM</td>
            <td class="event lightpurple"></td>
          </tr>
          <tr>
            <td>2:00 PM</td>
            <td class="event lightpurple"></td>
          </tr>
          <tr>
            <td>3:00 PM</td>
            <td class="event lightpurple"></td>
            <td class="event purple">Closing Ceremony</td>
          </tr>
          <tr>
            <td>4:00 PM</td>
            <td class="event lightpurple"></td>
            <td></td>
          </tr>
          <tr>
            <td>5:00 PM</td>
            <td class="event lightpurple"></td>
            <td></td>
          </tr>
          <tr>
            <td>6:00 PM</td>
            <td class="event lightpink">Dinner</td>
          </tr>
          <tr>
            <td>7:00 PM</td>
            <td class="event lightpurple"></td>
            <td></td>
          </tr>
          <tr>
            <td>8:00 PM</td>
            <td class="event lightpurple"></td>
            <td></td>
          </tr>
          <tr>
            <td>9:00 PM</td>
            <td class="event lightpurple"></td>
            <td></td>
          </tr>
          <tr>
            <td>10:00 PM</td>
            <td class="event lightpink">Snacks</td>
            <td></td>
          </tr>
          <tr>
            <td>11:00 PM</td>
            <td class="event lightpurple"></td>
            <td></td>
          </tr>
          <tr>
            <td>12:00 AM ~</td>
            <td class="event lightpurple"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.schedule {
  padding: 4rem 0;
}
.head {
  font-size: 3.25rem;
  text-shadow: -3px 3px #8a14aa;
  text-align: end;
  margin-left: auto;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.line {
  height: 5px;
  width: 70vw;
  max-width: calc(1024px - 300px);
  background-color: #fff;
}
.timetable {
  font-size: 1rem;
    text-align: center;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1.5rem;
    background: linear-gradient(rgba(222, 75, 255, 0.6), rgba(255, 199, 255, 0.6));
}
table, th, td {
    border: 1px solid #ddd;
}
th, td {
    padding: 0.5rem;
    text-align: center;
}
td:first-child {
  font-style: italic
}
thead {
    background-color: #8a14aa;
    font-size: 1.25rem;
}
.event {
    color: white;
    font-weight: bold;
}
.lightpink {
  background-color: #e260e4;
}
.pink {
  background-color: #ca20cd;
}
.lightviolet {
  background-color: #8e40a8;
}
.violet {
  background-color: #871bac;
}
.lightpurple {
  background-color: #cf85cb;
}
.purple {
  background-color: #5c0e76;
}
@media only screen and (max-width: 1024px) {
  .line {
    width: 60vw;
  }
}
@media only screen and (max-width: 800px) {
  .line {
    width: 55vw;
  }
}
@media only screen and (max-width: 767px) {
  .line {
    display: none;
  }
}
</style>

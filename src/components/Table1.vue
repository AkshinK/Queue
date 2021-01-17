<template>
  <div class=" basi">
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Office</th>
          <th>Remove</th>
          <th>Popular time</th>
          <th>Chat</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>001</td>
          <td>Immigration</td>
          <td><button class="fill" v-on:click="applyFor">Apply</button></td>
          <td>low</td>
          <td><button class="raise" v-on:click="goChat">Check</button></td>
        </tr>
        <tr>
          <td>002</td>
          <td>qter</td>
          <td><button class="fill" v-on:click="applyFor">Apply</button></td>
          <td>high</td>
          <td><button class="raise" v-on:click="goChat">Check</button></td>
        </tr>
        <tr>
          <td>001</td>
          <td>Immigration</td>
          <td><button class="fill" v-on:click="applyFor">Apply</button></td>
          <td>low</td>
          <td><button class="raise" v-on:click="goChat">Check</button></td>
        </tr>
        <tr>
          <td>002</td>
          <td>qter</td>
          <td><button class="fill" v-on:click="applyFor">Apply</button></td>
          <td>high</td>
          <td><button class="raise" v-on:click="goChat">Check</button></td>
        </tr>
        <tr>
          <td>001</td>
          <td>Immigration</td>
          <td>+</td>
          <td>low</td>
          <td>.l.</td>
        </tr>
        <tr>
          <td>002</td>
          <td>qter</td>
          <td>-</td>
          <td>high</td>
          <td>.i.</td>
        </tr>
        <tr>
          <td>001</td>
          <td>Immigration</td>
          <td>+</td>
          <td>low</td>
          <td>.l.</td>
        </tr>
        <tr>
          <td>002</td>
          <td>qter</td>
          <td>-</td>
          <td>high</td>
          <td>.i.</td>
        </tr>
      </tbody>
    </table>
  </div>  
  </div>
</template>

<script>
import PostService from '../PostService';
    export default {
        data() {
            return {
            }
        },
        methods:{
          goChat(){
            this.$router.push("chat");
          },
          applyFor(){
            this.$router.push("form");
          },
          async deleteRec(id){
            await PostService.deletePost(id);
            this.posts = await PostService.getPosts();
          }
        }
    }
</script>

<style lang="scss" scoped>

h1{
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table{
  width:60%;
  table-layout: fixed;
  margin-left: auto;
  margin-right: auto;
}

.tbl-header{
  background-color: rgba(255,255,255,0.3);
 }
.tbl-content{
  height:300px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}
tr button{
  position: relative;
  right: 10%;
}


/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
body{
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  font-family: 'Roboto', sans-serif;
}
section{
  margin: 50px;
}


/* follow me template */
.made-with-love {
  margin-top: 40px;
  padding: 10px;
  clear: left;
  text-align: center;
  font-size: 10px;
  font-family: arial;
  color: #fff;
}
.made-with-love i {
  font-style: normal;
  color: #F50057;
  font-size: 14px;
  position: relative;
  top: 2px;
}
.made-with-love a {
  color: #fff;
  text-decoration: none;
}
.made-with-love a:hover {
  text-decoration: underline;
}


/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
    width: 6px;
} 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
} 
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
}


/*
  https://developer.mozilla.org/en/docs/Web/CSS/box-shadow
  box-shadow: [inset?] [top] [left] [blur] [size] [color];

  Tips:
    - We're setting all the blurs to 0 since we want a solid fill.
    - Add the inset keyword so the box-shadow is on the inside of the element
    - Animating the inset shadow on hover looks like the element is filling in from whatever side you specify ([top] and [left] accept negative values to become [bottom] and [right])
    - Multiple shadows can be stacked
    - If you're animating multiple shadows, be sure to keep the same number of shadows so the animation is smooth. Otherwise, you'll get something choppy.
*/

// Animate the size, inside
.fill:hover,
.fill:focus {
  box-shadow: inset 0 0 0 2em var(--hover);
}

// Animate the size, outside
.pulse:hover, 
.pulse:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em rgba(#fff,0);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--hover); }
}

// Stack multiple shadows, one from the left, the other from the right
.close:hover,
.close:focus {
  box-shadow: 
    inset -3.5em 0 0 0 var(--hover),
    inset 3.5em 0 0 0 var(--hover);  
}

// Size can also be negative; see how it's smaller than the element
.raise:hover,
.raise:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}

// Animating from the bottom
.up:hover,
.up:focus {
  box-shadow: inset 0 -3.25em 0 0 var(--hover);
}

// And from the left
.slide:hover,
.slide:focus {
  box-shadow: inset 6.5em 0 0 0 var(--hover);
}

// Multiple shadows, one on the outside, another on the inside
.offset {  
  box-shadow: 
    0.3em 0.3em 0 0 var(--color),
    inset 0.3em 0.3em 0 0 var(--color);
  
  &:hover,
  &:focus {
    box-shadow: 
      0 0 0 0 var(--hover),
      inset 6em 3.5em 0 0 var(--hover);
  }
}

//=== Set button colors
// If you wonder why use Sass vars or CSS custom properties...
  // Make a map with the class names and matching colors
$colors: (
  fill: #172758,
  pulse: #ef6eae, 
  close: #ff7f82, 
  raise: #ffa260, 
  up: #e4cb58, 
  slide: #8fc866, 
  offset: #19bc8b
);

// Sass variables compile to a static string; CSS variables are dynamic and inherited
  // Loop through the map and set CSS custom properties using Sass variables
@each $button, $color in $colors {
  .#{$button} {
    --color: #{$color};
    --hover: #{adjust-hue($color, 45deg)};
  }
}

// Now every button will have different colors as set above. We get to use the same structure, only changing the custom properties.
button {  
  color: var(--color);
  transition: 0.25s;
  
  &:hover,
  &:focus { 
    border-color: var(--hover);
    color: #fff;
  }
}

//=== Pen styling, ignore
body {
  color: #fff;
  background: hsl(227, 10%, 10%);
  font: 300 1em 'Fira Sans', sans-serif;
  
  // Center everything ever
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  display: flex;
}

// Basic button styles
button {
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
}

h1 { font-weight: 400; }

code { 
  color: #e4cb58;
  font: inherit;
}
</style>
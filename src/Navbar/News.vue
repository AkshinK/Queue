<template>
  <div id="news">
    <div id="title">
      <p>News</p>
    </div>
    <div id="scroll">
      <div class="in">
        <p>NEWS 1</p>
        <p>NEWS 2</p>
        <p>NEWS 3</p>
        <p>NEWS 4</p>
        <p>NEWS 5</p>
        <p>NEWS 6</p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'HelloWorld',
    props: {
    },
    data: () => {
      return {
          
      }
    },
    methods: {
    },
    mounted: function (){
        $(document).ready(function() {
        var width_in = $("#scroll .in").width();
        var width_scr = $("#scroll").width();

        scroll();
        function scroll() {
            $("#scroll .in").css({ left: width_in }).animate({
            left: "-=" + (width_scr + width_in)
            }, 15000, "linear", function() {
            scroll();
            });
        }

        console.log(width_scr);
        })
    }        
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#news *{
  box-sizing: border-box;
}

body {
  font-family: Arial, Tahoma, sans-serif;
  font-size: 16px;
}

#news {
  position: fixed;
  width: 100%;
  background-color: #ebebeb;
  z-index: -1;
}

#title {
  background-color: #ff2211;
  float: left;
  width: 8%;
  text-align: center;
  padding: 0.5em;
  color: #FFF;
  font-weight: bold;
  overflow: hidden;
}

#scroll {
  float: left;
  width: 92%;
  height: 100%;
  position: absolute;
  margin-left: 8%;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#scroll .in {
  position: relative;
}

#scroll p {
  display: inline-block;
  margin: 0 1em;
}

@media screen and (max-width: 700px) {

}

</style>
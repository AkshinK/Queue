<template>
  
<form>
    <legend class="section_title">Take ticket</legend>
    <label for="name">Name</label>
    <input id="name" type="text" name="name" v-model="name">
    <label for="email">Email</label>
    <input id="email" type="text" name="email" v-model="email1">
    <label for="phone">Phone</label>
    <input id="phone" type="text" name="phone" v-model="phone">
    <label for="comments">Comments</label>
    <textarea id="comments" name="textarea" rows="10"></textarea>
    <label for="select">Select</label>

    <select id="select" name="">
        <option value="option1">Option1</option>
    </select>
    <!-- <input type="submit"> -->
    <!-- <button type="submit" v-on:click="createPost1">Submit</button> -->
    <input v-on:click="createPost1" type="submit">
</form>
</template>

<script>
import PostService from '../PostService';
export default {
    data(){
        return{
            pessoas: [],
            pessoa: { 
            nome : '',
            cidade: '',
            email: '',
            },
            name: '',
            email1:'',
            phone:'',
            randomNum:''
        }
    },
    methods: {
        async createPost(){
            console.log("basi")
            await PostService.insertPost(this.text,this.number);
            this.posts = await PostService.getPosts();
            
        },
        async createPost1(){
            console.log("basi");
            this.randomNum = Math.random()*100;
            await PostService.insertPost(this.name,this.email1,this.phone,this.randomNum);
            this.posts = await PostService.getPosts();
            this.$router.push("main");
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Cabin');

* { box-sizing: border-box }

body {   
    font-family: 'Cabin', serif;
    color: white;
    padding: 0;
    margin: 0;
    background: linear-gradient(-45deg, #2177a0, #57a57d);
}

form {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
}

legend {
    text-shadow: 0px 2px 1px rgba(0,0,0,0.2);
    width: 100%;
    font-size: 22px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}

input,
textarea {
    font-size: 18px;
    box-shadow: inset 0px 1px 1px rgba(0,0,0,0.2), 0px 1px 1px rgba(255,255,255,0.3);
    border-radius: 3px;
    width: 100%;
    display: block;
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
    transition: all 0.2s ease;
    color: white;
}

input[type="submit"] {
    background: #166387;
    border: 1px solid #044C6E;
    box-shadow: inset 0px 1px 0px rgba(255,255,255,0.2), 0px 4px 0px rgba(6,82,117,1);
}

input[type="radio"],
input[type="checkbox"]{
    width: auto;
    display: inline;
}

input:focus,
textarea:focus {
    box-shadow: 0px 0px 5px rgba(255,255,255,0.3);
    border: 1px solid white;
    background: rgba(0,0,0,0.1);
}

label {
    border-bottom: 1px solid rgba(255,255,255,0.2);
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    text-shadow: 0px 2px 1px rgba(0,0,0,0.2);
}

select {
    height: auto;
    margin: 0;
    background: none;
    width: 100%;
    color: white;
    font-size: 18px;
    box-shadow: inset 0px 1px 1px rgba(0,0,0,0.2), 0px 1px 1px rgba(255,255,255,0.3);
    border-radius: 3px;
    width: 100%;
    display: block;
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
    transition: all 0.2s ease;
    color: white;
}

</style>>

<template>
  <div class="container">
      <div>
          <!-- <label class="" for="create entry">Say smth</label> -->
          <!-- <input type="text" v-model="text"> -->    
          <!-- <input type="text" v-model="number"> -->
          <!-- <input type="submit" v-on:click="createPost"> -->
      </div>
      <p class="error" v-if="error">{{error}}</p>
      <div class="posts-container">
          <div class="post"
            v-for="(post,index) in posts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post._id"
            v-on:dblclick="deletePost(post._id)"
          >
            <!-- {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}} -->
            <p class="text">{{post.text}} {{post.number}} {{post.email}} {{post.queueNum}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import PostService from '../PostService';
export default {
    name : 'PostComponent',
    data(){
        return{
            posts : [],
            error : '',
            text : '',
            number: ''
        }
    },
    async created(){
        try {
            this.posts = await PostService.getPosts();
            console.log(this.posts);
        } catch (err) {
            this.error = err.message;
        }
    },
    methods:{
        async createPost(){
            await PostService.insertPost(this.text,this.number);
            this.posts = await PostService.getPosts(); 
        },
        async deletePost    (id){
            await PostService.deletePost(id);
            this.posts = await PostService.getPosts();
          }
    }
}
</script>

<style>

input,
textarea {
    font-size: 18px;
    box-shadow: inset 0px 1px 1px rgba(0,0,0,0.2), 0px 1px 1px rgba(255,255,255,0.3);
    border-radius: 3px;
    margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
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
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  margin-top: 20px;
  padding: 0px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
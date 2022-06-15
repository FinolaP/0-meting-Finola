<template>

<div>
    <h2>Add messages</h2>

    <input type="text" id="message">
     <button id="button" @click="processMessage">
        send message
    </button>

    <br>
    <p> read your messages<nuxt-link to="/message/read"> here </nuxt-link></p>
    </br>

</div>
</template>

<script>
    export default {
        methods: {
            //get and post message from text field
            processMessage() {
                var commitMessage = document.getElementById('message').value
                //1) stuur naar store van dit vue project (index) 
                //2) sturen = commit 
                //3) geeft mee welke functie je wilt, addMessage
                //4)
                this.$store.commit('addMessage', commitMessage)
            }
            
        }
    }     
</script>
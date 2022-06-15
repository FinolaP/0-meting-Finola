<template>
    <div>
        <body>
            <h2>Read messages</h2>
            <p>{{ message }}</p>
        </body>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: this.$store.state.messages.toString()
            }
        }
    } 

</script>
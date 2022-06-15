<template>
<div class="countbox">
  <div id="counter">
    <button @click="count++">
      Click to count: {{ count }}
    </button>
  </div>
</div>

</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        }
    } 
</script>
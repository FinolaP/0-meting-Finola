<template>

    <div>

        <h2>Pagina 2</h2>


        <body>

            <section>
                <article>
                    <p>Om naar andere pagina's te gaan kun je het menu gebruiken. Via <nuxt-link to="/">deze link</nuxt-link> kun je naar de 'welcome' pagina.</p>
                </article>
            </section>
        </body>
        <div class="rocket" >
            <img src="./../images/rocket.png" title="credits: image from Figma" class="align">
        </div>
    </div>
</template>

<script>
export default {
 data: function() {
 return {
 message: "dit is een message"
 }
 }
}
</script>
<style scoped>

</style>

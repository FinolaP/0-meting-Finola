<template>
  <div>
    <h2>Welcome</h2>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
          <NuxtLogo />
          <VuetifyLogo />
        </v-card>
        <v-card>
          <v-card-title class="headline">
          <h1>Finola's 0 meting</h1> 
          </v-card-title>
          <v-card-text>
          <p>Om naar andere pagina's te gaan kun je het menu gebruiken. Je kunt ook via <nuxt-link to="/pagina2">deze link</nuxt-link> naar pagina 2 van de opdracht.  </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

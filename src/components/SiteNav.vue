<template>
  <nav id="site-nav" class="mdc-permanent-drawer">
    <div class="mdc-list-group">
      <nav class="mdc-list">
        <router-link class="mdc-list-item" to="/latest" activeClass="mdc-permanent-drawer--selected">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">access_time</i>
          <span>Latest Activity</span>
        </router-link>
        <router-link class="mdc-list-item" :to="{name:'settings'}" activeClass="mdc-permanent-drawer--selected">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">settings</i>
          <span>Settings</span>
        </router-link>
      </nav>
      <h3 class="mdc-list-group__subheader" style="padding-left: 10px;"
          activeClass="mdc-permanent-drawer--selected">Your Classes</h3>
      <nav class="mdc-list">
        <router-link v-for="c in classes" :key="c.id" :to="'/classes/'+c.id" class="mdc-list-item"
                     activeClass="mdc-permanent-drawer--selected">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">people</i>
          <span>{{c.name}}</span>
        </router-link>
        <router-link to="/classes/new" class="mdc-list-item" activeClass="mdc-permanent-drawer--selected">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">add</i>
          <span>Create or join a class</span>
        </router-link>
      </nav>

      <hr class="mdc-list-divider">

      <h3 class="mdc-list-group__subheader" style="padding-left: 10px;">Studiously</h3>
      <nav class="mdc-list">
        <a href="https://studiously.co" class="mdc-list-item">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">home</i>Home
        </a>
        <a href="https://studiously.co/about" class="mdc-list-item">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">info_outline</i>About
        </a>
      </nav>
    </div>
    <!--<nav class="mdc-permanent-drawer_"-->
  </nav>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'site-nav',
    computed: {
      ...mapGetters('classes', {
        classes: 'classes'
      })
    }
  }
</script>
<style>
  #site-nav {
    min-height: 100vh;
  }
</style>

<template>
  <div id="site-header" class="mdc-toolbar">
    <div class="mdc-toolbar__row">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
        <!--<button id="menu-btn" class="material-icons mdc-toolbar__icon&#45;&#45;menu">menu</button>-->
        <i class="material-icons mdc-toolbar__icon" style="padding-left: 24px">create</i><span class="mdc-toolbar__title" style="padding-left: 4px">Studiously</span>
      </section>
      <!--<div class="mdc-menu-anchor">-->
      <section class="mdc-toolbar__section mdc-toolbar__section--align-end">
        <div class="mdc-menu-anchor">
          <div class="name-container" v-on:click="mdcMenu.show()">
            <span style="vertical-align: middle">{{ user.name }}</span>
            <i style="vertical-align: baseline" class="material-icons">arrow_drop_down</i>
          </div>
          <div class="mdc-simple-menu" tabindex="-1">
            <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
              <li class="mdc-list-item" role="menuitem" tabindex="0">Your Classes</li>
              <li class="mdc-list-item" role="menuitem" tabindex="0">Settings</li>
              <li class="mdc-list-item" role="menuitem" tabindex="0">Log Out</li>
              <li role="separator" class="mdc-list-divider"></li>
              <li class="mdc-list-item" role="menuitem" tabindex="0">Help</li>
            </ul>
          </div>
        </div>
      </section>
      <!--</div>-->
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  //  import MDCSimpleMenu from 'mdc-menu';

  export default {
    name: 'site-header',
    data () {
      return {
        mdcToolbar: null,
        mdcMenu: null
      }
    },
    mounted () {
      this.$data.mdcToolbar = new this.$mdc.toolbar.MDCToolbar(this.$el)
      this.$data.mdcMenu = new this.$mdc.menu.MDCSimpleMenu(this.$el.querySelector('.mdc-simple-menu'))
//      this.$data.mdcMenu.show()
    },
    beforeDestroy () {
      this.$data.mdcToolbar.destroy()
      this.$data.mdcMenu.destroy()
    },
    computed: {
      ...mapGetters('users', [
        'user'
      ])
    }
  }
</script>
<style>
  #site-header {
    margin: 0;
    padding: 0;
  }

  .name-container {
    padding-right: 24px;
    display: flex;
    align-items: center;
  }
</style>

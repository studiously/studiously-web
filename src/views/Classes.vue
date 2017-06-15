<template>
  <View>
    <div class="mdc-toolbar-fixed-adjust mdc-layout-grid" style="padding-top: 32px">
      <div class="mdc-layout-grid__inner">
        <!--<h3 class="mdc-typography&#45;&#45;headline mdc-typography&#45;&#45;adjust-margin"></h3>-->
        <div class="mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-12-phone">
          <div class="mdc-list-group">
            <ul class="mdc-list mdc-list--two-line bordered-list">
              <router-link v-for="c in classes" :key="c.id" class="mdc-list-item" :to="'/classes/'+c.id" data-mdc-auto-init="MDCRipple">
                <span class="mdc-list-item__text">{{c.name}}<span class="mdc-list-item__text__secondary" v-if="c.online">{{ (c.online || 0) | toWords | capitalize }} other{{ (c.online || 0) | pluralize }} studying right now.</span></span>
                <!--<router-link :to="{ name: 'questions', params: { id: c } }" class="mdc-list-item__end-detail material-icons link-unstyled" :aria-label="'Study '+ clazz(c).name" :title="'Study ' + clazz(c).name">arrow_forward</router-link>-->
                <i class="mdc-list-item__end-detail material-icons link-unstyled">arrow_forward</i>
              </router-link>
            </ul>
            <!--<hr class="mdc-list-divider">-->
            <ul class="mdc-list bordered-list">
              <li class="mdc-list-item" data-mdc-auto-init="MDCRipple">
                <span class="mdc-list-item__text">Create a new class</span>
                <i class="mdc-list-item__end-detail material-icons link-unstyled">add</i>
              </li>
              <li class="mdc-list-item" data-mdc-auto-init="MDCRipple">
                <span class="mdc-list-item__text">Join somebody else's class</span>
                <i class="mdc-list-item__end-detail material-icons link-unstyled">add</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </View>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'classes',
    data () {
      return {
        mdcGridList: null
      }
    },
    computed: {
      ...mapGetters('classes', {
        classes: 'getClasses'
      }),
      ...mapGetters('users', {
        cu: 'getUser'
      })
    },
    mounted () {
      this.$mdc.autoInit()
    }
  }
</script>
<style>
  /*.mdc-grid-tile {*/
  /*--mdc-grid-list-tile-width: 300px;*/
  /*}*/
  .bordered-list {
    /* remove the side padding. we'll be placing it around the item instead. */
    padding-right: 0;
    padding-left: 0;
  }

  .bordered-list .mdc-list-item {
    /* Add the list side padding padding to the list item. */
    padding: 0 16px;
    /* Add a border around each element. */
    border: 1px solid rgba(0, 0, 0, .12);
  }

  /* Ensure adjacent borders don't collide with one another. */
  .bordered-list .mdc-list-item:not(:first-child) {
    border-top: none;
  }

  .link-unstyled, .link-unstyled:link, .link-unstyled:hover {
    color: inherit;
    text-decoration: inherit;
  }
</style>

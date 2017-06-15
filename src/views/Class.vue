<template>
  <div>
    <site-header></site-header>
    <div class="content">
      <site-nav style="padding-top: 16px;"></site-nav>
      <main>
        <div class="mdc-layout-grid">
          <div class="mdc-layout-grid__inner">
            <div
              class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-mobile">
              <div class="flex-container">
                <i class="material-icons md-36" style="vertical-align: middle; color: gray;">people</i>
                <h1 style="padding-left: 8px;">{{ c.name }}</h1>
              </div>
            </div>
            <div
              class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-mobile">
              <button class="mdc-fab mdc-fab--mini material-icons" aria-label="Favorite">
               <span class="mdc-fab__icon">favorite</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'class',
    props: ['id'],
    computed: {
      ...mapGetters('classes', {
        getClass: 'class'
      }),
      c: function () {
        return this.getClass(this.id)
      }
    },
    data () {
      return {
        mdcSearch: null
      }
    },
    mounted () {
      this.$data.mdcSearch = new this.$mdc.textfield.MDCTextfield(document.querySelector('#search'))
    },
    beforeDestroy () {
      this.$data.mdcSearch.destroy()
    }
  }
</script>
<style>
  .material-icons.md-36 {
    font-size: 36px;
  }

  .flex-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
</style>

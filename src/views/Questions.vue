<template>
  <div>
    <div class="mdc-layout-grid" style="padding-top: 8px">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-12-phone" style="padding-bottom: 16px;">
          <div id="search" class="mdc-textfield mdc-textfield--fullwidth">
            <input class="mdc-textfield__input"
                   type="text"
                   placeholder="Search"
                   aria-label="Search">
          </div>
        </div>
        <div class="mdc-layout-grid__cell--span-9-desktop">
          <div class="mdc-list-group thin-border">
            <div v-for="(unit, index) in units">
              <h3 class="mdc-list-group__subheader mdc-typography--subheading2">{{unit.name}}</h3>
              <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list">
                <span v-if="!qs(unit.id).length" class="mdc-typography--body1" style="padding-left: 16px">No questions 😞</span>
                <li v-for="question in qs(unit.id)" class="mdc-list-item">
              <span class="mdc-list-item__start-detail" role="presentation">
               <i aria-hidden="true" class="material-icons">{{ qt(question).icon }}</i>
              </span>
                  <span class="mdc-list-item__text"> {{ qt(question).primary }}
                <span class="mdc-list-item__text__secondary">{{ question.author_id }}</span>
              </span>
                  <span v-if="question.answered" class="mdc-list-item__end-detail"><i style="color: #00C853" class="material-icons">checkmark</i></span>
                </li>
              </ul>
              <hr v-if="index !== (units.length-1)" class="mdc-list-divider">
            </div>
          </div>
        </div>
      </div>
    </div>
    <button id="fab" class="mdc-fab material-icons" aria-label="create a question">
      <span class="mdc-fab__icon">add</span>
    </button>
  </div>
</template>
<script>
  export default {
    name: 'questions',
    methods: {
      qt (question) {
        switch (question.type) {
          case 'multiple_choice':
            return {icon: 'format_list_bulleted', primary: question.data.prompt}
          default:
            return {icon: 'error', primary: 'Unsupported question type.'}
        }
      },
      isLast (array, $index) {
        return array.length - 1 === $index
      },
      qs (uid) {
        return this.$data.questions.filter(q => q['unit_id'] === uid)
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
  #fab {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }

  @media (min-width: 1024px) {
    #fab {
      bottom: 3rem;
      right: 5rem;
    }
  }

  .thin-border {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  /**/
  /*@media (min-width: 0px){*/

  /*}*/

  /*!* medium handset *!*/
  /*@media (min-width: 360px) {*/

  /*}*/

  /*@media (min-width: 400px) {*/

  /*}*/
</style>

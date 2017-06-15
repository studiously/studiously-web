<template>
  <div>
    <!--<header class="mdc-toolbar mdc-toolbar&#45;&#45;fixed mdc-toolbar-fixed-adjust" style="background-color: white; color: black;">-->
    <!--<div class="mdc-toolbar__row">-->
    <!--<section class="mdc-toolbar__section">-->
    <!---->
    <!--</section>-->
    <!--</div>-->
    <!--</header>-->
    <div class="mdc-layout-grid" style="padding-top: 8px">
      <div class="mdc-layout-grid__inner">
        <!-- mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone -->
        <div class="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-12-phone" style="padding-bottom: 16px;">
          <!--<div id="search-input" class="mdc-textfield mdc-textfield&#45;&#45;fullwidth">-->
          <!--<input type="text" class="mdc-textfield__input" id="search" name="search"/>-->
          <!--<label for="search" class="mdc-textfield__label">Search</label>-->
          <!--</div>-->
          <div id="search" class="mdc-textfield mdc-textfield--fullwidth">
            <input class="mdc-textfield__input"
                   type="text"
                   placeholder="Search"
                   aria-label="Search">
          </div>
          <!--<select class="mdc-select">-->
          <!--<option value="latest" default selected>Latest</option>-->
          <!--<option value="all">All</option>-->
          <!--<optgroup label="Units" v-if="units.length">-->
          <!--<option v-for="unit in units" v-bind:value="unit.id"></option>-->
          <!--</optgroup>-->
          <!--</select>-->
          <!--<div class="mdc-layout-grid__cell&#45;&#45;span-2-desktop mdc-layout-grid_cell&#45;&#45;span-4-tablet mdc-layout-grid__cell&#45;&#45;span-12-phone">-->
          <!--</div>-->
          <!--<div class="mdc-layout-grid__cell&#45;&#45;span-2-desktop mdc-layout-grid_cell&#45;&#45;span-4-tablet mdc-layout-grid__cell&#45;&#45;span-12-phone">-->
          <!--&lt;!&ndash;<div class="mdc-layout-grid__cell&#45;&#45;span-3-desktop mdc-layout-grid_cell&#45;&#45;span-3-tablet mdc-layout-grid__cell&#45;&#45;span-12-phone">&ndash;&gt;-->
          <!--<span>Unit: </span>-->
          <!--<div id="unit-input" class="mdc-select" role="listbox" tabindex="0">-->
          <!--<span class="mdc-select__selected-text">Latest</span>-->
          <!--<div class="mdc-simple-menu mdc-select__menu">-->
          <!--<ul class="mdc-list mdc-simple-menu__items">-->
          <!--<li class="mdc-list-item" role="option" id="latest" tabindex="0">Latest</li>-->
          <!--<li class="mdc-list-divider" role="separator" aria-disabled="true"></li>-->
          <!--<li v-for="unit in units" class="mdc-list-item" role="option" :id="unit.id" tabindex="0">-->
          <!--<span>{{ unit.name }}</span>-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--</div>-->
          <!--</div>-->
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
    name: 'Questions',
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
        mdcSearch: null,
        'units': [
          {
            'id': '01BJ6VQ7MWZJ9T69ZWM4H76ZCW',
            'class_id': '01BJ6TV2VXDWXE46720X97GYXM',
            'name': 'Evolution'
          },
          {
            'id': '01BJ6VQ7MWEDXFJX0XWWRJ7CJS',
            'class_id': '01BJ6TV2VXDWXE46720X97GYXM',
            'name': 'Mitosis'
          }
        ],
        'questions': [
          {
            'id': '01BJ7CEZGX92J4B9P7QBAXTRSX',
            'type': 'multiple_choice',
            'author_id': 'Mark White',
            'unit_id': '01BJ6VQ7MWEDXFJX0XWWRJ7CJS',
            'rating': 10,
            'data': {
              'prompt': 'What is the G₀ phase?'
            },
            'answered': false
          },
          {
            'id': '01BJ7CEZGXX6CAMQP54M03QRZ9',
            'type': 'multiple_choice',
            'author_id': 'Andre Singleton',
            'unit_id': '01BJ6VQ7MWEDXFJX0XWWRJ7CJS',
            'rating': 5,
            'data': {
              'prompt': 'Which checkpoint controls Mitosis?'
            },
            'answered': true
          }
        ]
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

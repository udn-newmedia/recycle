<template>
  <span>
    <div class="title" style="display: inline-block;">
      <span v-bind:class="{ active: isShow }" style="cursor: pointer; display: inline-block;" @click="showContent()">{{title}}
        <i @click="changeFont" :class="[isChange?'fa-chevron-down':'fa-chevron-up','fa']"></i></span>
    </div>
    <div v-if="isShow" class="subtitle">
      <slot></slot>
    </div>
  </span>
</template>
<script>
  export default {
    name: 'Dictionary',
    props: {
      title: {
        type: String
      },
      gaNumber: {
        type: String
      }
    },
    data() {
      return {
        isShow: false,
        isChange: false,
      }
    },
    methods: {
      showContent() {
        if (this.isShow) {
          this.isShow = false;
          this.isChange = false;
        } else {
          this.isShow = true;
          this.isChange = true;
        }
      },
      changeFont() {
        if (this.isChange == false) {
          this.isChange = true;
        } else {
          this.isChange = false;
        }
      }
    }
  }

</script>
<style lang="scss" scoped>

  .title {
    color: #44d0d1;
    background: transparent;
    padding-left: 5px;
    padding-right: 5px;
  }

  .subtitle {
    color: #ffffff;
    background: transparent;
    margin: 2rem 0;
    padding: 2rem;
    animation: ani 0.5s ease;
    border: 1px solid white;
  }

  @keyframes ani {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

</style>

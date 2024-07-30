<template>
  <div class="accordion">
    <button class="accordion__header" @click="toggle">
      <slot name="header"></slot>
    </button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="accordion__body font-pr" v-show="isOpen">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);

    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    const beforeEnter = (el) => {
      el.style.height = '0';
    };

    const enter = (el) => {
      const height = el.scrollHeight + 'px';
      el.style.height = height;
      el.addEventListener(
        'transitionend',
        () => {
          el.style.height = 'auto';
        },
        { once: true },
      );
    };

    const beforeLeave = (el) => {
      el.style.height = el.scrollHeight + 'px';
      setTimeout(() => {
        el.style.height = '0';
      });
    };

    const leave = (el) => {
      el.addEventListener(
        'transitionend',
        () => {
          el.style.height = 'auto';
        },
        { once: true },
      );
    };

    return { isOpen, toggle, beforeEnter, enter, beforeLeave, leave };
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  &__header {
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 15px;
    color: #333;
    text-align: left;
    padding: 0 24px;
    border-radius: 12px;
    background-color: #f1f3f5;
    outline: none;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 24px;
      width: 12px;
      height: 6.5px;
      margin-top: -3px;
      background-image: url(/static/images/accordion_arrow.svg);
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  &__body {
    margin-top: 8px;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    background-color: $white;
    overflow: hidden;
    transition: height 0.3s ease;
  }
}
</style>

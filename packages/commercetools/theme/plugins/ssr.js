import Vue from 'vue';

const rootState = {};

Vue.mixin({
  beforeCreate() {
    const { setup } = this.$options;

    if (setup) {
      this.$options.setup = (props, context) => setup(props, { ...context, rootState });
    }
  }
});


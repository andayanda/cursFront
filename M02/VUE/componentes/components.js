Vue.component('my-button', {
  template: `
    <div>
    <button @click='onAdd2'>Boto components: {{count}}</button>
    </div>
    `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onAdd2() {
      this.count += 1;
    },
  },
});

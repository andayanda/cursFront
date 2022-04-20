Vue.component('user-details', {
    template: `
      <div>
      <p>Hi (Componente: user-details){{primer}}{{last}}</p>
      </div>
      `,
      props:['primer','last']
   
  });
  
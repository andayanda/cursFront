Vue.component('user-details', {
    template: `
      <div>
      <p>Hi (Componente detail){{first}}{{last}}</p>
      </div>
      `,
      props:['first','last']
   
  });
  
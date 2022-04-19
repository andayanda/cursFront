Vue.component('user-details', {
    template: `
      <div>
      <p>Hi (Componente: user-details){{first}}{{last}}</p>
      </div>
      `,
      props:['first','last']
   
  });
  
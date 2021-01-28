const cep = document.querySelector('#cep');

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector('#' + campo)) {
      document.querySelector('#' + campo).value = result[campo];
    }
  }
};

cep.addEventListener('blur', (e) => {
  let search = cep.value.replace('-', '');
  //prettier-ignore
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  fetch(`http://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => {
        showData(data);
      });
    })
    .catch((e) => {
      console.log('Ocorreu um erro:' + e, message);
    });
});

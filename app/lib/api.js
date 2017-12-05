class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    };
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static post() {
    return this.xhr(route, params, 'POST');
  }

  static put() {
    return this.xhr(route, params, 'PUT');
  }

  static delete() {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb) {
    const host = 'http://localhost:3000';
    const url = `${host}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
    options.headers = Api.headers();
    return fetch(url, options).then( (response) => {
      let json = response.json();
      if (response.ok) {
        return json;
      }
      return json.then( (error) => {throw error} );
    } )
  }
}

export default Api;

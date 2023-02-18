import {authenticate} from '../Api';
import axios from 'axios';

function log(m){
    console.log(m);
}


export default function login (e){
    log('---------начало сегмента login----------');
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    log(email);
    log(pasword);
    axios.post(authenticate, {
        email: email,
        password: password
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      log('---------конец сегмента login----------');
}




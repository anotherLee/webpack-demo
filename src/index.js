import _ from 'lodash';
import $ from 'jquery';
import * as limingru from './limingru'
import './index.scss'
import './jack.less'
import png from './1.png'


var img1 = document.createElement("img");
img1.src = png;
document.body.appendChild(img1);



limingru.sayHi()

function component() {
  var $div = $('<div/>');
    $div.text(_.join(['Hello', 'limingru'], ' '));
      return $div;
}

$(document.body).append(component());

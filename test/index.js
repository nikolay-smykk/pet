



    const title = "МАЙОНЕЗ Professional 78% ведро 5 кг. Heinz" 
    const lable = "АКЦИЯ!" 
    const img = "https://prof.alidi.ru/image/60c9b1f598677a7e5789b2f5"
    const buttonText = "Заказать"
    const price = "1 287,99 ₽ за шт."
    const oldPrice = "1 599,99 ₽"
    const color = "#FF776A"
    const description = "Нежный сливочный вкус, густая консистенция и высокое качество - отличительные качества этого майонеза."
    const href = "https://gl.alidi.ru/B2B/horeca-reactjs/-/issues/332" // АДрес куда ведет кнопка

    const POPUP_NAME = 'Название поп-апа'; // для сервиса


// Цвет для АКЦИЯ! #4ED2A3
// Цвет для НОВИНКА! #F99A4E
// Цвет для РАСПРОДАЖА! #FF776A



		var popupContent = `<style>\
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\
#cqPopup {\
  width: 100%;\
  height: 100%;\
  position: fixed;\
  left: 0;\
  top: 0;\
}\
.cq-popup__bg {\
  background: rgba(51, 51, 51, 0.8);\
  cursor: pointer;\
  height: 100%;\
  left: 0;\
  position: fixed;\
  top: 0;\
  width: 100%;\
  z-index: 1;\
}\
.wrapper__body {\
  justify-content: center;\
  align-items: center;\
  width: 100%;\
  height: 100%;\
}\
.cq-popup__body {\
  background-color: #FFF;\
  border-radius: 0px;\
  border: none;\
  box-shadow: 0px 1px 14.3px 0.8px rgba(0, 0, 0, 0.5);\
  box-sizing: border-box;\
  font-family: \'Open Sans\', sans-serif;\
  justify-content: center;\
  max-width: 600px;\
  padding: 30px;\
  position: relative;\
  top: 0px;\
  width: 90%;\
  z-index: 2;\
  max-width:350px;\
}\
.cq-popup__body * {\
  box-sizing: border-box;\
}\
.cq-popup__close {\
  background: rgba(0, 0, 0, 0.40);\
  border-radius: 100px;\
  box-sizing: content-box;\
  color: #fff;\
  font-family: \'PT Sans\', sans-serif;\
  font-size: 12px;\
  height: auto;\
  padding: 3px 3px 3px 24px;\
  right: 0px;\
  top: -29px !important;\
  width: 51px;\
  position: absolute;\
  z-index: 99;\
  cursor: pointer;\
}\
.cq-popup__close:hover {\
  background: rgba(0, 0, 0, 0.60);\
}\
.cq-popup__close:before {\
  -webkit-font-smoothing: subpixel-antialiased;\
  background-image: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcgKDQ1Mzk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5DbG9zZS1zbWFsbDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJTdW5Tb2NoaSwtZnVsbC1wb3B1cC1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM1MS4wMDAwMDAsIC05NC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IkNsb3NlLWJ0biIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMzOS4wMDAwMDAsIDg3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkNsb3NlLXNtYWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IkJvdW5kcyIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuNSwyLjUgTDIuNSw5LjUiIGlkPSJMaW5lLUNvcHkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjAwMDAwMCwgNi4wMDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTYuMDAwMDAwLCAtNi4wMDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjUsMi41IEwyLjUsOS41IiBpZD0iTGluZS1Db3B5LTIiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\');\
  background-repeat: no-repeat;\
  content: " " !important;\
  height: 10px !important;\
  left: 10px !important;\
  position: absolute !important;\
  top: 6px !important;\
  width: 10px !important;\
}\
.wrapper {\
  display: flex;\
  flex-direction: column;\
  justify-content:center;\
  align-items:center;\
  padding:0;\
  top:50px;\
}\
.wrapper-col {\
  flex-direction: column;\
}\
.wrapper-row {\
  flex-direction: row;\
}\
.cq-popup__text {\
  color: #000;\
  font-size: 16px;\
  font-weight: 300;\
  line-height: 25px;\
  margin: 0;\
  padding: 0;\
  text-align: center;\
  width: 100%;\
}\
.cq-popup__text-h1 {\
  font-size: 24px;\
  font-weight: 300;\
  line-height: 28px;\
  margin-bottom: 14px;\
}\
.cq-popup__text-h2 {\
  font-size: 22px;\
}\
.cq-popup__form {\
  flex-wrap: wrap;\
  margin: 0;\
  width: 100%;\
}\
.cq-popup__form_title {\
  align-items: flex-start;\
  margin-bottom: 23px;\
}\
.cq-popup__form_content {\
  align-items: center;\
}\
.cq-popup__form_inputs {\
  align-items: flex-start;\
  justify-content: center;\
}\
.cq-popup__input {\
  background: transparent;\
  border: 1px solid #000000;\
  border-radius: 0px;\
  color: #000000;\
  font-size: 14px;\
  font-weight: 400;\
  margin-bottom: 17px;\
  padding: 10px 14px;\
  width: 100%;\
}\
.cq-popup__input:focus {\
  outline: none;\
}\
::-webkit-input-placeholder {\
  color: #999999;\
  font-size: 14px;\
  font-weight: 300;\
  line-height: normal;\
}\
::-moz-placeholder {\
  color: #999999;\
  font-size: 14px;\
  font-weight: 300;\
  line-height: normal;\
}\
/* Firefox 19+ */\
:-moz-placeholder {\
  color: #999999;\
  font-size: 14px;\
  font-weight: 300;\
  line-height: normal;\
}\
/* Firefox 18- */\
:-ms-input-placeholder {\
  color: #999999;\
  font-size: 14px;\
  font-weight: 300;\
  line-height: normal;\
}\
:focus::-webkit-input-placeholder {\
  color: transparent\
}\
:focus::-moz-placeholder {\
  color: transparent\
}\
:focus:-moz-placeholder {\
  color: transparent\
}\
:focus:-ms-input-placeholder {\
  color: transparent\
}\
.cq-popup__button {\
  background-color: #000000;\
  border-radius: 0px;\
  border: none;\
  color: #fefefe;\
  cursor: pointer;\
  font-size: 16px;\
  font-weight: 400;\
  padding: 9px 0;\
  text-align: center;\
  transition: all 300ms ease;\
  width: 100%;\
}\
.cq-popup__button:focus {\
  outline: none;\
}\
.cq-popup__button:hover {\
  background-color: #222222;\
}\
.cq-img {\
  display: block;\
  margin: 0 auto;\
  max-width: 100%;\
}\
.label{
  font-family: 'Roboto';\
font-style: normal;\
font-weight: 700;\
font-size: 24px;\
line-height: 28px;\
color: #FFFFFF;\
}\
.buttonText{
  background: #1753FF;\
border-radius: 5px;\
color:white;\
padding: 10px 100px;\
margin-bottom:20px;\
}\
.price{
color: #1753FF;\
margin:0;\
margin-top:22px;\
}\
.label-wrapper{
  background: ${color};\
  width:100%;\
  display:flex;\
  justify-content:center;\
  margin-top:30px;\
}\
.title-wrapper{
  padding:20px 60px;\
}\
.title{
  font-family: 'Roboto';\
font-style: normal;\
font-weight: 500;\
font-size: 18px;\
line-height: 21px;\
text-align: center;\

color: #333742;\
}\
.oldPrice{
  font-family: 'Roboto';\
  color: #FF776A;\
  text-decoration: line-through;\
}\
.description{
  font-family: 'Roboto';\
font-style: normal;\
font-weight: 300;\
font-size: 16px;\
line-height: 19px;\
text-align: center;\
padding:0px 20px;\
margin:0;\

color: #333742;\
}\
</style>\
<div class="cq-popup__bg"></div>\
<div class="wrapper">\
    <div class="cq-popup__body wrapper">\
        <a onclick="close_popup()" class="cq-popup__close">Закрыть</a>\
            <div class="cq-popup__form wrapper-col wrapper">\
              <div class="label-wrapper">
                <p class="label">${lable}</p>\
                </div>\
                <div class="title-wrapper">
                  <p class="title">${title}</p>\

                </div>\
                `
 
const oldPriceHTML = `<p class="oldPrice">${oldPrice}</p>` 
const priceHTML =`
                <p class="price">${price}</p>\
                `
const descriptionHTML = description? `<p class="description">${description}</p>` :""
const popUpDoc = ` 
              <img class="cq-img" src=${img} alt="Girl in a jacket">
              <a onclick="submit()" class="buttonText">${buttonText}</a>\
            </div>\
    </div>\
</div>`
var div = document.createElement('div');
div.innerHTML = popupContent+descriptionHTML+priceHTML+ (oldPrice ? oldPriceHTML : "") +popUpDoc;
div.id = 'cqPopup';
document.body.appendChild(div);
 

var BODY = document.getElementById('cqPopup');
var BACKGROUND = document.querySelector('.cq-popup__bg');
var CLOSE_BUTTON = document.querySelector('.cq-popup__close');
var FORM = document.querySelector('.cq-popup__form');
var INPUT = document.querySelector('.cq-popup__input');
 

function close_popup() {
  BODY.remove();
};
function submit(){
  window.location.href = href;
}
 
function track_data() {
  
  carrotquest.identify([{op: 'update_or_create', key: '$email', value: INPUT.value}]);
  
  carrotquest.trackMessageInteraction('{{ sending_id }}', 'replied');
  
  carrotquest.track('Ответил на поп-ап — ' + POPUP_NAME);
};
 

carrotquest.trackMessageInteraction('{{ sending_id }}', 'read');
 

FORM.onsubmit = function() {
  track_data();
  close_popup();
};
 
CLOSE_BUTTON.onclick = function() {
  close_popup();
};
 
BACKGROUND.onclick = function() {
  close_popup();
};
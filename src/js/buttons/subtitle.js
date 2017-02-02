export default function (context) {
  const elem = document.createElement('div');
      elem.classList.add('em-button');
      context.playButtonId = `${context.idPrefix}-subtitle-button`;
      elem.setAttribute('id', context.playButtonId);
      elem.classList.add('em-button');
      elem.classList.add('subtitle72');
      const childElem = document.createElement('div');
      childElem.classList.add('fa');
      childElem.classList.add('fa-newspaper-o');
      elem.appendChild(childElem);
      elem.addEventListener('mousedown', () => {
        if (!elem.classList.toggle('btnActive')) {
          elem.classList.add('btnActive');
        }
      });
      elem.addEventListener('mouseup', () => {
        if (elem.classList.toggle('btnActive')) {
          elem.classList.remove('btnActive');
        }
      });
      elem.addEventListener('mouseout', () => {
        if (elem.classList.toggle('btnActive')) {
          elem.classList.remove('btnActive');
        }
      });
      return elem;
};

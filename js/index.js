$('.carousel').carousel({
    wrap: false
  }).on('slid.bs.carousel', function () {
      currentSlide = $('.active');
    if(currentSlide.is( ':first-child' )) {
        $('.carousel-control-prev').css('pointer-events', 'none');
       return;
    } else {
        $('.carousel-control-prev').css('pointer-events', 'auto');	  
    }
    if (currentSlide.is( ':last-child' )) {
        $('.carousel-control-next').css('pointer-events', 'none');
       return;
    } else {
        $('.carousel-control-next').css('pointer-events', 'auto');  
    }
  });



  const Confettiful = function (el) {
    this.el = el;
    this.containerEl = null;
  
    this.confettiFrequency = 3;
    this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'];
    this.confettiAnimations = ['slow', 'medium', 'fast'];
  
    this._setupElements();
    this._renderConfetti();
  };
  
  Confettiful.prototype._setupElements = function () {
    const containerEl = document.createElement('div');
    const elPosition = this.el.style.position;
  
    if (elPosition !== 'relative' || elPosition !== 'absolute') {
      this.el.style.position = 'relative';
    }
  
    containerEl.classList.add('confetti-container');
  
    this.el.appendChild(containerEl);
  
    this.containerEl = containerEl;
  };
  
  Confettiful.prototype._renderConfetti = function () {
    this.confettiInterval = setInterval(() => {
      const confettiEl = document.createElement('div');
      const confettiSize = Math.floor(Math.random() * 3) + 7 + 'px';
      const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
      const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + 'px';
      const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
  
      confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;
  
      confettiEl.removeTimeout = setTimeout(function () {
        confettiEl.parentNode.removeChild(confettiEl);
      }, 3000);
  
      this.containerEl.appendChild(confettiEl);
    }, 25);
  };
  
  window.confettiful = new Confettiful(document.querySelector('.js-container'));



let sentences = document.querySelectorAll('.sentence');
let characterCount = 0;

for (let i = 0; i < sentences.length; i++) {
  let sentence = sentences[i];
  let newContent = '';

  // go through all characters of the sentence
  for (let j = 0; j < sentence.textContent.length; j++) {
    let substring = sentence.textContent.substr(j, 1);
    // if we have a character, wrap it
    if (substring !== " ") {
      newContent += `<span style="--animation-order: ${characterCount};">${substring}</span>`;
    } else {
      newContent += substring;
    }
    characterCount++;
  }
  sentence.innerHTML = newContent;
}



(function () {
  let lis = $('.pic-ul > li');
  let index = 0;
  let timer = null;

  //元素监听
  function eventListen() {
    let display = true;
    //在小于576px时， 会出现这个按钮， 点击过后就会出现列表
    $('.btn').on('click', () => {
      $('.head-ul').css({
        'opacity': display ? 1 : 0
      })
      display = !display;
    })

    $('.pic-ul').on('transitionend', () => {
      if (index === lis.length - 1) {
        $('.pic-ul').css({
          'left': 0,
          'transition': ''
        })
        index = 0;
      }
    })

    $('.pic-ul').hover(() => {
      clearInterval(timer);
      timer = null;
    }, () => {
      autoPlay();
    })
  }

  //具体移动的方法
  function move() {
    index++;
    if (index > lis.length) {
      index = 0;
    }
    $('.pic-ul').css({
      'transition': 'left .5s',
      'left': -index * 100 + 'vw'
    })
  }

  //自动轮播
  function autoPlay() {
    timer = setInterval(() => {
      move();
    }, 2000)
  }

  eventListen();
  autoPlay();
})()
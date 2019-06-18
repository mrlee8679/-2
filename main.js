let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({transform:'translateX(-400px)'})
bindEvents()

function bindEvents(){
  $('#buttonWrapper').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let index = $button.index()
  })
}

function goToSlide (index){
  if (index > $buttons.length-1 && index ===0){
    $slides.css({transform:'translateX(${-($buttons.length+1)*300}px)'})
      .one('transitionend',function(){
        $slides.hide().offset()
        $slides.css({transform:'translateX(${-(index+1)*300}px)'}).show()
      })
  }else if (current ===0 && index === $buttons.length-1){
    $slides.css({transform:'translateX(0px)'})
      .one('transitionend',function(){
        $slides.hide().offset()
        $slides.css({transform:'translateX(${-(index+1)*300}px)'}).show()
    })
  }else{
    $slides.css({transform:'translateX(${-(index+1)*300}0px)'})
  }
  current = index
}
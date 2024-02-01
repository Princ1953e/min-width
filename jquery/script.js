$("document").ready(function(){

    $(".colors-btn").click(function(){
        $(".colors").slideToggle("slow");
    });

    $(".color").click(function(){
        let select = $(this).attr('id');
        $("#theamcss").attr("href", "css/" + select + ".css");
    })
    var owl = $('.owl-carousel');
          owl.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 3
              },
              1000: {
                items: 5
              }
            }
          })
})

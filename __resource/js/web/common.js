const Common = () => {
    const $document = $(document);
    const $window = $(window);
    const $body = $('body, html');

    let container = $document.find('#map')[0];
	let options = {
		center: new daum.maps.LatLng(37.5999947,127.0240653),
		level: 3
	};
    let map = new daum.maps.Map(container, options);
    let markerPosition  = new daum.maps.LatLng(37.5999947,127.0240653);

    let marker = new daum.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);

    $document
        .on('click',"[data-site='renewal']",function(){
            alert("현재 리뉴얼 상태입니다.");
            return false;
        })
        .on('click',".nav a",function(){
            $body.stop().animate({scrollTop:$('#'+$(this).data('target')).offset().top},300)
            return false;
        });

    $window.scroll(function(){
        let scroll = $(this).scrollTop();
        let idx = 0;
        if($('.main-content-3').offset().top <= scroll ){
            idx = 2;
        }else if($('.main-content-2').offset().top <= scroll){
            idx = 1;
        }else {
            idx = 0;
        }
        $('.nav a').removeClass('on');
        $('.nav a').eq(idx).addClass('on');
    })

}

export default Common;

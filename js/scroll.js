$(document).ready(function () {
    var $CustomersItem = $('.CustomersItem');
    var $CustomersLi = $('.Customers').find('li');
        var twn = new TimelineLite;
    function sequential(){
        twn.to($CustomersLi.eq(0), 1,{
            backgroundColor: '#ff3f75'
        }).to($CustomersLi.eq(1), 1,{
            backgroundColor: '#ff3f75'
        }).to($CustomersLi.eq(2), 1,{
            backgroundColor: '#ff3f75'
        })
        // console.log($CustomersLi.eq(i));
    }
    var $circleBoxSpan = $('.circleBox span'),
        $circleItem = $(".circleItem"),
        $circleBox = $(".circleBox");
        
    function circleMove() {
            twn.to($circleBox.eq(1), 2, {
                left: 100+'%',
                ease: Expo.easeInOut, 
            }).to($circleBox.eq(0),2,{
                left: 0+'%',
                ease: Expo.easeInOut,
            }).to($circleBox.eq(2),3,{
                left: 50+'%',
                ease:Expo.easeInOut,
            }).to($circleBox.eq(2),1,{
                scale : 1.4,
                ease:Power3.easeInOut,
            });

    }
    
    var waypoints2 = $circleItem.waypoint(function() {setTimeout(circleMove, 500)}, {offset: '40%'})
    var waypoints = $CustomersItem.waypoint(function() {setTimeout(sequential, 1000)}, {offset: '50%'})
});
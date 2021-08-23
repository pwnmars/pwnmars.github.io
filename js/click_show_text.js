var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("死生契阔，与子成说。执子之手，与子偕老", 
            "岂不尔思，远莫致之。女子有行，远父母兄弟", 
            "人生自是有情痴，此恨不关风与月",
             "只缘感君─回顾，使我思君朝与暮", 
             "山有木兮木有枝，心悦君兮君不知", 
             "只愿君心似我心，定不负相思意", 
             "落花人独立，微雨燕双飞", 
             "可怜无定河边骨，犹是春闺梦里人", 
             "千金纵买相如赋，脉脉此情谁诉", 
             "关关雎鸠，在河之洲。窈窕淑女，君子好逑", 
             "侯门—入深似海，从此萧郎是路人", 
             "从此无心爱良夜，任他明月下西楼",
             "曾经沧海难为水，除却巫山不是云",
             "惟将终夜长开眼，报答平生未展眉");

        const col = [
        "#2ae0c8","#e6e2c3","#a2e1d4","#e3c887","#acf6ef","#fad8be","#cbf5fb","#fe6673","#bdf3d4","#fbb8ac"
        ];

        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": col[Math.floor((Math.random()*col.length))]
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
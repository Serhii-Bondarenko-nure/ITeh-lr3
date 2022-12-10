
 var image_num;
 const image = document.getElementById('img_contante');
 const imgs =['images/1.jpg', 'images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg', 'images/9.jpg','images/10.jpg',];
 function img_select() {
    var select = document.getElementById("select_img");
    var value = select.value;
    image_num = value;
    console.log(value);
    image.src = imgs[image_num];
    }

document.getElementById('Change').onclick = function() {
    var width = document.getElementById('Width');
    var height = document.getElementById('Height');
    var border = document.getElementById('Border');
    var alt = document.getElementById('Alt');

    console.log(width.value);
    console.log(height.value);
    console.log(border.value);
    console.log(alt.value);

    image.style.width = width.value + 'px';
    image.style.height = height.value + 'px';
    image.style.borderWidth = border.value + 'px';
    image.alt = alt.value;
}
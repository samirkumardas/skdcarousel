skdcarousel
-----------
Javascript image carousel/slider
Written by pure javascript. So don't need any javascript library like jquery.

Demo
-----
http://dandywebsolution.com/skdcarousel/demo.html

**How to use?**

**html structure**

    <div class="skd-carousel" id="demo1">
      <img src="images/1.jpg" />
      <img src="images/2.jpg" />
      <img src="images/3.jpg" />
      <img src="images/4.jpg" />
      <img src="images/5.jpg" />
      <img src="images/6.jpg" />
      <img src="images/7.jpg" />
    </div>

**Javascript**

new SKDCarousel({selector:'demo1', width:200, height:200, auto:true});
    
Available options are:

*selector* - container node/dom element. Valid CSS selector

*width* - carousel width

*height* - carousel height

*auto* - Auto rotation. Default value is false



**Callback**

| Name                   | Remark  |
| ------------- |:-------------:|
| onCenter      |  Fire with slider number | 



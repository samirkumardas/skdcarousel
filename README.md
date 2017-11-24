skdcarousel
-----------
Javascript image carousel/slider
Written by pure javascript. So don't need any javascript library like jquery.

Demo
-----
<img src="demo.png" />

http://dandywebsolution.com/skdcarousel/demo.html

**How to use?**

**html structure**
    
    <link href="skdcarousel.css" rel="stylesheet">
    <script src="skdcarousel.js"></script>
    
    <div class="skd-carousel" id="demo1">
      <img src="1.jpg" />
      <img src="2.jpg" />
      <img src="3.jpg" />
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



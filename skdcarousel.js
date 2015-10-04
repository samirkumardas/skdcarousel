function SKDCarousel(option) {
	   

            var crlsTimer = 0,
                i;
                
            var setting = option || {selector:'skd-carousel', delay:5};
		
            var crsl = document.getElementById(setting.selector);
            if( !crsl ) return ;
            
            var delay = parseInt(setting.delay) * 1000 || 3000;

            var crsl_distance = 125;
            var crsl_distance_multiplier = 0.6;
            var crsl_size_multiplier = 0.7;
            var crsl_opacity_multiplier = 0.8;
            
            var crsl_items = crsl.querySelectorAll('img');
            crsl_items = Array.prototype.slice.call(crsl_items);
            var crsl_data = []; 
            var crls_width = crsl.clientWidth;
            var crls_height = crsl.clientHeight;
            var center = Math.floor(crsl_items.length/2);

            //playCarousel(crsl_items[0]);

            function setTimer() {

                crlsTimer = setTimeout(function () {
                    playCarousel();
                }, delay);
            }

            function clearTimer() {
                clearTimeout(crlsTimer);
            }


            function initCarousel() {
            
                var item_w, item_h, item_opacity, item_left, item_top, depth, separation;
            	
            	/*for centered item*/
            	item_w= crsl_items[0].clientWidth;
            	item_h= crsl_items[0].clientHeight;
            	item_opacity= 1;
            	item_left = Math.round(crls_width/2)-Math.round(item_w/2);
            
            	item_top = Math.round(crls_height/2)-Math.round(item_h/2);
            	crsl_data[center]={
                 	'w':item_w,
                 	'h':item_h,
                 	'o':item_opacity,
                 	'l':item_left,
                 	't':item_top,
                 	'z':center,
                 	'i':0
                 };
          
                /* calculate position for right items*/
            	separation = crsl_distance; 
            	depth = center;
            	for(i=center+1;i<crsl_items.length;i++) {
               
               		separation = separation*crsl_distance_multiplier;
              		item_w =	crsl_size_multiplier * crsl_data[i-1].w;  
               		item_h =	crsl_size_multiplier * crsl_data[i-1].h;  
               		item_opacity = crsl_opacity_multiplier * crsl_data[i-1].o;  
               		item_left = crsl_data[i-1].l+crsl_data[i-1].w+separation-item_w;
                	--depth;
                	item_top = Math.round(crls_height/2)-Math.round(item_h/2);
                
                	crsl_data[i]={
                 		'w':item_w,
                 		'h':item_h,
                 		'o':item_opacity,
                 		'l':item_left,
                 		't':item_top,
                 		'z':depth,
                 		'i':i
                 	};
                }
              
              /* calculate position for left items*/
               separation = crsl_distance; 
               depth = center;
               for(i=center-1;i>=0;i--) {
               
               		separation = separation*crsl_distance_multiplier;
               		item_w =	crsl_size_multiplier * crsl_data[i+1].w;  
               		item_h =	crsl_size_multiplier * crsl_data[i+1].h;  
               		item_opacity = crsl_opacity_multiplier * crsl_data[i+1].o;  
               		item_left = crsl_data[i+1].l-separation;
                	--depth;
                	item_top = Math.round(crls_height/2)-Math.round(item_h/2);
                
                	crsl_data[i]={
                 		'w':item_w,
                 		'h':item_h,
                 		'o':item_opacity,
                 		'l':item_left,
                 		't':item_top,
                 		'z':depth,
                 		'i':i
                 	};
               }
            
            
             /* set initial position and enable event*/
              for(i=0;i<crsl_items.length;i++) {
            
                  crsl_items[i].orgPos = i;
                  crsl_items[i].crslPos = i;
                  crsl_items[i].addEventListener('click', function (e) {
                     if (this.crslPos==center) return ; 
                     //nextSlide = this.orgPos;
                     //clearTimer();
                     playCarousel(this);
                     
                     
                  });
               }
               
           } 
           
           function playCarousel(item) {
             moveItem(item);  
             setItemPosition(); 
           }

           function moveItem (item) {
              
                   var temp, direction = item.crslPos < center ? 'forward' : 'backward';
                   
                   while (item.crslPos != center) {
                        if( direction == 'forward') {
                        	temp = crsl_items.pop();
                        	crsl_items.unshift(temp);
                        } else {
                            temp = crsl_items.shift();
                            crsl_items.push(temp);
                        }
                          
                        //update position
                        for(i=0;i<crsl_items.length;i++) {
                            crsl_items[i].crslPos = i; 
                            crsl_items[i].className = '';
                        }
                   }
                 item.className= 'active';  
           }
            
         
         function setItemPosition() {
         
             	for(i=0;i<crsl_items.length;i++) {   
                	crsl_items[i].style.width =  crsl_data[i].w+'px';
                	crsl_items[i].style.height =  crsl_data[i].h+'px';
                	crsl_items[i].style.opacity =  crsl_data[i].o;
                	crsl_items[i].style.left =  crsl_data[i].l+'px';
                	crsl_items[i].style.top =  crsl_data[i].t+'px';
                	crsl_items[i].style.zIndex =  crsl_data[i].z;
                	crsl_data[i].i = i;
               } 
             
          }
          
         function findMappedItem(position) {
            
            for(i=0;i<crsl_items.length;i++) { 
               if(position ==crsl_items[i].orgPos ) {
                  return crsl_items[i];
               }
            }    
         }
         
         crsl_items[0].src = crsl_items[0].src; // loading cache issue 
         crsl_items[0].addEventListener('load', function() {
              initCarousel(); 
              playCarousel(crsl_items[0]); 
              
              setTimeout(function(){
               crsl.style.visibility =  'visible'; 
              }, 800);
            
         });
            
}


window.addEventListener('load',function g2(){
            var initX;
            var moveX;
            var X = 0;
            var objX = 0;
            window.addEventListener('touchstart',function(event){
                event.preventDefault();
                var obj = event.target.parentNode;
                if(obj.className == "message"){
                    initX = event.targetTouches[0].pageX;
                    
                    objX =(obj.style.MozTransform.replace(/translateX\(/g,"").replace(/rem\)/g,""))*1;
                }
                if( objX == 0 ){
                    window.addEventListener('touchmove',function(event) {
                        event.preventDefault();
                        var obj = event.target.parentNode;
                        if (obj.className == "message") {
                            moveX = event.targetTouches[0].pageX;
                            X = moveX - initX;
                            if (X > 0) {
                               
                                obj.style.MozTransform = "translateX(" + 0 + "rem)";
                            }
                            else if (X < 0) {
                                var l = Math.abs(X);
                                
                                obj.style.MozTransform = "translateX(" + -l + "rem)";
                                if(l>3.5){
                                    l=3.5;
                                    
                                    obj.style.MozTransform = "translateX(" + -l + "rem)";
                                }
                            }
                        }
                    });
                }
                else if(objX<0){
                    window.addEventListener('touchmove',function(event) {
                        event.preventDefault();
                        var obj = event.target.parentNode;
                        if (obj.className == "message") {
                            moveX = event.targetTouches[0].pageX;
                            X = moveX - initX;
                            if (X > 0) {
                                var r = -3.5 + Math.abs(X);
                                
                                obj.style.MozTransform = "translateX(" + r + "rem)";
                                if(r>0){
                                    r=0;
                                    
                                    obj.style.MozTransform = "translateX(" + r + "rem)";
                                }
                            }
                            else {     //向左滑动
                                
                                obj.style.MozTransform = "translateX(" + -3.5 + "rem)";
                            }
                        }
                    });
                }

            })
            window.addEventListener('touchend',function(event){
                event.preventDefault();
                var obj = event.target.parentNode;
                if(obj.className == "message"){
                   
                    objX =(obj.style.MozTransform.replace(/translateX\(/g,"").replace(/rem\)/g,""))*1;
                    if(objX>-1.75){
                       
                        obj.style.MozTransform = "translateX(" + 0 + "rem)";
                    }else{
                        
                        obj.style.MozTransform = "translateX(" + -3.5 + "rem)";
                    }
                }
             })

        })
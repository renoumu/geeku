window.addEventListener('load',function(){
            var initX;
            var moveX;
            var X = 0;
            var objX = 0;
            window.addEventListener('touchstart',function(event){
                event.preventDefault();
                var obj = event.target.parentNode;
                if(obj.className == "message"){
                    initX = event.targetTouches[0].pageX;
                    objX =(obj.style.WebkitTransform.replace(/translateX\(/g,"").replace(/rem\)/g,""))*1;
                }
                if( objX == 0){
                    window.addEventListener('touchmove',function(event) {
                        event.preventDefault();
                        var obj = event.target.parentNode;
                        if (obj.className == "message") {
                            moveX = event.targetTouches[0].pageX;
                            X = moveX - initX;
                            if (X > 0) {
                                obj.style.WebkitTransform = "translateX(" + 0 + "rem)";
                            }
                            else if (X < 0) {
                                var l = Math.abs(X);
                                obj.style.WebkitTransform = "translateX(" + -l + "rem)";
                                if(l>3.5){
                                    l=3.5;
                                    obj.style.WebkitTransform = "translateX(" + -l + "rem)";
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
                                obj.style.WebkitTransform = "translateX(" + r + "rem)";
                                if(r>0){
                                    r=0;
                                    obj.style.WebkitTransform = "translateX(" + r + "rem)";
                                }
                            }
                            else {     //向左滑动
                                obj.style.WebkitTransform = "translateX(" + -3.5 + "rem)";
                            }
                        }
                    });
                }

            })
            window.addEventListener('touchend',function(event){
                event.preventDefault();
                var obj = event.target.parentNode;
                if(obj.className == "message"){
                    objX =(obj.style.WebkitTransform.replace(/translateX\(/g,"").replace(/rem\)/g,""))*1;
                    if(objX>-1.75){
                        obj.style.WebkitTransform = "translateX(" + 0 + "rem)";
                    }else{
                        obj.style.WebkitTransform = "translateX(" + -3.5 + "rem)";
                    }
                }
             })

        })
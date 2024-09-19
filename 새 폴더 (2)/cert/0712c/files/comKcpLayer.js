    
    $(document).ready(function(){
        
        //레이어팝업으로 포커스 이동
        accessibilityFocus();
        
    });
    

    /**
     * [ alert 호출시 레이어팝업으로 노출 ]
     * @param message
     * @param callback
     * @returns
     */ 
    window.alert = function( message, callback )
    {
        //길이 제한
//            byteLimit(message);
        
    	try{npVCtrl.hideAll();}catch(e){ void(0); } // 키패드 삭제
    	
        kcpLayerPopOpen( "kcp_layer_alert", message, callback);
         
    }
    
    
    /**
     * [ confirm 호출시 레이어팝업으로 노출 ]
     * @param message
     * @param callback
     * @returns
     */ 
    window.confirm = function( message, callback )
    {
    	try{npVCtrl.hideAll();}catch(e){ void(0); } // 키패드 삭제
    	
        kcpLayerConfirmOpen( "kcp_layer_confirm", message, callback);
    }
    
    
    /**
     * 레이어팝업 open
     * @param layerPopName
     * @param message
     * @param callback
     * @returns
     */
    function kcpLayerPopOpen( layerPopName, message, callback )
    {
    	var bodyTxt = $('.common__layerPop--body--contents > p').text(message);
    	bodyTxt.html( bodyTxt.html().replace( /\n/g, "<br/>" ) );
    	
        $('[data-layerPop="'+layerPopName+'"]').addClass('common__layerPop--open')
        $('[data-layerPop="'+layerPopName+'"]').find('.common__layerPop--body').focus();

        // 확인 버튼 이벤트
        $('#kcpLayerOk').on('click', function(e){
            
            e.preventDefault();
            
//            kcpLayerPopClose($(this) , layerPopName, callback);

            $(this).parents('[data-layerPop="'+layerPopName+'"]').removeClass('common__layerPop--open');
            
            $('[data-layerPop-btn="'+layerPopName+'"]').focus();
                    
            //콜백함수 호출
            if( callback != null && typeof callback == "function" )  
            {
                callback();
            }
        });
        
        return false;
    }
    
    /**
     * 레이어팝업 open
     * @param layerPopName
     * @param message
     * @param callback
     * @returns
     */
    function kcpLayerConfirmOpen( layerPopName, message, callback )
    {
    	var bodyTxt = $('.common__layerPop--body--contents > p').text(message);
    	bodyTxt.html( bodyTxt.html().replace( /\n/g, "<br/>" ) );
    	
        $('[data-layerPop="'+layerPopName+'"]').addClass('common__layerPop--open')
        $('[data-layerPop="'+layerPopName+'"]').find('.common__layerPop--body').focus();


        //취소 이벤트
        $('#kcpLayerCancle').on('click', function(e){
            
            e.preventDefault();
            
            $(this).parents('[data-layerPop="'+layerPopName+'"]').removeClass('common__layerPop--open');
            
            callback(false);
            
        });
        
        //확인 이벤트
        $('#kcpLayerConfirm').on('click', function(e){
            
            e.preventDefault();
            
            $(this).parents('[data-layerPop="'+layerPopName+'"]').removeClass('common__layerPop--open');
            
            $('[data-layerPop-btn="'+layerPopName+'"]').focus();
            
            callback(true);
            
        });
        
        
    }
    
    
    /**
     * 탭 포커스 이동
     * @returns
     */
    function accessibilityFocus() 
    {
        $(document).on('keydown', '[data-focus-start], [data-focus-last]', function (e) {
            console.log('keydown');
            var start = $(e.target).attr('data-focus-start'),
                last = $(e.target).attr('data-focus-last'),
                target = start || last || false;
                if (!target || e.keyCode != 9) {
                    return;
                }
                // 레이어팝업 마지막 포커스에서 탭할시 첫번째로 포커스
                if(!!last && !e.shiftKey){
                    $("[data-focus-start=start]").focus();
                    e.preventDefault();
                }
                // 레이어팝업 첫번째 포커스에서 쉬프트+탭 할시 마지막 포커스로 이동
                if(e.shiftKey && !!start){
                    $("[data-focus-last=last]").focus();
                    e.preventDefault();
                }
        });
    }
    
    
    /**
     * 문자열 길이 체크
     * @param tg
     * @returns
     */
    function byteLimit(tg){
        var target = $('.'+tg);
        var limit = 230;
        var str = target.text();
        var strLength = 0;
        var strTitle = "";
        var strPiece = "...";
        var check = false;
        for (i = 0; i < str.length; i++){
            var code = str.charCodeAt(i);
            var ch = str.substr(i,1).toUpperCase();
            //체크 하는 문자를 저장
            strPiece = str.substr(i,1)
            code = parseInt(code);
            if ((ch < "0" || ch > "9") && (ch < "A" || ch > "Z") && ((code > 255) || (code < 0))){
                strLength = strLength + 2; //2byte 로 계산
            }else{
                strLength = strLength + 1;
            }
            
            if(strLength>limit){ //제한 길이 확인
                check = true;
                strTitle = strTitle + "..."
                break;
            }else{
                strTitle = strTitle+strPiece; //제한길이 보다 작으면 자른 문자를 붙여준다.
            }
        }
        if(check){
            alert(limit+"byte 초과된 문자는 잘려서 입력 됩니다.");
        }
        target.text(strTitle);
    }


/**
 * 
 */
var CHK_PASS_NOTI_LOOP = null;

function fn_cleanPassNotiLoop()
{
	try
	{
	    // Polling 종료
	    if ( CHK_PASS_NOTI_LOOP != null )
	    {
	    	clearInterval( CHK_PASS_NOTI_LOOP );	
	    }        	
	}
	catch(e){ void(0); }
}


//NOTI 확인 요청
function fn_pass_noti_recv_req()
{
	var idx = 0;
	
	// 기존 인터벌 존재시
	fn_cleanPassNotiLoop();
	
	CHK_PASS_NOTI_LOOP = setInterval(function(e){
		
		if( idx >= 20 * 3 ) 	// 3분 동안 진행이 없을경우 처리
		{
			fn_cleanPassNotiLoop();
		}
		else
		{
			if( document.form_auth.van_tx_id.value == "" )
			{
				// session_id 미존재시 인터벌 종료
				fn_cleanPassNotiLoop();
				
				return false;
			}
			else
			{
               IframeRequest("../proc/passPolling.jsp", document.form_auth, "fn_pass_noti_recv_res");
			}
		}
		
		idx ++;
	}, 1500);
  
}

//NOTI 확인 응답
function fn_pass_noti_recv_res(jsonData)
{
	var redisData   = ""; 
	var redisGetKey = document.form_auth.van_tx_id.value;
	
	var comm_id = document.form_auth.comm_id.value;
	
	try
	{
		if ( jsonData.dataBody != undefined                     &&
			 jsonData.dataBody.agent_transactionid != undefined  )
		{
			// KT 는 van_tx_id 를 10자리 잘라서 사용 합니다.
			if ( comm_id == "KTF" || comm_id == "KTM" )
			{
				redisGetKey = redisGetKey.substring(0,10);
			}
			
			redisData =jsonData.dataBody.agent_transactionid;
			
			if( redisData == redisGetKey )
			{
				setPageBlur();

				// MOBILE
				if( $('#btnConfirm').length > 0)
				{
					$('#btnConfirm').trigger('click');
				}
				// PC
				if( $('#btnQRSubmit').length > 0)
				{
					$('#btnQRSubmit').trigger('click');
				}
			}
		}
	}
	catch(e){ void(0); }
}
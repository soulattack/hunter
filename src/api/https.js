import axios from 'axios';
import qs from 'qs';
//require('promise.prototype.finally').shim();

/**
 * 封装axios的通用请求
 * @param  {string}   method     get\post\put\delete
 * @param  {string}   url       请求的接口URL
 * @param  {object}   param     传的参数，没有则传空对象
 */
 
 var BURL="http://hunter.keyou666.com";
function https (url,method,params) {
   
      //var xurl="http://hunter.keyou666.com/api/v1/index";
       var xurl=url;
	 return new Promise((resolve, reject) => {
		 
		 
		  axios({
              method:method,
              url:BURL+url,
              data:qs.stringify(params)   

      }).then(function(res){

         //  console.log(res);
		   resolve(res)

      })
		 
	 }) 
			
     
			

	   
  
   
}




export {
    https
};

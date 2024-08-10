const checkPermission=async ()=>{
   if('serviceWorker' in navigator){
      console.log("service worker is supported...");
  }else{
   throw new Error('Service worker not supported');
  }
}

async  function registerServiceWorker(){
try {
   return await navigator.serviceWorker.register('sw.js')
    
} catch (error) {
    
}}

async function requestNotification(){
try {
   const permission=await  window.Notification.requestPermission();
   if(permission!=='granted'){
    throw new Error('notification is denied')
   }
   // else{
   //  new Notification('hello world');
   // }
} catch (error) {
   console.log(error); 
}
}
const main=async ()=>{
  await  checkPermission();
  await requestNotification();
  await  registerServiceWorker();
//   console.log(regSWInstance);
  
//   regSWInstance.showNotification("from chrome")

}
// main();
console.log("service worker file...");
self.addEventListener('activate',async (event)=>{
const subscribe=await self.registration.pushManager.subscribe({ userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array('BDSMc_SbEMMoi9cuC9kI-wMtKKHi9qtmtcWUWFl8GzC896NIKb5YoDfBK06m-cpobq3Ns4o3mCuyDT14curvi-8')});
console.log(subscribe);
const response=await saveSubscription(subscribe);
console.log(response);


})

//Public Key:
// BDSMc_SbEMMoi9cuC9kI-wMtKKHi9qtmtcWUWFl8GzC896NIKb5YoDfBK06m-cpobq3Ns4o3mCuyDT14curvi-8

// Private Key:
// HTAwkmz4RP1PXk3GexG3qBu4EHO3NvBCTPzLbghBrlk


// Utility function to convert VAPID key
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }


  const saveSubscription=async (subscription)=>{
    const response = await fetch('http://localhost:3000/save-subscription',{
      method:'post',
      headers:{'Content-type':"application/json"},
      body:JSON.stringify(subscription)
    })
    return response.json();
  }

  
  self.addEventListener('push',(event)=>{
    self.registration.showNotification("Ohhh!!",{body:event.data.text()})
  })
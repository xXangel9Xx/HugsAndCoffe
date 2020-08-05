export default function LoadContent(){
    
    this.ready = function(callbackFunc) {
        if (document.readyState !== 'loading') {
            callbackFunc();
        }
        else if (document.addEventListener) {
            document.addEventListener('turbolinks:load', callbackFunc);
        }
        else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callbackFunc);
        } else {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'complete') {
                    callbackFunc();
                }
            });
        }
    }
}
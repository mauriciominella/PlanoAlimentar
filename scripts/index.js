//// For an introduction to the Blank template, see the following documentation:
//// http://go.microsoft.com/fwlink/?LinkID=397704
//// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
//// and then run "window.location.reload()" in the JavaScript Console.
//(function () {
//    "use strict";

//    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

//    function onDeviceReady() {
//        // Handle the Cordova pause and resume events
//        document.addEventListener( 'pause', onPause.bind( this ), false );
//        document.addEventListener( 'resume', onResume.bind( this ), false );
        
//        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

//        var date = new Date();
//        var hour = date.getHours();
//        var minute = date.getMinutes();


//        if (hour > 7)
//            $.mobile.silentScroll($("#liCafeDaManha").offset().top);

//        if(hour > 9)
//            $.mobile.silentScroll($("#liLancheDaManha").offset().top);

//        if(hour > 11)
//            $.mobile.silentScroll($("#liAlmoco").offset().top);


//         // $(document).ready(function () {

//            loadPanelContent('plano2.html');
//         // });

        
//    };

//    function onPause() {
//        // TODO: This application has been suspended. Save application state here.
//    };

//    function onResume() {
//        // TODO: This application has been reactivated. Restore application state here.
//    };
//})();



        $(document).ready(function() {


            // are we running in native app or in a browser?
            window.isphone = false;
            if(document.URL.indexOf("http://") === -1 
                && document.URL.indexOf("https://") === -1) {
                window.isphone = true;
            }

            if( window.isphone ) {
                document.addEventListener("deviceready", onDeviceReady, false);
            } else {
                onDeviceReady();
            }
        });

        function onDeviceReady() {
           // do everything here.
           loadPanelContent("plano2.html");
      
        }

        function loadPanelContent(htmlPathPath){

               $('#content').load(htmlPathPath,function(){
                $('#content').trigger('create');
                }); 
        }

           function onPause() {
       // TODO: This application has been suspended. Save application state here.
   };

   function onResume() {
//        // TODO: This application has been reactivated. Restore application state here.
    };
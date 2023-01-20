* Call Stack
We have only 1 call stack . JS can do 1 thing at a time.
JS is single threaded
JS by default supports synchronous tasks only.

* Stack overflow 

function a(){
    b();
}

function b(){
    a()
}
a()

* Web api
Browser gives us APIs that we can call in our Js code. It is written in low level language like C,AJAX requests, local storage, DOM ,etc.
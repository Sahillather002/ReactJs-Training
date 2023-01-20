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
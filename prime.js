"use strict"

function isPrime(n) {
    let i = 2;
    while(i < Math.sqrt(n)) {
    	if (n%i===0) {
    		return false
    	}
    	i++
    }
    return true
}

function firstN(n){
    let res = [];
    let i = 1;
    while(res.length < n+1){
        if (isPrime(i)) {
            res.push(i)
        }
        i++
    }
    return res
}

function nextprime() {
	let i = 0
	let pl = firstN(1000)
	let nprime=document.querySelector("#nextprime")
	while(nprime.innerHTML>=pl[i]) {
		i++
	}
	nprime.innerHTML=pl[i]
}

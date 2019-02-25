https://ko.wikipedia.org/wiki/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98_%EC%88%98

/**
 * 피보나치 수는 첫째 및 둘째 항이 1이며, 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열이다. 
 * 1, 1, 2, 3, 5, 8, ... 
 **/


function fibonaci(n, arr) {
	if(n == 0) return 0;
	else if(n == 1) return 1;
	else if(arr[n]) return arr[n];

	return arr[n] = fibonaci(n-1, arr) + fibonaci(n-2, arr);
}

fibonaci(5, []);
fibonaci(10, []);

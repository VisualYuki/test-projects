let statuses = {
	pending: "PENDING",
	fulFilled: "FULFILLED",
	rejected: "REJECTED",
};

function _Promise(promiseCallback) {
	this.status = statuses.pending;

	if (typeof promiseCallback !== "function") {
		throw new TypeError("not a function");
	}

	this.resolveCallback = () => {};
	this.rejectCallback = () => {};

	let resolve = (data) => {
		if (this.status === statuses.pending) {
			this.status = statuses.fulFilled;

			setTimeout(() => {
				try {
					let result = this.resolveCallback(data);
				} catch (e) {
					this.rejectCallback(e);
				}
			}, 0);
		}
	};

	let reject = (data) => {
		if (this.status === statuses.pending) {
			this.status = statuses.rejected;

			setTimeout(() => {
				this.rejectCallback(data);
			}, 0);
		}
	};

	this.then = (resolveCallback, rejectCallback) => {
		if (resolveCallback) {
			this.resolveCallback = resolveCallback;
		}

		if (rejectCallback) {
			this.rejectCallback = rejectCallback;
		}

		return new _Promise(() => {});
	};

	this.catch = (rejectCallback) => {
		return this.then(null, rejectCallback);
	};

	try {
		promiseCallback(resolve, reject);
	} catch (e) {
		setTimeout(() => {
			this.rejectCallback.bind(this)(e);
		}, 0);
	}
}

//const _promise = new _Promise(function (resolve, reject) {
//	//resolve("resolve setTimeout");

//	setTimeout(() => {
//		resolve("resolve setTimeout");
//	}, 1000);

//	setTimeout(() => {
//		reject("reject setTimout");
//	}, 2000);
//});

//promise.catch((data) => {
//	console.log("catch: " + data);
//});

//_promise.then(
//	(result) => {
//		console.log("result: " + result);

//		throw new Error("error");
//	},
//	(error) => {
//		console.log("error: " + error);
//	}
//);

//_promise.then(
//	(result) => {
//		console.log("result: " + result);

//		throw new Error("error");
//	},
//	(error) => {
//		console.log("error: " + error);
//	}
//);

//promise.catch((erorr) => {
//	console.log("errr");
//});

//let promise = new _Promise(function (resolve, reject) {
//	//setTimeout(() => resolve(1), 1000);
//});

//promise.then(function (result) {
//	alert(result); // 1
//	return result * 2;
//});

//promise.then(function (result) {
//	alert(result); // 1
//	return result * 2;
//});

//promise.then(function (result) {
//	alert(result); // 1
//	return result * 2;
//});

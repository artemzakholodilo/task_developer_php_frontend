apiTest.factory('appService', function ($http, $q) {
        return {
            getData: function (route, param) {
                var defer = $q.defer();

                param = typeof param == 'undefined' ? '' : '/' + param;

                $http.get(apiTest.baseUrl + route + param).success(function (data) {
                        defer.resolve(data);
                    }).
                    error(function () {
                        defer.reject('An error has occurred :(');
                    }
                );
                return defer.promise;
            },
            postData: function (route, data) {
                var defer = $q.defer();
                console.log(data);
                $http.post(apiTest.baseUrl + route, data,
                    {'headers': {
                            'Content-Type': 'application/json; charset=UTF-8'
                        }
                    }).
                    success(function (data) {
                        defer.resolve(data);
                    }).
                    error(function () {
                        defer.reject('Cannot post data to the server :(');
                    }
                );
                return defer.promise;
            },
            putData: function(route, id, data) {
                var defer = $q.defer();
                console.log("DATA", data);
                $http.put(apiTest.baseUrl + route + '/' + id, data,
                    {'headers': {
                            'Content-Type': 'application/json; charset=UTF-8'
                        }
                    }).
                    success(function (data) {
                        defer.resolve(data);
                    }).
                    error(function () {
                        defer.reject('Cannot post data to the server :(');
                    }
                );
                return defer.promise;
            }
        };
    }
);
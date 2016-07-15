angular.module('filterApp')
  .service('filterSvc', function($http){
    this.testData = [{"name": "Michael",
                     "job": "code",
                     "style": "unknown"
                   },
                   {"name": "Aiden",
                    "job": "clever play",
                    "style": "funny"
                  }];
  });

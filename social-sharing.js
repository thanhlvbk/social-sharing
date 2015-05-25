/**
 * exports
 */
SOCIAL_SHARING = {};
(function(){
    var self = this;
    self.share = function(message, subject, file, link) {
        var deferred = RSVP.defer();
        subject = subject || null;
        file = file || null;
        link = link || null;

        window.plugins.socialsharing.share(message, subject, file, link, function () {
            deferred.resolve(true);
        },function () {
            deferred.reject(false);
        });
        return deferred.promise;
    };
    self.shareViaTwitter = function(message, file, link) {
        var deferred = RSVP.defer();
        file = file || null;
        link = link || null;

        window.plugins.socialsharing.shareViaTwitter(message, file, link, function () {
            deferred.resolve(true);
        },function () {
            deferred.reject(false);
        });
        return deferred.promise;
    };
    self.shareViaWhatsApp = function (message, file, link) {
        var deferred = RSVP.defer();
        file = file || null;
        link = link || null;
        window.plugins.socialsharing.shareViaWhatsApp(message, file, link, function () {
            deferred.resolve(true);
        }, function () {
            deferred.reject(false);
        });
        return deferred.promise;
    };
    self.shareViaFacebook = function(message, file, link) {
        var deferred = RSVP.defer();
        file = file || null;
        link = link || null;

        window.plugins.socialsharing.shareViaFacebook(message, file, link, function () {
            deferred.resolve(true);
        },function () {
            deferred.reject(false);
        });
        return deferred.promise;
    };
    self.shareViaSMS = function (message, commaSeparatedPhoneNumbers) {
        var deferred = RSVP.defer();
        window.plugins.socialsharing.shareViaSMS(message, commaSeparatedPhoneNumbers, function () {
            deferred.resolve(true);
        }, function () {
            deferred.reject(false);
        });
        return deferred.promise;
    };
    self.available = function () {
        var deferred = RSVP.defer();
        window.plugins.socialsharing.available(function (isAvailable) {
            if (isAvailable) {
                deferred.resolve();
            }
            else {
                deferred.reject();
            }
        });
    }
}).apply(SOCIAL_SHARING);
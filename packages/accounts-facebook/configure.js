(function () {
  var SAVE_ENABLED = "Meteor.accounts.facebook.saveEnabled";

  var appId = function () {
    return document.getElementById('configure-login-services-dialog-for-facebook-app-id').value;
  };

  var secret = function () {
    return document.getElementById('configure-login-services-dialog-for-facebook-app-secret').value;
  };

  var updateSaveDisabled = function () {
    Session.set(
      SAVE_ENABLED,
      appId() !== '' && secret() !== '');
  };

  Template.configureLoginServicesDialogForFacebook.events = {
    'click #configure-login-services-dialog-for-facebook-save-configuration': function () {
      if (Session.get(SAVE_ENABLED)) {
        Meteor.call("Meteor.accounts.configure", {
          service: 'facebook',
          appId: appId(),
          secret: secret()
        }, function () {
          Meteor.accounts._dismissConfigureLoginServices();
        });
      }
    },
    'input #configure-login-services-dialog-for-facebook-app-id': updateSaveDisabled,
    'input #configure-login-services-dialog-for-facebook-app-secret': updateSaveDisabled
  };

  Template.configureLoginServicesDialogForFacebook.siteUrl = function () {
    return Meteor.absoluteUrl();
  };

  Template.configureLoginServicesDialogForFacebook.saveDisabled = function () {
    return !Session.get(SAVE_ENABLED);
  };
})();

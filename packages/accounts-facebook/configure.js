(function () {

  Template.configureLoginServicesDialogForFacebook.events = {
    'click #configure-login-services-dialog-for-facebook-save-configuration': function () {
      Meteor.call("Meteor.accounts.configure", {
        service: 'facebook',
        appId: document.getElementById('configure-login-services-dialog-for-facebook-app-id').value,
        secret: document.getElementById('configure-login-services-dialog-for-facebook-app-secret').value
      }, function () {
        Meteor.accounts._dismissConfigureLoginServices();
      });
    }
  };

  Template.configureLoginServicesDialogForFacebook.siteUrl = function () {
    return Meteor.absoluteUrl();
  };

  Template.configureLoginServicesDialogForFacebook.saveDisabled = function () {
    return document.getElementById('conf');
  };
})();

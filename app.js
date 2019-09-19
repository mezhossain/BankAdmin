/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'BankAdmin.Application',

    name: 'BankAdmin',

    requires: [
        // This will automatically load all classes in the BankAdmin namespace
        // so that application classes do not need to require each other.
        'BankAdmin.*'
    ],

    // The name of the initial view to create.
    mainView: 'BankAdmin.view.main.Main'
});

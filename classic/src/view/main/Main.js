/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('BankAdmin.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'BankAdmin.view.main.MainController',
        'BankAdmin.view.main.MainModel',
        'BankAdmin.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Tech Administration',
        iconCls: 'fa-user',
        xtype: 'tabpanel',
        items: [{
            title: 'User Accounts',
            // items: [{
            //     xtype: 'result'
            // }],
            bind: {
                html: '{loremIpsum}'
            },
            id: 'screen'
        }, {
            title: 'User Groups',
            // items: [{
            //     xtype: 'result'
            // }],
            bind: {
                html: '{loremIpsum}'
            },
        }, {
            title: 'Group Roles',
            // items: [{
            //     xtype: 'result'
            // }],
            bind: {
                html: '{loremIpsum}'
            },
        }, {
            title: 'Branch',
            // items: [{
            //     xtype: 'result'
            // }],
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            title: 'BIC Code',
            // items: [{
            //     xtype: 'result'
            // }],
            bind: {
                html: '{loremIpsum}'
            },
        }, {
            title: 'Settings',
            // items: [{
            //     xtype: 'result'
            // }],
            bind: {
                html: '{loremIpsum}'
            },
        }, {
            title: 'User Activity',
            // items: [{
            //     xtype: 'result'
            // }],
            bind: {
                html: '{loremIpsum}'
            },
        }],
    }, {
        title: 'Business Administration',
        iconCls: 'fa-users',
        xtype: 'tabpanel',
        items: [{
            title: 'Private Screening List',
            bind: {
                html: '{loremIpsum}'
            },
        }, {
            title: 'Screening Lists Status',
            bind: {
                html: '{loremIpsum}'
            },
        }]
    }, {
        title: 'Configuration',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Search',
        iconCls: 'fa-search',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});

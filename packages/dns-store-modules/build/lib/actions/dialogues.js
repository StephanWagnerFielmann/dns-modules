"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var react_redux_typescript_1 = require("react-redux-typescript");
exports.dialoguesActions = {
    closeDialogue: typesafe_actions_1.createAction('CLOSE_DIALOGUE', function (resolve) {
        return function (id) { return resolve({ id: id }); };
    }),
    openDialogue: typesafe_actions_1.createAction('OPEN_DIALOGUE', function (resolve) {
        return function (id) { return resolve({ id: id }); };
    }),
    subscribeToDialoguesStore: typesafe_actions_1.createAction('SUBSCRIBE_TO_DIALOGUE_STORE', function (resolve) {
        return function (id) { return resolve({ id: id }); };
    })
};
exports.returnOfActions = Object.values(exports.dialoguesActions).map(react_redux_typescript_1.getReturnOfExpression);

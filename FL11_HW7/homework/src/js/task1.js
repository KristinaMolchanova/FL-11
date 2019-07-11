'use strict'

const usersData = [{
        email: 'user@gmail.com',
        password: 'UserPass'
    },
    {
        email: 'admin@gmail.com',
        password: 'AdminPass'
    }
];

const NOTIFICATION = {
    CANCELED: 'Canceled',
    WRONG_EMAIL: 'I don’t know any emails having name length less than 6 symbols',
    UNKNOWN_USER: 'I don’t know you',
    SUGGESTION_CHANGE_PASS: 'Do you want to change your password?',
    WRONG_PASS: 'Wrong password',
    SHOTR_PASS: 'It’s too short password. Sorry',
    FAILED_PASS_CHANGE: 'You have failed the change',
    WRONG_PASS_CONFIRMATION: 'You wrote the wrong password',
    PASS_SUCCESS: 'You have successfully changed your password'
};

let userEmail = prompt('Enter your email');
let userPassword;
let newPassword;
const minEmailLength = 6;
const minPasswordLength = 5;

//Email check

switch (true) {
    case userEmail === '' || userEmail === null:
        alert(NOTIFICATION.CANCELED);
        break;
    case userEmail.length < minEmailLength:
        alert(NOTIFICATION.WRONG_EMAIL);
        break;
    case userEmail === usersData[0].email || userEmail === usersData[1].email:
        userPassword = prompt('Enter your password');
        switch (true) { // Password check
            case userPassword === '' || userPassword === null:
                alert(NOTIFICATION.CANCELED);
                break;
            case userPassword === usersData[0].password && userEmail === usersData[0].email:
                newPassword = confirm(NOTIFICATION.SUGGESTION_CHANGE_PASS);
                break;
            case userPassword === usersData[1].password && userEmail === usersData[1].email:
                newPassword = confirm(NOTIFICATION.SUGGESTION_CHANGE_PASS);
                break;
            default:
                alert(NOTIFICATION.WRONG_PASS);
                break;
        }
        break;
    default:
        alert(NOTIFICATION.UNKNOWN_USER);
        break;
}


// Changing password

switch (true) {
    case newPassword === '' || newPassword === null:
        alert(NOTIFICATION.FAILED_PASS_CHANGE);
        break;
    case newPassword:
        userPassword = prompt('Enter your old password');
        switch (true) {
            case userPassword === '' || userPassword === null:
                alert(NOTIFICATION.CANCELED);
                break;
            case userPassword === usersData[0].password && userEmail === usersData[0].email:
                newPassword = prompt('Enter NEW password');
                break;
            case userPassword === usersData[1].password && userEmail === usersData[1].email:
                newPassword = prompt('Enter NEW password');
                break;
            default:
                alert(NOTIFICATION.WRONG_PASS);
                break;
        }
        break;
    default:

        break;
}

switch (true) {
    case newPassword === '' || newPassword === null:
        alert(NOTIFICATION.CANCELED);
        break;
    case newPassword.length < minPasswordLength:
        alert(NOTIFICATION.SHORT_PASS);
        break;
    default:
        userPassword = prompt('Confirm password');
        if (userPassword !== newPassword) {
            alert(NOTIFICATION.WRONG_PASS);
        } else {
            alert(NOTIFICATION.PASS_SUCCESS);
        }
        break;
}
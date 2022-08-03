import { mobileLogin } from "../components/login"
import { loginIncorrectUser } from "../components/login-incorrect-user"
import { loginIncorrectPin } from "../components/login-incorrect-pin"

export const mobileAppUser = Role('wd/hub', async t => {
    await mobileLogin(t);
    await t
});

/*export const mobileIncorrectUser = Role( async t => {
    await loginIncorrectUser(t);
    await t
});

export const mobileIncorrecUserPin = Role( async t => {
    await loginIncorrectPin(t);
    await t
}); */
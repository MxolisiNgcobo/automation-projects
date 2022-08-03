import { validMobileLogin, invalidMobilePin } from '../helpers/config'
//import { mobileLoginButton } from '../atoms/bottons'

export async function loginIncorrectPin(t)
{
    const msisdn = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[3]/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View[1]/android.widget.EditText")
    const pin = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[3]/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.widget.EditText")
    const mobileLoginButton = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[3]/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.widget.Button")
    const homePage = await $('//*[@text="Home"]')

    const mobileUser = `${validMobileLogin}`
    const mobilePin = `${invalidMobilePin}`
    const loginBtn = `${mobileLoginButton}`

    await t
      .wait(5e3)
      .expect(msisdn.exists).ok({ timeout: 10000 })
      .typeText(msisdn, mobileUser)

    await t
      .typeText(pin, mobilePin)
      .click(loginBtn)
      .wait(5e3)

    await t
      .expect(homePage.exists).ok({ timeout: 10000 })
      .click(homePage)
}
import { ok } from "assert"

export async function mobileLogout(t) 
{
    const swipeMenu  = await $(driver.touchAction([
        {action: 'press', x: 100, y: 152},
        {action: 'moveTo', x: 200, y: 214},
        'release']))

    const logoutButton = await driver.element("//android.view.View[@content-desc=\"Logout\"]/android.widget.TextView")

        await t
        .click(swipeMenu)
        .wait(5e3)

        await t
        .click(logoutButton)
        .wait(5e3)
        .click(ok)  // popup button code needed to click 'ok'
};
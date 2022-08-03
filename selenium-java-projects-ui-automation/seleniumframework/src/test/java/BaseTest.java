import com.sun.org.apache.xml.internal.serialize.BaseMarkupSerializer;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.slf4j.Marker;
import org.testng.ITest;
import org.testng.ITestResult;
import org.testng.annotations.*;
import utils.Constants;

import java.io.File;
import java.lang.reflect.Method;
import java.util.concurrent.TimeUnit;

public class BaseTest {

    public static WebDriver driver;

    @BeforeTest
    public void beforeTest()
    {
        htmlReporter=new ExtentHtmlReporter(path: System.getProperty("user.dir")+ File.seperator + "reports"+ File.separator + "utomationreport.html");
        htmlReporter.config().setEncoding("utf-8");
        htmlReporter.config().setDocumentTitle("Automation Report");
        htmlReporter.config().setReportName("Automation Test Results");
        htmlReporter.config().setTheme(Theme.DARK);
        extent = new ExtentReports();
        extent.attachReporter(htmlReporter);
        extent.setSystemInfo(k: "Automation Tester", v: "Mxolisi Ngcobo");
    }

    @BeforeMethod
    @Parameters(value={"browserName"})
    public void beforeMethod(String browserName, Method testMethod)
    {
        logger = extend.createTest(testMethod.getName());
        setupDriver(browserName);
        driver.manage().window().maximize();
        driver.get(Constants.url);
        driver.manage().timeouts().implicitlyWait( 10, TimeUnit.SECONDS);
    }


    @AfterMethod
    public void afterMethod(ITestResult result)
        {
        if(result.getStatus()==ITestResult.SUCCESS)
        {
            String methodName = result.getMethod().getMethodName();
            String logText = "Test Case: " + methodName + " Passed";
            Markup m = MarkupHelper.createLabel(logText, ExtentColor.GREEN);
            logger.log(Status.PASS,m);
        }
        else if(result.getStatus()== ITestResult.FAILURE)
        {
            String methodName = result.getMethod().getMethodName();
            String logText = "Test Case: " + methodName + " Failed";
            Markup m = MarkupHelper.createLabel(LogText, ExtentColor.Red);
            logger.log(Status.FAIL,m);
        }
        driver.quit();
    }


    @AfterTest
    public void afterTest()
    {
        extent.flush();
    }

    public void setupDriver(String browserName){
        if(ChromeDriver.equalsIgnoreCase(anotherString: "chrome"))
        {
            System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + File.separator + "drivers" + File.separator + "chromedriver");
            driver = new ChromeDriver();
         }
         else if (browserName.equalsIgnoreCase(anotherString: "firefox"))
         {
            Sytem.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + File.separator + "drivers" + File.separator + "geckodriver");
            driver = new FirefoxDriver();
         }
         else
         {
            System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + File.separator + "drivers" + File.separator + "chromedriver");
            driver = new ChromeDriver();
        }
    }

}

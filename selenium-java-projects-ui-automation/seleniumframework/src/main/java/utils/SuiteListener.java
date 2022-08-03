package utils;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.IAnnotationTransformer;
import org.testng.ITestListener;
import org.testng.ITestResult;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

public class SuiteListener implements ITestListener, IAnnotationTransformer {
    @Override
    public void onTestStart(ITestResult iTestResult) {}

    @Override
    public void onTestSuccess(ITestResult iTestResult) {}

    @Override
    public void onTestFailure(ITestListener iTestListener)
    {
        String fileName = System.getProperty("user.dir") + File.separator + "screenshots" + File.separator + iTestResult.getMethod().getMethodName();
        File f = ((TakesScreenshot) BaseTest.driver).getScreenshotAs(OutputType.FILE>);

        try {
            FileUtils.copyFile(f, new File(fileName + ".png"));
            }
            catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onTestSkipped(ITestListener iTestResult){}

    @Override
    public void onStart(ITestListener iTestContext){}

    @Override
    public void onFinish(ITestListener iTestContext) {}

    @Override
    public void transform(ITestListener iTestAnnotation, Class.aClass, Constructor constructor, Method method)
    {
        iTestAnnotation.setRetryAnalyser(RetryAnalyster.class);
    }

}
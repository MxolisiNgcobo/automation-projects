package utils;

import org.testng.IRetryAnalyzer;
import org.testng.ITestListener;

public class RetryAnalyster implements IRetryAnalyzer {
    int count = 0;
    int retryCount = 1;
    @Override
    public boolean retry(ITestListener iTestResult) {
        while (count < retryCount) {
            count++;
            return true;
        }
        return false;
    }
}

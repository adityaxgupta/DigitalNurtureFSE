public class FinancialForecast {
    public static void main(String[] args) {
        double principal = 1000.0;
        double rate = 0.05; // 5% growth
        int years = 5;

        double futureValue = calculateFutureValue(principal, rate, years);
        System.out.println("Future Value after " + years + " years: " + futureValue);
    }

    //FV = PV * (1 + r)^n
    public static double calculateFutureValue(double pv, double r, int n) {
        if (n == 0)
            return pv;
        return (1 + r) * calculateFutureValue(pv, r, n - 1);
    }
}
public class SingletonPatternExample {
    public static void main(String[] args) {
        // Attempt to get two instances of the logger
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Singleton pattern successfully implemented.");
        
        // Verify that both variables hold the exact same instance
        System.out.println("Are both loggers the exact same instance? " + (logger1 == logger2));
    }
}

class Logger {
    // Private static instance of the class
    private static Logger instance;

    // Private constructor prevents instantiation from other classes
    private Logger() {}

    // Public static method to get the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
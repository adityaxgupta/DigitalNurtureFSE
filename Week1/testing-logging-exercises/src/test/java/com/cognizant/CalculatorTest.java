package com.cognizant;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private int result;

    // Setup method runs before every test
    @Before
    public void setUp() {
        System.out.println("Setting up test environment...");
        result = 0;
    }

    @Test
    public void testAdditionUsingAAAPattern() {
        // Arrange
        int a = 10;
        int b = 20;

        // Act
        result = a + b;

        // Assert
        assertEquals(30, result);
        System.out.println("Test executed: " + a + " + " + b + " = " + result);
    }

    // Teardown method runs after every test
    @After
    public void tearDown() {
        System.out.println("Cleaning up test environment...\n");
    }
}
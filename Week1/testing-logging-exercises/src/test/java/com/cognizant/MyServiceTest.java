package com.cognizant;

import static org.mockito.Mockito.*;
import static org.junit.Assert.assertEquals;
import org.junit.Test;

// Dummy classes needed for the test scenario
class ExternalApi {
    public String getData() {
        return "Real Data";
    }
}

class MyService {
    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}

public class MyServiceTest {

    @Test
    public void testExternalApiAndVerify() {
        // Exercise 1: Mocking and Stubbing
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);

        // Exercise 2: Verifying Interactions
        verify(mockApi).getData();

        System.out.println("Mockito test passed: Data mocked and interaction verified!");
    }
}
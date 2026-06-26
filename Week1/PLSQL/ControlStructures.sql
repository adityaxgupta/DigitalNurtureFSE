-- Assuming a table 'Customers' exists with 'CustomerID', 'Age', and 'LoanInterestRate'
DECLARE
    CURSOR c_customers IS SELECT CustomerID, Age, LoanInterestRate FROM Customers;
BEGIN
    FOR r_cust IN c_customers LOOP
        IF r_cust.Age > 60 THEN
            UPDATE Customers 
            SET LoanInterestRate = LoanInterestRate - 1
            WHERE CustomerID = r_cust.CustomerID;
            DBMS_OUTPUT.PUT_LINE('Discount applied for Customer ID: ' || r_cust.CustomerID);
        END IF;
    END LOOP;
    COMMIT;
END;
/
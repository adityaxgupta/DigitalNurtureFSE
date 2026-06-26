CREATE OR REPLACE PROCEDURE AddNewCustomer (
    p_CustomerID IN NUMBER,
    p_Name IN VARCHAR2,
    p_DOB IN DATE,
    p_Balance IN NUMBER
) AS
    v_count NUMBER;
BEGIN
    SELECT COUNT(*) INTO v_count 
    FROM Customers 
    WHERE Name = p_Name AND DOB = p_DOB;

    IF v_count > 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Duplicate Customer: A customer with this Name and DOB already exists.');
    ELSE

        INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
        VALUES (p_CustomerID, p_Name, p_DOB, p_Balance, SYSDATE);
        DBMS_OUTPUT.PUT_LINE('Successfully added new customer: ' || p_Name);
        COMMIT;
    END IF;
END;
/

BEGIN
    AddNewCustomer(101, 'Alice Wonderland', TO_DATE('1992-05-10', 'YYYY-MM-DD'), 5000);
    
    AddNewCustomer(102, 'Alice Wonderland', TO_DATE('1992-05-10', 'YYYY-MM-DD'), 2000);
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error caught: ' || SQLERRM);
END;
/
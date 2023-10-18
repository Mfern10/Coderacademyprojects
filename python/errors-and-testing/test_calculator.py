import calculator, pytest

def test_add():
    assert calculator.add(5, 3) == 8 # test that the add function returns the correct values
    assert calculator.add(7, 12) == 19

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError): #How to test if the exception has happened
        calculator.divide(10, 0)

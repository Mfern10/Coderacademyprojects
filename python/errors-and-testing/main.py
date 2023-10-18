class NegativeNumberError(Exception):
    pass

q = 0
while not q:
    try:
        n = int(input("Enter a numerator:"))
        d = int(input("Enter a denominator:"))

        if n < 0 or d < 0:
            raise NegativeNumberError()

        q = n / d # Exception was raised when trying to divide by zero

        print(q)


    except  ZeroDivisionError:
        print("The denominator can not be zero")

    except ValueError as e:
        print("Inputs must be integers")

    except NegativeNumberError:
        print("Inputs cannot be negative numbers")

    # Catch all exceptions that aren't already raised
    except Exception as e:
        print("Something went wrong")
        print(e)
        # log debug information (including traceback) to an error log file
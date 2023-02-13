# s-m-john, Spring 2023 - COP 3502C - Lab 2
# Simple Calculator: Build a four-function one-run calculator

first_operand = float(input("Enter first operand: "))
second_operand = float(input("Enter second operand: "))

# I originally had this code but removed it because it did not match exactly
# print("You have selected ", first_operand, " and ", second_operand)

print()
print("Calculator Menu")
print("---------------")
print("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division")

# Receives a NameError: name 'add' is not defined
# So I am putting all definitions below

def addition (first_operand,second_operand):
    return first_operand + second_operand

def subtraction (first_operand,second_operand):
        return first_operand - second_operand

def multiplication (first_operand,second_operand):
    return first_operand * second_operand

def division (first_operand,second_operand):
    return first_operand/second_operand

print()
operation_chosen = input("Which operation do you want to perform? ")
print()

# Addition
if operation_chosen=="1":
    print("The result of the operation is ", addition(first_operand,second_operand),". Goodbye!")


# Subtraction
elif operation_chosen== "2":
    print("The result of the operation is", subtraction(first_operand,second_operand),". Goodbye!")

# Multiplication
elif operation_chosen== "3":
    print("The result of the operation is", multiplication(first_operand,second_operand),". Goodbye!")

# Division
elif operation_chosen== "4":
    print("The result of the operation is", division(first_operand,second_operand),". Goodbye!")

else:
    print("Error: Invalid selection! Terminating program.")


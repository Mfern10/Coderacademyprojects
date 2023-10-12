import dog

# dog1 = dog.create('Ted', 15, 'Border Collie')
# dog2 = dog.create('Loki', 3, 'Border Collie')

# dog.walk(dog1)
# dog.walk(dog2)
# dog.walk(dog2)

# print(dog1)
# print(dog2)

dog1 = dog.Dog()
dog1.name = 'Ted' #creates a new attribute
dog2 = dog.Dog()

print(f'dog1: {dog1}')
dog1.greet()
# print(dog2.greet())


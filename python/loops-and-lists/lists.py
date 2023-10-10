spam = ['cat', 'dog', 'bird']
eggs = [12, 78, 100, 54, 42]
foo = ['Matt', 51, 185.0]
tic_tac_toe = [
    ['', 'O', ''], 
    ['X', 'O', ''], 
    ['', 'X', '']
    ]

# # index = 1
# for index, animal in enumerate(spam):
#     print(f'{index + 1}. {animal}')
#     # index += 1

def display_person(person):
    # name = person[0]
    # age = person[1]
    # height = person[2]
    name, age, height = person
    print(f'{name} is {age} years old and {height}cm tall')

# display_person(foo)

spam.insert(1, "kangaroo")
print(spam)

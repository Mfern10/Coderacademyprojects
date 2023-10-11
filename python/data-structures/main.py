from my_module import foo as bar, person, x
from colort import colorize
from colort import colorize, ForegroundColor as fc, Style, BackgroundColor as bc


#print( dir(my_module))

def foo(x):
    print(x)


foo(person)
bar({'name': 'Matt', 'age': 51})

print(dir())



colored_text = colorize('Hello World!', fc.GREEN, Style.BOLD, bc.YELLOW)
print("colored text: ", colored_text)

i = 4
d = 4.0
s = 'HackerRank '
# Declare second integer, double, and String variables.
entero = 0
decimal = 0.0
cadena_texto = ''

# Read and save an integer, double, and String to your variables.
entero = int(input('Escriba un numero entero: '))
decimal = float(input('Escriba un numero decimal: '))
cadena_texto = input('Escriba un texto: ')

# Print the sum of both integer variables on a new line.
print(f'la suma entre los numeros entero es: {i+entero}')

# Print the sum of the double variables on a new line.
print((f'la suma entre los numeros decimales es: {d+decimal}'))

# Concatenate and print the String variables on a new line
# The 's' variable above should be printed first.
print(f'la concatenacion entre los textos es: {s}{cadena_texto}')

print('muchas gracias por probar este programa')
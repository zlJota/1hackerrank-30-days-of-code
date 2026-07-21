# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys

n = int(input())
phone_book = {}

for _ in range(n):
    name, number = input().split()
    phone_book[name] = number

for line in sys.stdin:
    query = line.strip()
    if query:
        if query in phone_book:
            print(f"{query}={phone_book[query]}")
        else:
            print("Not found")
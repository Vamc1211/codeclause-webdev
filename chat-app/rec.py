str="hello"
def reverse(str):
    i=len(str)
    if not(str):
        return
    i-=1
    print(str[i],end="")
    reverse(str[0:i])
reverse(str)
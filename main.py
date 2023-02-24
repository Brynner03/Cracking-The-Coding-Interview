def sum(list):
    if list == []:
        return 0
    return list[0] + sum(list[1:])
arraytoSend = [1,2,3,4,5]

def count(list):
    if list == []:
        return 0
    return 1 + count(list[1:])

def max(list):
    if len(list) == 2:
        return list[0] if list[0] > list[1] else list[1]
    sub_max = max(list[1:])
    return list[0] if list[0] > sub_max else sub_max

def quicksort(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]
        less = [i for i in array[1:] if i <= pivot]
        greater = [i for i in array[1:] if i > pivot]

        return quicksort(less) + [pivot] + quicksort(greater)

listToSend = [13,4,1,5,64]
print(max(listToSend))
print(quicksort(listToSend))
def normalize_data(arr):
    return_lst = dict()
    for i in range(len(arr)):
        return_lst[arr[i].id] = arr[i]
    return return_lst
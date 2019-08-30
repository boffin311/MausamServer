import pandas as pd
import sys;
import numpy as np 
import math

def euclideanDistance(instance1, instance2):
    instance1 = float(instance1)
    instance2 = float(instance2)
    distance = pow((instance1 - instance2), 2)
    return math.sqrt(distance)

def Sort(sub_li): 
    l = len(sub_li) 
    for i in range(0, l): 
        for j in range(0, l-i-1): 
            if (sub_li[j][1] > sub_li[j + 1][1]): 
                tempo = sub_li[j] 
                sub_li[j]= sub_li[j + 1] 
                sub_li[j + 1]= tempo 
    return sub_li  

def knn(mntmp,mxtmp,rain):
    distance = []
    data = pd.read_csv('hackathon.csv')
    data = data.drop('Unnamed: 0',axis=1)
    for i in range(len(data.index)):
        dis = euclideanDistance(data.Min_temp[i],mntmp) + euclideanDistance(data.Max_temp[i],mxtmp) +euclideanDistance(data.Rainfall[i],rain)
        distance.append([data.Crop[i],dis])
    return distance

sl = knn(sys.argv[2],sys.argv[1],2)
sl = Sort(sl)
print(sl)
# print("Hello bhai kesa hai")

'''
for i in range(5):
    print(sl[i][0])  

'''
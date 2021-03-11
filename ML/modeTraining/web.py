import streamlit as st
import pickle as pkl
# To make things easier later, we're also importing numpy and pandas for
# working with sample data.
import numpy as np
import pandas as pd


st.title('Covid Test')

clf = pkl.load(open('covidmodel', 'rb'))

ansList = []

ansList.append(st.number_input('Age'))
ansList.append(st.selectbox('Sex?', ('Male', 'Female',)))
ansList.append(st.number_input('Body Temperatur'))
ansList.append(st.selectbox('Dry Cough?', ('Yes', 'No',)))
ansList.append(st.selectbox('Sour Throat?', ('Yes', 'No',)))
ansList.append(st.selectbox('Weakness?', ('Yes', 'No',)))
ansList.append(st.selectbox('Breathing Problems?', ('Yes', 'No',)))
ansList.append(st.selectbox('Drowsiness?', ('Yes', 'No',)))
ansList.append(st.selectbox('Pain in Chest?', ('Yes', 'No',)))
ansList.append(st.selectbox('Travel History?', ('Yes', 'No',)))
ansList.append(st.selectbox('Diabetes?', ('Yes', 'No',)))
ansList.append(st.selectbox('Heart Disease?', ('Yes', 'No',)))
ansList.append(st.selectbox('Lung Disease?', ('Yes', 'No',)))
ansList.append(st.selectbox('Stroke?', ('Yes', 'No',)))
ansList.append(st.selectbox('Symptoms becoming worse?', ('Yes', 'No',)))
ansList.append(st.selectbox('High BP?', ('Yes', 'No',)))
ansList.append(st.selectbox('Change in appetite?', ('Yes', 'No',)))
ansList.append(st.selectbox('Kidney Disease?', ('Yes', 'No',)))
ansList.append(st.selectbox('Loss in sense of smell?', ('Yes', 'No',)))



finans = []

if st.button("Predict"):
    for item in ansList:
        if(item == "Yes" or item == "Male"):
            item = 1
        elif(item == "No" or item == "Female"):
            item = 0
        finans.append(item)

    #st.write(finans)

    inputVector = np.array(finans)
    inputVector = inputVector.reshape(1,-1)
    st.write(inputVector)

    st.write(clf.predict(inputVector))


    




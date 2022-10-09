import cv2
import numpy as np
import pyautogui
import imutil
import mouse
import keyboard
import datetime
import time
import os


#Variables that need to be changed on update
agentList = ["Astra", "Breach", "Brimstone", "Chamber", "Cypher", "Fade", "Jett", "KayO", "Killjoy", "Neon", "Omen", "Phoenix", "Raze", "Reyna", "Sage", "Skye", "Sova", "Viper", "Yoru"]


dirname = os.path.dirname(__file__)


def produceGameState(alive = 10):

    # Simple pyautogui screenshotting
    image = pyautogui.screenshot()
    # converts image from RGB to BGR.... why? Because OpenCV likes weird formats
    image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

    #Crops and saves the scoreboard
    scoreboard = image[309:758, 572:1347] # Format of coordinates is [height, width] == [x0:x1, y0:y1], not [x0:y0 x1:y1]
    cv2.imwrite("scoreboard.png", scoreboard)

    for i in range(alive):
        if i == 10:
            pyautogui.press(0) #special case for 10
        else:
            pyautogui.press(str(i+1)) # Cycles to next player
        time.sleep(0.01)

        # Simple pyautogui screenshotting
        image = pyautogui.screenshot()
        # converts image from RGB to BGR.... why? Because OpenCV likes weird formats
        image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
        utility = image[910:1080, 530:1200]
        cv2.imwrite("agentUtility" + str(i) + ".png", utility)

#this function generates a file path for the identifyAgentHUD function to use
def generateAssetPath(arrayElement):
    partialPath = "/src/assets/agents/" + arrayElement + "/abilities/Ultimate.png"
    return "C:/Users/Capta/Documents/Visual Studio 2017/UMass-Valorant-Observer-UI" + partialPath #hardcoded for testing

def identifyAgentHUD(pointOfViewNumber = 0):
    #for agentListElement in agentList:
    agentListElement = "Brimstone"
    print(generateAssetPath(agentListElement))
    ultimateImage = cv2.imread(generateAssetPath(agentListElement), 0)
    w, h = ultimateImage.shape[::-1]
        #ultimateImage = cv2.cvtColor(ultimateImage, cv2.COLOR_BGR2GRAY) 
    imageAnalysis = cv2.imread("C:/Users/Capta/Downloads/testSS.png") #hardcoded path for testing
    cv2.imshow("pre", imageAnalysis)
    imageAnalysis = cv2.cvtColor(imageAnalysis, cv2.COLOR_BGR2GRAY)

    res = cv2.matchTemplate(imageAnalysis, ultimateImage, cv2.TM_CCOEFF_NORMED)
    loc = np.where(res >- 0.8)

        #this displays the image, is temporary troubleshooting step
    for pt in zip(*loc[::-1]):
        cv2.rectangle(imageAnalysis, pt, (pt[0] + w, pt[1] + h), (0, 255, 255), 2)
    cv2.imshow('detected', imageAnalysis)
    cv2.waitKey(0)


while True:
    if keyboard.read_key() == "p":
        produceGameState()
        now = str(datetime.datetime.now())
        print("Produced Game State at " + now)
    elif keyboard.read_key() == "[":
        identifyAgentHUD()
    elif keyboard.read_key() == "o":
        break
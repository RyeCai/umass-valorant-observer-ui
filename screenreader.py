import cv2
import numpy as np
import pyautogui
import imutil
import mouse
import keyboard
import datetime


def produceGameState(alive = 10):

    # Simple pyautogui screenshotting
    image = pyautogui.screenshot()
    # converts image from RGB to BGR.... why? Because OpenCV likes weird formats
    image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

    #Crops and saves the scoreboard
    scoreboard = image[309:758, 572:1347] # Format of coordinates is [height, width] == [x0:x1, y0:y1], not [x0:y0 x1:y1]
    cv2.imwrite("scoreboard.png", scoreboard)

    for i in range(alive):
        utility = image[530:1200, 910:1080]
        cv2.imwrite("agentUtility" + str(i) + ".png", utility)
        mouse.right_click()

while True:
    if keyboard.read_key() == "p":
        produceGameState()
        now = str(datetime.datetime.now())
        print("Produced Game State at " + now)
        break
import numpy as np
from PIL import ImageGrab
import cv2
import pyautogui

while(True):
    printscreen_pil =  ImageGrab.grab()
    # printscreen_numpy =   np.array(printscreen_pil.getdata(),dtype='uint8')\
    # .reshape((printscreen_pil.size[1],printscreen_pil.size[0],3)) 
    cv2.imshow('window', cv2.cvtColor(np.array(printscreen_pil), cv2.COLOR_BGR2RGB))
    if cv2.waitKey(25) & 0xFF == ord('q'):
        cv2.destroyAllWindows()
        break

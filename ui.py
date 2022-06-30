from tkinter import *
from PIL import ImageTk,Image
from pathlib import Path

# Creates Tkinter object
root = Tk()
root.configure(bg='white')
root.wm_attributes("-transparentcolor", 'white') #all white created by tkinter is turned into transparency

# Creates Canvas
canvas = Canvas(root, width = 1920, height = 1080)
canvas.pack()
canvas.create_rectangle(0, 0, 1920, 1080, fill='white', outline='white')

#Paths for all images used in UI
topBarPath = Path("ui_assets/top_bar.png")
leftPlayerBarPath = Path("ui_assets/leftPlayerBar.png")
rightPlayerBarPath = Path("ui_assets/rightPlayerBar.png")
transparencyPath = Path("ui_assets/transparency.png")

transparency = ImageTk.PhotoImage(Image.open(transparencyPath))
canvas.create_image(0, 0, anchor=NW, image=transparency)

# Adds Top bar
topBar = ImageTk.PhotoImage(Image.open(topBarPath))
canvas.create_image(960, 0, anchor=N, image=topBar)

# Adds Left Player Bar
leftPlayerBar = ImageTk.PhotoImage(Image.open(leftPlayerBarPath))
canvas.create_image(0, 500, anchor=NW, image=leftPlayerBar)


# Execute tkinter
root.mainloop()
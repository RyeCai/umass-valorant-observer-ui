from tkinter.ttk import Style
import wx
from pathlib import Path
from PIL import ImageTk,Image


class HUD(wx.Frame):

    def __init__(self, parent, title):
        super(HUD, self).__init__(parent, title=title, size=(1920, 1080), style=wx.TRANSPARENT_WINDOW)
        # self.SetTransparent(0)
        self.InitUI()
        self.Centre()
        
    def InitUI(self):

        self.panel = wx.Panel(self, -1, style=wx.TRANSPARENT_WINDOW)

        self.LoadImages()

        

        # images = wx.PaintDC(self)

        """
        #images.DrawBitmap(self.topBar, 100, 100)
        #images.DrawBitmap(self.leftPlayerBar, 0, 100)
        #images.DrawBitmap(self.rightPlayerBar, 200, 100)
        """

        
        self.topBar.SetPosition((0, 20))
        self.leftPlayerBar.SetPosition((40, 160))
        self.rightPlayerBar.SetPosition((170, 50))
        
    
    def LoadImages(self):

        """
        self.topBar = wx.Bitmap("ui_assets/top_bar.png", wx.BITMAP_TYPE_PNG)
        self.leftPlayerBar = wx.Bitmap("ui_assets/leftPlayerBar.png", wx.BITMAP_TYPE_PNG)
        self.rightPlayerBar = wx.Bitmap("ui_assets/rightPlayerBar.png", wx.BITMAP_TYPE_PNG)
        """

        
        self.topBar = wx.StaticBitmap(self.panel, wx.ID_ANY, wx.Bitmap("ui_assets/top_bar.png", wx.BITMAP_TYPE_PNG))

        self.leftPlayerBar = wx.StaticBitmap(self.panel, wx.ID_ANY, wx.Bitmap("ui_assets/leftPlayerBar.png", wx.BITMAP_TYPE_PNG))

        self.rightPlayerBar = wx.StaticBitmap(self.panel, wx.ID_ANY, wx.Bitmap("ui_assets/rightPlayerBar.png", wx.BITMAP_TYPE_PNG))
        

def main():

    app = wx.App()
    ex = HUD(None, title='HUD')
    ex.Show()
    app.MainLoop()


if __name__ == '__main__':
    main()
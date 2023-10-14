# RealSense-Camera
WEMARS real sense D435 Camera


Intel RealSense SDK 2.0 Library/API's for accessing camera and capturing data **(These drivers will be necessary)**:
https://github.com/IntelRealSense/librealsense/releases/tag/v2.54.2


**Option**

Add Video To HTML site:

https://www.youtube.com/watch?v=KKRbe2e_sIE

https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm

or use javascript in the HTML site to access the webcam. 

Possibly way to use external camera instead of webcam:
Use JavaScript MeadiaStream API: Allows access to the video and audio captured by external camera through streams. 

**This could be used if we could set the computer webcam as the D345 webcam of the computer, although I'm not sure if
that will work in application with the actual rover.**





**UNNECESSARY POSSIBLY:** {

configure the camera for streaming and rendering Depth & RGB data to the screen using OpenGL. 
https://dev.intelrealsense.com/docs/rs-capture

OpenGl application:
https://www.opengl.org/

Consider OpenGl rendering loop to make data real-time. 

Encoding Data, use possible C++ and FFmpeg to encode video data into proper format for transmission
https://ffmpeg.org/
https://github.com/FFmpeg/FFmpeg

FFmpeg has a large range of video and audio codec, Codec essentially can be used to compress large amounts of data
Codec explanation:
(https://www.techtarget.com/searchunifiedcommunications/definition/codec)


Networking Libraries, Connection to server over Internet:

Libcurl: https://curl.se/libcurl/
This can be used for data exchange between a device and a server through a terminal, or used to create a connection between the server and the backend.

Or Boost Asio:
https://www.boost.org/doc/libs/1_63_0/doc/html/boost_asio.html

Create html site to connect to. }








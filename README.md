# RealSense-Camera
WEMARS real sense


Intel RealSense SDK 2.0 Library/API's for accessing camera and capturing data:
https://github.com/IntelRealSense/librealsense/releases/tag/v2.54.2

configure the camera for streaming and rendering Depth & RGB data to the screen using OpenGl. (Might be unnecessary step?)
https://dev.intelrealsense.com/docs/rs-capture

OpenGl application:
https://www.opengl.org/

Possibly consider OpenGl rendering loop to make data real-time. 

Encoding Data, use possible C++ and FFmpeg to encode video data into proper format for transmission
https://ffmpeg.org/
https://github.com/FFmpeg/FFmpeg

FFmpeg has a large range of video and audio codec, Codec essentially can be used to compress large amounts of data
Codec explanation: (https://www.techtarget.com/searchunifiedcommunications/definition/codec)


Networking Libraries, Connection to server over internet:

Libcurl: https://curl.se/libcurl/
This can be used for data exchange between a device and a server through a terminal. or used to create a connection between the server and backend.

Or use boost Asio to connect opengGl and client:
https://www.boost.org/doc/libs/1_63_0/doc/html/boost_asio.html


Create html site to connect to.

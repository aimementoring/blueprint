```js
<AimeVideoPlayer
  videoTitle="This is a title"
  videoDescription="This is a video description"
  url="https://www.youtube.com/embed/FUWwQv1kklY"
  imageUrl="https://aime-website.s3.amazonaws.com/assets/images/know-aime/white-paper.jpg"
/>
```

Required prop:

- `url` = string

Optional props:

- `imageUrl` = string
- `listType` = string
- `withModal` = bool
- `videoTitle` = string
- `playListID` = string
- `modalWithImage` = bool
- `videoDescription` = string

videoPlayersConfig props (optional) most likley these will not need to be changed, but the option is available.

- `loop` = bool
- `mute` = bool
- `byLine` = bool
- `controls` = bool
- `autoPlay` = bool
- `listType` = string
- `playListID` = string
- `playsInPicture` = bool
- `backgroundVimeo` = bool

To play video with modal add this prop => `withModal`  
To change the placeholder image update this prop => `imageUrl` or for a more simple player remove custom placeholder image by removing `imageUrl` prop.

VIMEO:  
Depending on video owners settings on vimeo, controls can be hidden.  
Owner settings can be updated in vimeo webApp and controls can be hidden with paid versions of vimeo.  
controls for `vimeo.com/169599296` are hidden, change to this video `vimeo.com/22439234` the controls can't be hidden.

YOUTUBE:  
If you want other videos to play after the "inital video" (intial video = video in url prop)  
then add this prop => `listType="playlist"` with the playlist ID you want to play through, e.g. `playListID="PLjfNcXcq0TORvhTeJV_dgZrU2mjCeTqg2"`.

AIME:

Test URL's:  
youTube url: `https://www.youtube.com/embed/FUWwQv1kklY`  
vimeo url: `https://vimeo.com/169599296` | | `https://vimeo.com/22439234`
aime url: `https://s3-ap-southeast-2.amazonaws.com/video-api-production/encoding-output/161-8ea8db58-451f-43fb-a351-5f18cd0dcad4-1000290001/web.mp4`

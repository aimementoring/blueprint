```js
<AimeVideoPlayer
  listType="playlist"
  playListID="PLjfNcXcq0TORvhTeJV_dgZrU2mjCeTqg2"
  url="https://www.youtube.com/watch?time_continue=24&v=FUWwQv1kklY"
  imageUrl="https://aime-website.s3.amazonaws.com/assets/images/homepage-grid/background-becomeamentor@2x.jpg"
/>
```

To play video with modal add this prop => `withModal`  
To change the placeholder image update this prop => `imageUrl`

VIMEO:  
Depending on video owners settings on vimeo, controls can be hidden.  
Owner settings can be updated in vimeo webApp and controls can be hidden with paid versions of vimeo.  
controls for `vimeo.com/169599296` are hidden, change to this video `vimeo.com/22439234` the controls can't be hidden.

YOUTUBE:  
If you want other videos to play after the "inital video" (intial video = video in url prop)  
then update this prop => `playListID` with the playlist ID you want to play through.

youTube url: `https://www.youtube.com/watch?time_continue=24&v=FUWwQv1kklY`  
vimeo url: `https://vimeo.com/169599296` || `https://vimeo.com/22439234`

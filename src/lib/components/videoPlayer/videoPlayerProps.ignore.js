import PropTypes from 'prop-types';

export const videoPlayerProps = {
  containerClassName: PropTypes.string,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object,
  ]).isRequired,
  playing: PropTypes.bool,
  loop: PropTypes.bool,
  controls: PropTypes.bool,
  light: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  volume: PropTypes.number, // Between 0 and 1
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  progressInterval: PropTypes.number, // Milliseconds
  playsinline: PropTypes.bool,
  pip: PropTypes.bool,
  wrapper: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({ render: PropTypes.func.isRequired }),
  ]),
  config: PropTypes.shape({
    soundcloud: PropTypes.shape({
      options: PropTypes.object,
    }),
    youtube: PropTypes.shape({
      playerVars: PropTypes.object,
      embedOptions: PropTypes.object,
      preload: PropTypes.bool,
    }),
    facebook: PropTypes.shape({
      appId: PropTypes.string,
    }),
    dailymotion: PropTypes.shape({
      params: PropTypes.object,
      preload: PropTypes.bool,
    }),
    vimeo: PropTypes.shape({
      playerOptions: PropTypes.object,
      preload: PropTypes.bool,
    }),
    file: PropTypes.shape({
      attributes: PropTypes.object,
      tracks: PropTypes.array,
      forceVideo: PropTypes.bool,
      forceAudio: PropTypes.bool,
      forceHLS: PropTypes.bool,
      forceDASH: PropTypes.bool,
      hlsOptions: PropTypes.object,
      hlsVersion: PropTypes.string,
      dashVersion: PropTypes.string,
    }),
    wistia: PropTypes.shape({
      options: PropTypes.object,
    }),
    mixcloud: PropTypes.shape({
      options: PropTypes.object,
    }),
    twitch: PropTypes.shape({
      options: PropTypes.object,
    }),
  }),
  onReady: PropTypes.func,
  onStart: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onBuffer: PropTypes.func,
  onEnded: PropTypes.func,
  onError: PropTypes.func,
  onDuration: PropTypes.func,
  onSeek: PropTypes.func,
  onProgress: PropTypes.func,
  onEnablePIP: PropTypes.func,
  onDisablePIP: PropTypes.func,
};

export const videoPlayerDefaultProps = {
  containerClassName: '',
  playing: false,
  loop: false,
  controls: false,
  light: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  style: {},
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  wrapper: 'div',
  config: {
    soundcloud: {
      options: {
        visual: true, // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false,
      },
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1,
      },
      embedOptions: {},
      preload: false,
    },
    facebook: {
      appId: '1309697205772819',
    },
    dailymotion: {
      params: {
        api: 1,
        'endscreen-enable': false,
      },
      preload: false,
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false,
      },
      preload: false,
    },
    file: {
      attributes: {
        disablepictureinpicture: 'true',
      },
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      hlsOptions: {},
      hlsVersion: '0.10.1',
      dashVersion: '2.9.2',
    },
    wistia: {
      options: {},
    },
    mixcloud: {
      options: {
        hide_cover: 1,
      },
    },
    twitch: {
      options: {},
    },
  },
  onReady: () => {},
  onStart: () => {},
  onPlay: () => {},
  onPause: () => {},
  onBuffer: () => {},
  onEnded: () => {},
  onError: () => {},
  onDuration: () => {},
  onSeek: () => {},
  onProgress: () => {},
  onEnablePIP: () => {},
  onDisablePIP: () => {},
};

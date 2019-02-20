import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import plyr from 'plyr';
import './videoPlayer.module.scss';
import { capitalize } from '../../utils/helpers';
import videoPlayerDefaultProps from './videoPlayerDefaultProps.ignore';

export default class VideoPlayer extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['youtube', 'vimeo', 'video', 'audio']),
    className: PropTypes.string,
    videoId: PropTypes.string,
    url: PropTypes.string,
    onReady: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onEnd: PropTypes.func,
    onLoadedData: PropTypes.func,
    onSeeked: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onEnterFullscreen: PropTypes.func,
    onExitFullscreen: PropTypes.func,
    onVolumeChange: PropTypes.func,
    onCaptionsEnabled: PropTypes.func,
    onCaptionsDisabled: PropTypes.func,
    // plyr props
    enabled: PropTypes.bool,
    title: PropTypes.string,
    debug: PropTypes.bool,
    autoplay: PropTypes.bool,
    autopause: PropTypes.bool,
    seekTime: PropTypes.number,
    volume: PropTypes.number,
    muted: PropTypes.bool,
    duration: PropTypes.number,
    displayDuration: PropTypes.bool,
    invertTime: PropTypes.bool,
    toggleInvert: PropTypes.bool,
    ratio: PropTypes.string,
    clickToPlay: PropTypes.bool,
    hideControls: PropTypes.bool,
    resetOnEnd: PropTypes.bool,
    disableContextMenu: PropTypes.bool,
    loadSprite: PropTypes.bool,
    iconPrefix: PropTypes.string,
    iconUrl: PropTypes.string,
    blankVideo: PropTypes.string,
    quality: PropTypes.shape({
      default: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    }),
    loop: PropTypes.shape({
      active: PropTypes.bool,
    }),
    speed: PropTypes.shape({
      selected: PropTypes.number,
      options: PropTypes.arrayOf(PropTypes.number),
    }),
    keyboard: PropTypes.shape({
      focused: PropTypes.bool,
      global: PropTypes.bool,
    }),
    tooltips: PropTypes.shape({
      controls: PropTypes.bool,
      seek: PropTypes.bool,
    }),
    fullscreen: PropTypes.shape({
      enabled: PropTypes.bool,
      fallback: PropTypes.bool,
      iosNative: PropTypes.bool,
    }),
    storage: PropTypes.shape({
      enabled: PropTypes.bool,
      key: PropTypes.string,
    }),
    controls: PropTypes.arrayOf(PropTypes.string),
    settings: PropTypes.arrayOf(PropTypes.string),
    poster: PropTypes.string,
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        size: PropTypes.string,
      }),
    ),
    captions: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.string,
        label: PropTypes.string,
        src: PropTypes.string.isRequired,
        srclang: PropTypes.string,
        default: PropTypes.bool,
        key: PropTypes.any,
      }),
    ),
  };

  static defaultProps = {
    ...videoPlayerDefaultProps,
  };

  static getDerivedStateFromProps = nextProps => ({
    muted: nextProps.muted,
  });

  constructor(props) {
    super(props);

    this.player = null;
    this.elementRef = new React.createRef();

    this.state = {
      muted: null,
    };
  }

  componentDidMount() {
    const defaultOptions = Object.keys(videoPlayerDefaultProps).reduce(
      (acc, current) => ({
        ...acc,
        [current]: this.props[current],
      }),
      {},
    );

    const options = {
      ...defaultOptions,
      muted: this.state.muted,
    };

    const {
      onReady,
      onPlay,
      onPause,
      onEnd,
      onLoadedData,
      onSeeked,
      onTimeUpdate,
      onEnterFullscreen,
      onExitFullscreen,
      onCaptionsEnabled,
      onCaptionsDisabled,
      onVolumeChange,
    } = this.props;

    const node = this.elementRef.current;
    this.player =
      node && node.classList.contains(this.props.className) ? new plyr(node, options) : null;

    if (this.player) {
      this.player.on('play', onPlay);
      this.player.on('pause', onPause);
      this.player.on('ended', onEnd);
      this.player.on('loadeddata', onLoadedData);
      this.player.on('enterfullscreen', onEnterFullscreen);
      this.player.on('exitfullscreen', onExitFullscreen);
      this.player.on('ready', () => onReady(this.player));
      this.player.on('seeked', onSeeked(this.getCurrentTime()));
      this.player.on('timeupdate', onTimeUpdate(this.getCurrentTime()));
      this.player.on('captionsenabled', onCaptionsEnabled);
      this.player.on('captionsdisabled', onCaptionsDisabled);
      this.player.on('volumechange', () => {
        const { muted, volume } = this.player;
        onVolumeChange({ muted, volume });
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.muted !== this.props.muted) {
      this.player.muted = this.props.muted;
    }

    if (prevProps.videoId !== this.props.videoId) {
      if (this.props.videoId) this.updateVideoSource(this.props.videoId, this.props.provider);
    }
  }

  componentWillUnmount() {
    if (this.player) this.player.destroy();
  }

  getType = () => this.player && this.player.source && this.player.source.type;

  play = () => this.player && this.player.play();

  pause = () => this.player && this.player.pause();

  togglePlay = () => this.player && this.player.togglePlay();

  stop = () => this.player && this.player.stop();

  restart = () => this.player && this.player.restart();

  rewind = time => this.player && this.player.rewind(time);

  forward = time => this.player && this.player.forward(time);

  getCurrentTime = () => this.player && this.player.currentTime;

  setCurrentTime = currentTime => (this.player.currentTime = currentTime);

  getDuration = () => this.player && this.player.duration;

  getVolume = () => this.player && this.player.volume;

  isMuted = () => this.player && this.player.muted;

  isPaused = () => this.player && this.player.paused;

  toggleMute = () => this.player && this.player.toggleControls(this.player.muted);

  setMuted = (muted = true) => (this.player.muted = muted);

  increaseVolume = step => this.player && this.player.increaseVolume(step);

  decreaseVolume = step => this.player && this.player.decreaseVolume(step);

  setVolume = amount => (this.player.volume = amount);

  enterFullscreen = () => this.player && this.player.fullscreen.enter();

  exitFullscreen = () => this.player && this.player.fullscreen.exit();

  toggleFullscreen = () => this.player && this.player.fullscreen.toggle();

  updateVideoSource = (videoId, provider) => {
    this.player.source = {
      type: 'video',
      sources: [
        {
          src: videoId,
          provider,
        },
      ],
    };
  };

  updateHtmlVideoSource = (videoUrl, type, title, poster, tracks) => {
    this.player.source = {
      type,
      title,
      sources: [
        {
          src: videoUrl,
          type: 'video/mp4',
        },
      ],
      poster,
      tracks,
    };
  };

  // For video support for plyr supported videos using videoId (Youtube and Vimeo for now).
  renderDefaultPlayer() {
    const { className, style, type, videoId } = this.props;
    return (
      <div
        className={className}
        style={style}
        data-plyr-provider={type}
        data-plyr-embed-id={videoId}
        ref={this.elementRef}
      />
    );
  }

  // For video support for source defined as link to those video files.
  renderVideoPlayer() {
    const { sources, url, preload, poster, className, captions } = this.props;

    const captionsMap = captions.map((source, index) => {
      const { key, kind, label, src, srclang, default: def, ...attributes } = source;
      return (
        <track
          key={key || index}
          kind={kind || 'captions'}
          label={label}
          src={src}
          srclang={srclang}
          default={def}
          {...attributes}
          ref={this.elementRef}
        />
      );
    });

    if (sources && Array.isArray(sources) && sources.length) {
      return (
        <video className={className} preload={preload} poster={poster} ref={this.elementRef}>
          {sources.map((source, index) => (
            <source
              key={index}
              src={source.src}
              type={source.type}
              size={source.size && source.size}
            />
          ))}
          {captionsMap}
        </video>
      );
    }

    return (
      <video
        className={className}
        src={url}
        preload={preload}
        poster={poster}
        ref={this.elementRef}
      >
        {captionsMap}
      </video>
    );
  }

  renderAudioPlayer() {
    const { sources, url, preload, className } = this.props;

    if (sources && Array.isArray(sources) && sources.length) {
      return (
        <audio className={className} preload={preload} ref={this.elementRef}>
          {sources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
        </audio>
      );
    }

    return <audio className={className} preload={preload} src={url} ref={this.elementRef} />;
  }

  render() {
    let { type } = this.props;
    if (['audio', 'video'].indexOf(type) === -1) type = 'default';

    return this[`render${capitalize(type)}Player`]();
  }
}
